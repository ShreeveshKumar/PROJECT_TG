const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const HandleUser = mongoose.Schema({
  id: String,
  password: String,
  tokens: String,
});

const Admin = mongoose.model("Check", HandleUser);

const object2 = new mongoose.Schema({
  email: String,
  message: String,
});

const Product = mongoose.model("Data", object2);

const giveorder = mongoose.Schema({
  order_no: Number,
  address: String,
  food_order: String,
  mobile_no: String,
  payment_option: String,

})

const UserOrder = mongoose.model("orders", giveorder);

cors({
  origin: "*",
});

router.use(cookieParser());

router.post("/login", async (req, res) => {
  try {
    const password = req.body.password;
    const id = req.body.id;

    if (!id || !password) {
      res.status(400).json({ Notfilled: true });
      return; // added return to exit the function if fields are not filled
    }

    const User = await Admin.findOne({ id });

    if (User) {
      console.log("User found");

      const pass = await Admin.findOne({ password });

      if (pass) {
        console.log("Password matched");

        let token = jwt.sign({ _id: User._id }, process.env.SECRET_KEY);

        await Admin.updateOne({ id: id }, { $set: { tokens: token } });

        res.cookie("token", token, {
          httpOnly: true,
          // secure: false,
          expires: new Date(Date.now() + 99 * 99 * 99 * 60000),
        });

        res.status(200).json({ isAuthenticated: true });
      } else {
        console.log("Password not matched");
        res.status(400).json({ Authenticated: false });
      }
    } else {
      res.status(400).json({ Authenticate: false });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/register", async (req, res) => {
  console.log("this is the register page");
  const { id, password } = req.body;

  if (!id || !password) {
    res.status(400).json({ Notfilled: true });
  }

  let user = await Admin.findOne({ id });

  if (user) {
    console.log("User already exists");
    res.status(400).json({ AlreadyExists: true });
  } else {
    const user = new Admin({ id, password });
    await user.save();
    res.status(200).json({ Registered: true });
  }
});

router.get("/Admin", async (req, res) => {
  const token = req.cookies.token;
  console.log(token);

  try {
    if (token) {
      const verify = jwt.verify(token, process.env.SECRET_KEY);
      console.log(verify);
      if (verify) {
        console.log("this is the admin page");
        res.status(200).json({ isToken: true });
      } else {
        res.status(400).json({ isToken: false });
      }
    } else {
      res.status(400).json({ isToken: false });
      console.log("no token found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Internal Server Error",
      isToken: false,
    });
  }
});

router.post("/Contact", async (req, res) => {
  console.log(req.body);
  let data = await Product.create(req.body);
  await data.save();
  return data;
});

router.get("/giveorders", async (req, res) => {
  try {
    
  let data = await UserOrder.find();
    res.status(200).json(data);

    if (!data) {
      console.log(console.log('no users found'));
      res.status(404).json({ message:'no users found'});
    }

  } catch (err) {
    console.log(err)
  };
    

})

router.get("/", (req, res) => {
  res.send("this is the admin page");
});

module.exports = router;
