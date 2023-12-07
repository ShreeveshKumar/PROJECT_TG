const express = require("express");
const mongoose = require("mongoose");
const DB = "desk";
const cors = require("cors");
const link =
  "mongodb+srv://wait:YUR1969testme@cluster0.pijxceg.mongodb.net/?retryWrites=true&w=majority";
const websocket = require("ws");



const PORT = 4000;

const app = express();
app.use(express.json());
app.use(cors({

}));

mongoose
  .connect(link)
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log("not connected", err));

// const object1 = new mongoose.Schema({
//   rc_num: Number,
//   bc_num: Number,
// });

const object2 = new mongoose.Schema({
  email: String,
  message: String,
});

const Product = mongoose.model("Data", object2);

app.post("/", async (req, res) => {
  let data = await Product.create(req.body);
  await data.save();
  return data;
});



app.listen(PORT);
