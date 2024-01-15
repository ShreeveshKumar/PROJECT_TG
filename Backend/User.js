const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
const Router = require("./router/Router");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;
require("./DB/connection");

app.use(cookieParser());

app.get("/", Router);

app.post("/register", Router); // for the registration of admin

app.post("/login", Router); // for the authentication of admin

app.post("/Contact", Router); // for the contact page and sending the mail and message to the database

app.get("/Admin", Router); // for the admin page and sending the data to the database

app.listen(PORT);
