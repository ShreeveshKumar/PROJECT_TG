const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());


const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;

const link = process.env.contact_link;

mongoose.connect(link).then(() => {
  console.log("connection successful");
}).catch((err) => console.log("not connected", err));   




