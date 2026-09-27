const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express(); 
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
 const userRouter = require("./controller/user");

//const librarieRouter = require("./controller/librarie"); // Correction : renommez l'importation

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:"http://localhost:3000", 
  credentials:true,
}));
app.use("/",express.static("uploads"));
app.use(bodyParser.urlencoded({extended: true}));

app.use("/user", userRouter);
//app.use("/librarie", librarieRouter); 

//config
if(process.env.NODE_ENV !== "PRODUCTION"){
  require("dotenv").config({
    path:"back/config/.env"
  })
}

//Import router 
const user = require("./controller/user");
const librarie = require("./controller/librarie")
const book = require("./controller/book");
const event = require("./controller/event");
const coupounCode = require("./controller/coupounCode");
const order = require("./controller/order");
const conversation = require("./controller/conversation");
const message= require("./controller/message");

app.use("/api/v2/user", user);
app.use("/api/v2/librarie", librarie);
app.use("/api/v2/book", book);
app.use("/api/v2/event", event);
app.use("/api/v2/coupounCode", coupounCode);
app.use("/api/v2/order", order);
app.use("/api/v2/conversation", conversation);
app.use("/api/v2/message", message);


// it's for error handler 
app.use(ErrorHandler);
module.exports = app;

