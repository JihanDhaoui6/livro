const express = require("express");
const router = express.Router();
const Book = require("../model/book");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Librarie = require("../model/librarie");
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const { isSeller } = require("../middleware/auth");
const book = require("../model/book");
const axios = require('axios');

// createBOOK
router.post(
  "/create-post",
  upload.array("images"),
  catchAsyncErrors(async (req, res, next) => {
    try {
      const librarieId = req.body.librarieId;
      const librarie = await Librarie.findById(librarieId);
      if (!librarie) {
        return next(new ErrorHandler("Library ID is invalid!", 400));
      } else {
        const files = req.files;
        const imageUrls = files.map((file) => `${file.filename}`);
        const bookData = req.body;
        bookData.images = imageUrls;
        bookData.librarie = librarie;
        const book = await Book.create(bookData);
        // Ensure that Book model is imported correctly
        // const book = new Book(bookData);
        // await book.save();
        res.status(201).json({
          success: true,
          book,
        });
      }
    } catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
  })
);
//get all books of library
router.get(
  "/get-all-books-librarie/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const books = await Book.find({ librarieId: req.params.id });
      res.status(200).json({
        success: true,
        books,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
  })
);
//supprimet  book


router.delete(
  "/delete-librarie-book/:id",
  isSeller,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const bookId = req.params.id;

      const bookData = await Book.findById(bookId);
      if (!bookData) {
        return next(new ErrorHandler("Book not found with this id!", 404));
      }

      bookData.images.forEach((imageUrl) => {
        const filename = imageUrl;
        const filePath = `uploads/${filename}`;

        fs.unlink(filePath, (err) => {
          if (err) {
            console.log(err);
          }
        });
      });

      await Book.findByIdAndDelete(bookId);

      res.status(201).json({
        success: true,
        message: "Book deleted successfully!",
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
  })
);

// get all products
router.get(
  "/get-all-books",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const books = await book.find().sort({ createdAt: -1 });

      res.status(201).json({
        success: true,
        books,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);






module.exports = router;
