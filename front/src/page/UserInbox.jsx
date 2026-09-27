import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import { useSelector } from "react-redux";
import socketIO from "socket.io-client";
import { format } from "timeago.js";
// import * as timeago from 'timeago.js';
import { backend_url, server } from "../server";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineSend } from "react-icons/ai";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import styles from "../styles/style";
import ProfileSidebar from "../components/Profile/ProfileSidebar";
import pic from "../assets/homepage/téléchargement (2).jpg"
const ENDPOINT = "http://localhost:7001/";
const socketId = socketIO(ENDPOINT, { transports: ["websocket"] });

const UserInbox = () => {
    const { user,loading } = useSelector((state) => state.user);

  const [conversations, setConversations] = useState([]);
  const [open, setOpen] = useState(false);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [messages, setMessages] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [userData, setUserData] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [activeStatus, setActiveStatus] = useState(false);

  useEffect(() => {
    socketId.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);


  useEffect(() => {
    const getConversation = async () => {
      try {
        const resonse = await axios.get(
          `${server}/conversation/get-all-conversation-user/${user?._id}`,
          {
            withCredentials: true,
          }
        );

        setConversations(resonse.data.conversations);
      } catch (error) {
        // console.log(error);
      }
    };
    getConversation();
  }, [user, messages]);



   useEffect(() => {
    if (user) {
      const sellerId = user?._id;
      socketId.emit("addUser", sellerId);
      socketId.on("getUsers", (data) => {
        setOnlineUsers(data);
      });
    }
  }, [user]);

  const onlineCheck = (chat) => {
    const chatMembers = chat.members.find((member) => member !== user?._id);
    const online = onlineUsers.find((user) => user.userId === chatMembers);

    return online ? true : false;
  };

  // gt all msg
  useEffect(() => {
    const getMessage = async () => {
      try {
        const response = await axios.get(
          `${server}/message/get-all-messages/${currentChat?._id}`
        );
        setMessages(response.data.messages);
      } catch (error) {
        console.log(error);
      }
    };
    getMessage();
  }, [currentChat]);

  // create new msg
  const sendMessageHandler = async (e) => {
    e.preventDefault();

    const message = {
        sender: user._id,
        text: newMessage,
        conversationId: currentChat._id,
    };
    const receiverId = currentChat.members.find(
        (member) => member !== user?._id
      );
  
      socketId.emit("sendMessage", {
        senderId: user?._id,
        receiverId,
        text: newMessage,
      });

    try {
      if (newMessage !== "") {
        await axios
          .post(`${server}/message/create-new-message`, message)
          .then((res) => {
            setMessages([...messages, res.data.message]);
            updateLastMessage();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const updateLastMessage = async () => {
    socketId.emit("updateLastMessage", {
      lastMessage: newMessage,
      lastMessageId: user._id,
    });

    await axios
      .put(`${server}/conversation/update-last-message/${currentChat._id}`, {
        lastMessage: newMessage,
        lastMessageId: user._id,
      })
      .then((res) => {
        // console.log(res.data.conversation);
        setNewMessage("");
      })
      .catch((error) => {
        console.log(error);
      });
  };



  return (
    
    
    <div className="w-[50% justify-center">
      <Header />
      
      {!open && (
        <>
          <h1 className="text-center text-[28px] mt-2 font-Roboto w-[50%] ">
            All Messages
          </h1>
          {conversations &&
            conversations.map((item, index) => (
              <MessageList
                data={item}
                key={index}
                index={index}
                setOpen={setOpen}
                setCurrentChat={setCurrentChat}
                me={user?._id}
                setUserData={setUserData}
                userData={userData}
                online={onlineCheck(item)}
                setActiveStatus={setActiveStatus}
                loading={loading}
              />
            ))}
        </>
      )}
      {open && (
        <SellerInbox
          setOpen={setOpen}
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          sendMessageHandler={sendMessageHandler}
          messages={messages}
          sellerId={user._id}
          userData={userData}
          activeStatus={activeStatus}
         
        />
      )}
    </div>
  );
};
const MessageList = ({
    data,
    index,
    setOpen,
    setCurrentChat,
    me,
    userData,
    setUserData,
    online,
    setActiveStatus,
    loading
  }) => {
    const navigate = useNavigate();
    const [active, setActive] = useState(0);
  const [user, setUser] = useState([]);
    const handleClick = (id) => {
      navigate(`/inbox?${id}`);
      setOpen(true);
      // setCurrentChat(data);
    };

//   useEffect(() => {
//     setActiveStatus(online);
//     const userId = data.members.find((user) => user != me);

//     const getUser = async () => {
//       try {
//         const res = await axios.get(`${server}/user/user-info/${userId}`);
//         setUserData(res.data.user);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getUser();
//   }, [me, data]);



useEffect(() => {
    setActiveStatus(online);
    const userId = data.members.find((user) => user !== me);
    const getUser = async () => {
      try {
        const res = await axios.get(`${server}/librarie/get-librarie-info/${userId}`);
        setUser(res.data.librarie);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [me, data]); 

  return (
    <div
      className={`w-full flex p-3 ${
        active === index ? " bg-slate-400" : "bg-transparent"
      } cursor-pointer`}
      onClick={(e) =>
        setActive(index) || handleClick(data._id) || setCurrentChat(data) || setUserData(user) || setActiveStatus(online)
      }
    >
      <div className="relative">
        <img
        //  src={`${user?.avatar?.url}`}
        //  src={`${backend_url}${user.avatar}`}
        src={user?.avatar ? `${backend_url}${user.avatar}` : 'default-avatar.png'} 
        //  src={`${user?.avatar}`}
        // src={pic}
          alt=""
          className="w-[50px] h-[50px] rounded-full"
        />
        {online ? (
          <div className="w-[12px] h-[12px] bg-green-500 rounded-full absolute top-[2px] right-[2px]" />
        ) : (
          <div className="w-[12px] h-[12px] bg-[#8c848483] rounded-full absolute top-[2px] right-[2px]" />
        )}
      </div>
      <div className="pl-3">
        <h1 className="text-[18px]">{user?.name}</h1>
        <p className="text-[16px] text-[#000c]">
          {!loading && data?.lastMessageId !== userData?._id
            ? "You:"
            : userData?.name.split(" ")[0] + ": "}{" "}
          {data?.lastMessage}
        </p>
      </div>
    </div>
  );
};




const SellerInbox = ({
    setOpen,
    newMessage,
    setNewMessage,
    sendMessageHandler,
    messages,
    sellerId,
    userData,
    activeStatus,
  }) => {
    return (
     
    <div className="w-[110vh] mx-auto min-h-full flex flex-col justify-between p-5">
    {/* message header */}

    <div className="w-full flex p-3 items-center justify-between bg-[#544efe43] rounded-t-[12px]">
      <div className="flex">
        <img
                // src={`${backend_url}${user.avatar}`}
                src={`${backend_url}${userData?.avatar}`}
          //  src={pic}
            // {`${userData?.avatar?.url}`}
            // src={seller.avatar} 
          alt=""
          className="w-[60px] h-[60px] rounded-full"
        />
          <div className="pl-3">
            <h1 className="text-[18px] font-[600]">{userData?.name}</h1>
            <h1>{activeStatus ? "Active Now" : ""}</h1>
          </div>
        </div>
        <AiOutlineArrowRight
          size={20}
          className="cursor-pointer"
          onClick={() => setOpen(false)}
        />
      </div>
     
      <div className="px-3 h-[65vh] py-3 overflow-y-scroll border-[2px] border-[#6452f054]">
        {messages &&
          messages.map((item, index) => (
            <div
              className={`flex w-full my-2 ${
                item.sender === sellerId ? "justify-end" : "justify-start"
              }`}
            >
              {item.sender !== sellerId && (
                <img
                //FI WAst disscussion
                  // src={pic}
                  src={`${backend_url}${userData?.avatar}`}
            // src={`${backend_url}${user._id?.avater}`}
            //  src={`${userData?.avatar?.url}`}
            //  src={`${backend_url}${data?.librarie?.avatar}`}
                // src={sellerId?.avatar} 
                className="w-[40px] h-[40px] rounded-full mr-3"
                alt=""
              />
            )}
              {/* {item.images && (
                <img
                  src={`${item.images?.url}`}
                  className="w-[300px] h-[300px] object-cover rounded-full ml-2 mb-2"
                />
              )} */}
            {item.text !== "" && (
              <div>
                <div
                  className={`w-max p-2 rounded ${
                    item.sender === sellerId ? "bg-[#000]" : "bg-[#38c776]"
                  } text-[#fff] h-min`}
                >
                  <p>{item.text}</p>
                </div>

                <p className="text-[12px] text-[#000000d3] pt-1">
                {format(item.createdAt)} 
                </p>
              </div>
            )}
          </div>
        ))}
    </div>
            

      {/* send input */}
      <form
        aria-required={true}
        className="p-3 relative w-full flex justify-between "
        onSubmit={sendMessageHandler}
      >
        <div className="w-[3%]">
          <MdOutlinePhotoLibrary className="cursor-pointer" size={25} />
        </div>
        <div className="w-[97%] ">
          <input
            type="text"
            required
            placeholder="enter your text here..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className={`${styles.input} !bg-[#e7d1f243]`}
          />
          <input type="submit" value="Send" className="hidden " id="send" />
          <label htmlFor="send">
            <AiOutlineSend
              size={20}
              className="absolute right-4 top-5 cursor-pointer"
            />
          </label>
        </div>
      </form>

      </div>
  );
};

export default UserInbox;
