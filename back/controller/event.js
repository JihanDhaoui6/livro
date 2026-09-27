const express = require("express");
const router = express.Router();
const Event = require("../model/event");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Librarie = require("../model/librarie");
const { isSeller} = require("../middleware/auth");
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const fs = require("fs");
// createBOOK
router.post(
  "/create-event",
  upload.array("images"),
  catchAsyncErrors(async (req, res, next) => {
    try {
      const librarieId = req.body.librarieId;
      //const librarieId = req.body.librarieId ? req.body.librarieId : null;

      const librarie = await Librarie.findById(librarieId);
      if (!librarie) {
        return next(new ErrorHandler("Library ID is invalid!", 400));
      } else {
        const files = req.files;
        const imageUrls = files.map((file) => `${file.filename}`);
        const eventData = req.body;
        eventData.images = imageUrls;
        eventData.librarie = librarie;
        // const book = await Book.create(bookData);
        // Ensure that Book model is imported correctly
        const event = new Event(eventData);
        await event.save();
        res.status(201).json({
          success: true,
          event,
        });
      }
    } catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
  })
);
// get all events
router.get("/get-all-events", async (req, res, next) => {
  try {
    const events = await Event.find();
    res.status(201).json({
      success: true,
      events,
    });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
});

// get all events of a libry
router.get(
  "/get-all-events/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const events = await Event.find({ librarieId: req.params.id });

      res.status(201).json({
        success: true,
        events,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);


router.get(
  "/get-all-events/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const events = await Event.find({ librarieId: req.params.id });

      res.status(201).json({
        success: true,
        events,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

router.delete(
  "/delete-librarie-event/:id",
  isSeller,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const bookId = req.params.id;

      const eventData = await Event.findById(bookId);

      // if (!eventData) {
      //   return next(new ErrorHandler("event not fount with this id!", 500));
      // }

      eventData.images.forEach((imageUrl) => {
        const filename = imageUrl;
        const filePath = `uploads/${filename}`;

        fs.unlink(filePath, (err) => {
          if (err) {
            console.log(err);
          }
        });
      });

      const event = await Event.findByIdAndDelete(bookId);
      if (!event) {
        return next(new ErrorHandler("event not fount with this id!", 500));
      }
      // `uploads/${filename}`
      //const filePath = event.images;
      //console.log(filePath);
      // fs.unlink(filePath, (err) => {
      //   if (err) {
      //     console.log(err);
      //     res.status(500).json({ message: "Error deleting file " });
      //   }
      // });
      res.status(201).json({
        success: true,
        message: "event deleted successfuly!!",
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
  })
);
module.exports = router;
