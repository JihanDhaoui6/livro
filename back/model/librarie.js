const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const librarySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your library name!"],
  },
  email: {
    type: String,
    required: [true, "Please enter your library email!"],
  },
  
  // password: {
  //   type: String,
  //   required: [true, "Please enter your password"],
  //   minLength: [6, "Password should be greater than 4 characters"],
  //   select: false,
  //   validate: {
  //     validator: function(v) {
  //       return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(v);
  //     },
  //     message: props => `Password must contain at least one uppercase letter, one number, and one special character.`,
  //   },
  // },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [6, "Password should be greater than 4 characters"],
    select: false,
  },
  description: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    default: "Seller",
  },
  // avatar: {
  //   public_id: {
  //     type: String,
  //     //required: true,
  //   },
  //   url: {
  //     type: String,
  //     //required: true,
  //   },
  // },
  avatar: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  resetPasswordToken: String,
  resetPasswordTime: Date,
});
// Hash password
librarySchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// jwt token
librarySchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

// comapre password
librarySchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("Library", librarySchema);
