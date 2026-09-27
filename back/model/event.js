// const mongoose = require("mongoose");

// const eventSchema = new mongoose.Schema({
//     name:{
//         type: String,
//         required:[true,"Please enter your event product name!"],
//     },
//     description:{
//         type: String,
//         required:[true,"Please enter your event product description!"],
//     },
//     category:{
//         type: String,
//         required:[true,"Please enter your event product category!"],
//     },
//     start_Date: {
//         type: Date,
//         required: true,
//       },
//       Finish_Date: {
//         type: Date,
//         required: true,
//       },
//       status: {
//         type: String,
//         default: "Running",
//       },
//     author:{
//         type: String,
//     },
//     originalPrice:{
//         type: Number,
//     },
//     discountPrice:{
//         type: Number,
//         required: [true,"Please enter your event product price!"],
//     },
//     stock: {
//         type: Number,
//         required: [true, "Please enter your book stock"],
//       },
//       pageNumber: {
//         type: Number,
//         required: [true, "Please enter your book page number"],
//       },
//     images: [
//         {
//           type: String,
//         },
//       ],
//       librarieId: {
//         type: String,
//         required: true,
//       },
//       librarie: {
//         type: Object,
//         required: true,
//       },
//       sold_out: {
//         type: Number,
//         default: 0,
//       },
//       createdAt: {
//         type: Date,
//         default: Date.now(),
//       },
// });

// module.exports = mongoose.model("Event", eventSchema);



// Backend - Event.js

const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your event product name!"],
  },
  description: {
    type: String,
    required: [true, "Please enter your event product description!"],
  },
  category: {
    type: String,
    required: [true, "Please enter your event product category!"],
  },
  start_Date: {
    type: Date,
    required: true,
  },
  Finish_Date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    default: "Running",
  },
  author: {
    type: String,
  },
  originalPrice: {
    type: Number,
  },
  discountPrice: {
    type: Number,
    required: [true, "Please enter your event product price!"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter your book stock"],
  },
  pageNumber: {
    type: Number,
    required: [true, "Please enter your book page number"],
  },
  images: [
    {
      type: String,
    },
  ],
  librarieId: {
    type: String,
    required: true,
  },
  librarie: {
    type: Object,
    required: true,
  },
  sold_out: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Event", eventSchema);




