const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your book name"],
  },
  description: {
    type: String,
    required: [true, "Please enter your book description"],
  },
  category: {
    type: String,
    required: [true, "Please enter your book category!"],
  },
  author: {
    type: String,
    required: [true, "Please enter your book author"],
  },
  originalPrice: {
    type: Number,
  },
  post: {
    type: String,
    required: [true, "Please enter your book  type"],
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

module.exports = mongoose.model("Book", bookSchema);