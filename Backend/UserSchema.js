const mongoose = require("mongoose");




const HandleUser = mongoose.Schema({
  id: String,
  password: String,
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

const Admin = mongoose.model("Check", HandleUser);

module.exports = Admin;
