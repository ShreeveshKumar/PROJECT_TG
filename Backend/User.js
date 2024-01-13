const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
const Router = require("./router/Router");
const jwt = require('jsonwebtoken');
const Authenticate = require("./router/authenticate");

app.use(
  cors({
    origin: "*",
  })
);

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;
require("./DB/connection");

app.get("/", Router);

app.post("/login",Authenticate, Router); // for the authentication of admin

app.post("/Contact", Router); // for the contact page and sending the mail and message to the database

app.listen(PORT);
