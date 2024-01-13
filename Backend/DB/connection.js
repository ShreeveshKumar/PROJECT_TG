const mongoose = require("mongoose");
const express = require("express");

// const linking = process.env.AUTH_LINK;  //this is the link of the auth database

const linking = process.env.FOOD_ORDER; //this is the link of the food order database

mongoose
  .connect(linking, {
  })
  .then(() => {
    console.log("connection successful");
  })
    .catch((err) => console.log("no connection", err));
  

