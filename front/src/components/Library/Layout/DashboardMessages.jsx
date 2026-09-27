import React, { useEffect, useState } from "react";
import pic from "../../../assets/homepage/Books (2).jpg";
import { backend_url, server } from "../../../server";
import { useSelector } from "react-redux";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineSend } from "react-icons/ai";
import styles from "../../../styles/style";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import socketIO from "socket.io-client";
 import { format } from "timeago.js";
// import * as timeago from 'timeago.js';
const ENDPOINT = "http://localhost:7001/";
const socketId = socketIO(ENDPOINT, { transports: ["websocket"] });

const DashboardMessages = () => {
  const { seller,loading } = useSelector((state) => state.seller);

  const [conversations, setConversations] = useState([]);
  const [open, setOpen] = useState(false);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [messages, setMessages] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [userData, setUserData] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [activeStatus , setActiveStatus] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    socketId.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: data.now(),
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
          `${server}/conversation/get-all-conversation-seller/${seller?._id}`,
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
  }, [seller, messages]);
  // useEffect(() => {
   
  //   axios
  //     .get(`${server}/conversation/get-all-conversation-seller/${seller._id}`, {
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       setConversations(res.data.conversations);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
      
  // }, [seller]);

  useEffect(()=>{
    if(seller){
      const userId = seller?._id;
      socketId.emit("addUser", userId);
      socketId.on("getUsers",(data) =>{
        setOnlineUsers(data);
      })
    }
  },[seller]);

  const onlineCheck = (chat) => {
    const chatMembers = chat.members.find((member) => member !== seller?._id);
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
      sender: seller._id,
      text: newMessage,
      conversationId: currentChat._id,
    };
    const receiverId = currentChat.members.find(
      (member) => member.id !== seller._id
    );
    socketId.emit("sendMessage", {
      senderId: seller._id,
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
      lastMessageId: seller._id,
    });

    await axios
      .put(`${server}/conversation/update-last-message/${currentChat._id}`, {
        lastMessage: newMessage,
        lastMessageId: seller._id,
      })
      .then((res) => {
        console.log(res.data.conversation);
        setNewMessage("");
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="w-[90%] bg-[#fffefe] m-3 h-[85vh] overflow-y-scroll  rounded-[10px]">
      {/* ALL MSG LIST */}
      {!open && (
        <>
          <h1 className="text-center text-[28px] mt-2 font-Roboto">
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
                me={seller._id}
                setUserData={setUserData}
                userData={userData}
                online={onlineCheck(item)}
                setActiveStatus={setActiveStatus}
                isLoading={loading}
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
          sellerId={seller._id}
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
  const [user, setUser] = useState([]);
  const Navigate = useNavigate();
  const handleClick = (id) => {
    Navigate(`?${id}`);
    setOpen(true);
  };
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActiveStatus(online);
    const userId = data.members.find((user) => user != me);

    const getUser = async () => {
      try {
        const res = await axios.get(`${server}/user/user-info/${userId}`);
        setUser(res.data.user);
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
        setActive(index) || handleClick(data._id) || setCurrentChat(data)|| setUserData(user) || setActiveStatus(online)
      }
    >
      <div className="relative">
        <img
          src={`${backend_url}${user?.avatar}`}
          
          alt=""
          className="w-[50px] h-[50px] rounded-full"
        />
   {
    online ? (
      <div className="w-[12px] h-[12px] bg-green-500 rounded-full absolute top-[2px] right-[2px]" />

    ):(
      <div className="w-[12px] h-[12px] bg-[#8c848483] rounded-full absolute top-[2px] right-[2px]" />
    
    )
   }
     </div>
      <div className="pl-3">
        <h1 className=" text-[18px] ">{user?.name}</h1>
        <p className="text-[16px] text-[#000]">
          {!loading && data?.lastMessageId !== user?._id
            ? "You: "
            : user?.name.split(" ")[0] + ": "}{" "}
            {/* // : userData?.name.split(" ")[0] + ": "}{" "} */}
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
  activeStatus
}) => {
  return (
    <div className="w-full min-h-full flex flex-col justify-between  mt-9">
      {/* msg header */}
      <div className="w-full flex p-3 items-center justify-between bg-[#e1c6f6b5]">
        <div className="flex">
          <img src={`${backend_url}${userData?.avatar}`} alt="" className="w-[60px] h-[60px] rounded-full" />
          <div className="pl-3">
            <h1 className="text-[18px] font-[600]">{userData?.name}</h1>
            <h1>{activeStatus ? "Active Now": ""}</h1>
          </div>
        </div>
        <AiOutlineArrowRight
          size={25}
          onClick={() => setOpen(false)}
          className="cursor-pointer "
        />
      </div>
      {/* MESSAGES */}
      <div className="px-3 h-[65vh] py-3 overflow-y-scroll">
        {messages &&
          messages.map((item, index) => (
            <div
              className={`flex w-full my-2 ${
                item.sender === sellerId ? "justify-end" : "justify-start"
              }`}
            >
              {item.sender !== sellerId && (
                <img
                src={`${backend_url}${userData?.avatar}`}
                  alt=""
                  className="w-[35px] h-[35px] rounded-full mr-3"
                />
              )}

              <div>
                <div className="w-max p-2 rounded bg-[#68f5ba] text-white h-min ">
                  <p> {item.text}</p>
                </div>

                <p className="text-[12px] text-[#00000096] pt-1">
                 {format(item.createdAt)} 
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* send input */}
      <form
        aria-required={true}
        className="p-3 relative w-full flex justify-between"
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
export default DashboardMessages;
