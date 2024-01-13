const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const Admin = require("../UserSchema");

// HandleUser.methods.generateAuthToken = async function () {
//   try {
//     let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
//     this.tokens = this.tokens.concat({ token: token });
//     await this.save();
//     return token;
//   } catch (err) {
//     console.log(err);
//   }
// };

// const Admin = mongoose.model("Check", HandleUser);

const object2 = new mongoose.Schema({
  email: String,
  message: String,
});

const Product = mongoose.model("Data", object2);

cors({
  origin: "*",
});

router.post("/login", async (req, res) => {
  console.log("this is the login page");
  // const { id, password } = req.body;
  // if (!id || !password) {
  //   res.status(400).json({ Notfilled: true });
  // }

  // let user = await Admin.findOne({ id });

  // const token = await user.generateAuthToken();

  // if (user) {
  //   console.log("User found");

  //   let pass = await Admin.findOne({ password });

  //   if (pass) {
  //     console.log("You are in ");

  //     let entry = await Admin.findOne({ token });

  //     if (token) {
  //       console.log("come in man");

  //       res.cookie("jwt", token);

  //       return res.redirect("https://www.google.com/");
  //     } else {
  //       console.log("no token is incorrect ");
  //     }
  //   } else {
  //     console.log("Inavlid Credentials");
  //   }
  // } else {
  //   console.log("Inavlid Credentials");
  // }
});

router.post("/Contact", async (req, res) => {
  console.log(req.body);
  let data = await Product.create(req.body);
  await data.save();
  return data;
});

router.get("/", (req, res) => {
  res.send("this is the admin page");
});

module.exports = router;
