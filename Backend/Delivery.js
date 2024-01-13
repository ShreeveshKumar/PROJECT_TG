const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;
require("./DB/connection");

// order_no, payment_option, food_order, address, mobile_no
const Order = new mongoose.Schema({
  order_no: String,
  payment_option: String,
  food_order: String,
  address: String,
  mobile_no: String,
});

const OrderModel = mongoose.model("Order", Order);

 app.get("/food-order", async (req, res) => {
   try {
     const orders = await OrderModel.find();
     console.log(orders);
     res.json(orders); // Sending the orders as a JSON response
   } catch (error) {
     console.error("Error fetching orders:", error);
     res.status(500).send("Internal Server Error");
   }
 });


app.listen(PORT, () => {
  console.log("app running on PORT", PORT);
});
