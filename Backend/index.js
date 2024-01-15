const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const DB = "desk";
const cors = require("cors");
// require("dotenv").config();
const link =
  "mongodb+srv://wait:YUR1969testme@cluster0.pijxceg.mongodb.net/?retryWrites=true&w=majority";
const PORT = 4000;
// const Admin = require('Admin');
// import Admin from "./User";

const id = "tandoori_gali";
const password = "TG_A@ACRY_7070";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());

//this is for contact page and this will only take contacts

mongoose
  .connect(link)
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log("not connected", err));

const object2 = new mongoose.Schema({
  email: String,
  message: String,
});

const Product = mongoose.model("Data", object2);

app.listen(PORT);
