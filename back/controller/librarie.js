


const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");
const sendMail = require("../utils/sendMail");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
//const sendToken = require("../utils/jwtToken");
const jwt = require("jsonwebtoken");
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const {  isSeller } = require("../middleware/auth");
const Librarie = require("../model/librarie");
const sendLibraryToken = require("../utils/LibrarieToken");


router.post(
  "/librarie-create",
  upload.single("file"),
  async (req, res, next) => {
    try {
      const { email } = req.body;
      const sellerEmail = await Librarie.findOne({ email });

      if (sellerEmail) {
        const filename = req.file.filename;
        const filePath = `uploads/${filename}`;
        fs.unlink(filePath, (err) => {
          if (err) {
            console.log(err);
            res.status(500).json({ message: "Error deleting file " });
          }
        });
        return next(new ErrorHandler("User already exists", 400));
      }

      const filename = req.file.filename;
      const fileUrl = path.join(filename);

      const seller = {
        name: req.body.name,
        email: email,
        password: req.body.password,
        avatar: fileUrl,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        zipCode: req.body.zipCode,
      };

      const activationToken = createActivationToken(seller);
      const activationUrl = `http://localhost:3000/seller/activation/${activationToken}`;

      try {
        await sendMail({
          email: seller.email,
          subject: "Activate your library account :  ",
          message: `Hello ${seller.name}, please click on the link to activate your library account: ${activationUrl}`,
        });
        res.status(201).json({
          success: true,
          message: `Please check your email: ${seller.email} to activate your library account!`,
        });
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    } catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

const createActivationToken = (seller) => {
  return jwt.sign(seller, process.env.ACTIVATION_SECRET, {
    expiresIn: "5m",
  });
};

router.post(
  "/activation",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { activation_token } = req.body;

      const newSeller = jwt.verify(
        activation_token,
        process.env.ACTIVATION_SECRET
      );

      if (!newSeller) {
        return next(new ErrorHandler("Invalid token", 400));
      }
      const { name, email, password, avatar, zipCode, phoneNumber, address } =
        newSeller;

      let seller = await Librarie.findOne({ email });
//ken seller
      if (seller) {
        return next(new ErrorHandler("User already exists", 400));
      }
      // console.log(name,
      //   email,
      //   avatar,
      //   password,
      //   zipCode,
      //   phoneNumber,
      //   address,)
      seller = await Librarie.create({
        name,
        email,
        avatar,
        password,
        zipCode,
        phoneNumber,
        address,
      });

      sendLibraryToken(seller, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);


//LOGIN TO YOUR ACCOUNT

router.post(
  "/login-librarie",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return next(new ErrorHandler("Please provide the all fields!", 400));
      }

      const user = await Librarie.findOne({ email }).select("+password");

      if (!user) {
        return next(new ErrorHandler("User doesn't exists!", 400));
      }

      const isPasswordValid = await user.comparePassword(password);

      if (!isPasswordValid) {
        return next(
          new ErrorHandler("Please provide the correct information", 400)
        );
      }

      sendLibraryToken(user, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

//load library account 
router.get(
  "/getSeller",
  isSeller,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const seller = await Librarie.findById(req.seller._id);

      if (!seller) {
        return next(new ErrorHandler(error.message, 500));
      }

      res.status(200).json({
        success: true,
        seller,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// logout
router.get(
  "/logout",
  catchAsyncErrors(async (req, res, next) => {
    try {
      res.cookie("seller_token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });
      res.status(201).json({
        success: true,
        message: "Log out successful!",
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);
//lobrau info
router.get(
  "/get-librarie-info/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const librarie = await Librarie.findById(req.params.id);
      res.status(201).json({
        success: true,
        librarie,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);
module.exports = router;
