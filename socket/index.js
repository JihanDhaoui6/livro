// const socketIO = require("socket.io");
// const http = require("http");
// const express = require("express");
// const cors = require("cors");
// const app = express();
// const server = http.createServer(app);
// const io = socketIO(server);
// const dotenv = require("dotenv");


// dotenv.config({
//   path: "./.env",
// });

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res, next) => {
//   res.send("heloooooooooo");
// });
// //sender et receiver = users
// let users = [];
// const addUser = (userId, socketId) => {
//   !users.some((user) => user.userId === userId) &&
//     users.push({ userId, socketId });
// };
// //Msg def
// const createMessage = ({ senderId, rexeiverId, text, images }) => ({
//   senderId,
//   rexeiverId,
//   text,
//   images,
//   seen: false,
// });
// //connection one:new
// io.on("connection", (socket) => {
//   //wconnect
//   console.log(`a usr is cncted`);
//   //takeuser id & socketid
//   socket.on("addUser", (userId) => {
//     //addUser= user id + usersocket  emitlike dispatch=fct
//     addUser(userId, socket.id);
//     io.emit("getUsers", users);
//   });
//   const getUser = (receiverId) => {
//     return users.find((user) => user.userId === receiverId);
//   };
//   const removeUser = (socketId) => {
//     users = users.filter((user) => user.senderId !== socketId);
//   };

//   //send & get msg
//   const messages = {}; // object to track msg send to each ustr
//   socket.on("sendMessage", ({ senderId, receiverId, text, images }) => {
//     const message = createMessage({ senderId, receiverId, text, images });
//     const user = getUser(receiverId);
    
//     //store msgs in msg objt
//     if (!messages[receiverId]) {
//       messages[receiverId] = [message];
//     } else {
//       messages[receiverId].push(message);
//     }
//     // send msg to receiver
//     io.to(user?.socketId).emit("getMessage", message);
//   });
//   socket.on("messageSeen", ({ senderId, receiverId, messageId }) => {
//     const user = getUser(senderId);
//     // mise a jour seen fleg for msg

//     if (messages[senderId]) {
//       const message = messages[senderId].find(
//         (message) =>
//           message.receiverId === receiverId && message.id === messageId
//       );
//       if (message) {
//         message.seen = true;

//         // send msg seen to sender
//         io.to(user?.socketId).emit("messageSeen", {
//           senderId,
//           receiverId,
//           messageId,
//         });
//       }
//     }
//   });
//   socket.on("updateLastMessage", ({lastMessage,lastMessageId})=>{
//     io.emit("getLastMessage", {
//         lastMessage,
//         lastMessageId,
//     });
//   });

// //   deconnexion
// socket.on("disconnect", () =>{
//     console.log(`a user disconncted!`);
//     removeUser(socket.id);
//     io.emit("getUsers", users);
// })
// });
// // update get last msg 




// server.listen(process.env.PORT || 7001, () => {
//   console.log(`server is running on port ${process.env.PORT || 7001}`);
// });




const socketIO = require("socket.io");
const http = require("http");
const express = require("express");
const cors = require("cors");
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

require("dotenv").config({
  path: "./.env",
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world from socket server!");
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (receiverId) => {
  return users.find((user) => user.userId === receiverId);
};

// Define a message object with a seen property
const createMessage = ({ senderId, receiverId, text, images }) => ({
  senderId,
  receiverId,
  text,
  images,
  seen: false,
});

io.on("connection", (socket) => {
  // when connect
  console.log(`a user is connected`);

  // take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  // send and get message
  const messages = {}; // Object to track messages sent to each user

  socket.on("sendMessage", ({ senderId, receiverId, text, images }) => {
    const message = createMessage({ senderId, receiverId, text, images });

    const user = getUser(receiverId);

    // Store the messages in the `messages` object
    if (!messages[receiverId]) {
      messages[receiverId] = [message];
    } else {
      messages[receiverId].push(message);
    }

    // send the message to the recevier
    io.to(user?.socketId).emit("getMessage", message);
  });

  socket.on("messageSeen", ({ senderId, receiverId, messageId }) => {
    const user = getUser(senderId);

    // update the seen flag for the message
    if (messages[senderId]) {
      const message = messages[senderId].find(
        (message) =>
          message.receiverId === receiverId && message.id === messageId
      );
      if (message) {
        message.seen = true;

        // send a message seen event to the sender
        io.to(user?.socketId).emit("messageSeen", {
          senderId,
          receiverId,
          messageId,
        });
      }
    }
  });

  // update and get last message
  socket.on("updateLastMessage", ({ lastMessage, lastMessagesId }) => {
    io.emit("getLastMessage", {
      lastMessage,
      lastMessagesId,
    });
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log(`a user disconnected!`);
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});

server.listen(process.env.PORT || 7001, () => {
  console.log(`server is running on port ${process.env.PORT || 4000}`);
});