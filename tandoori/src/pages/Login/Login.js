import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar/Navbar";

const Login = () => {
  const [id, setId] = useState(" ");
  const [password, setpassword] = useState(" ");

  const RunThis = () => {
    console.log(id, password);

    axios
      .post("http://localhost:4000/login", { id, password })
      .then((response) => {
        if (response.status === 200 && response.data.isAuthenticated === true) {
          window.alert("Login Successful");
          console.log("Login Successful");
        } else if (response.status === 400) {
          window.alert("Invalid Login");
          alert("wrong password");
        }

      })
      .catch((error) => console.log("error is ", error));
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col flex-wrap ">
        <h1 className="flex justify-items-center">LOGIN HERE </h1>
        <div>
          <h1>Enter your id</h1>
          <input
            type="text"
            name="admin_id"
            onChange={(e) => setId(e.target.value)}
            className="border-2 border-black "
            placeholder="enter your id"
          />
        </div>
        <div>
          <h1>Enter your password</h1>
          <input
            type="password"
            name="password"
            onChange={(e) => setpassword(e.target.value)}
            className="border-2 border-black "
            placeholder="enter your password"
          />
        </div>
        <button
          type="button"
          onClick={RunThis}
          className="border-2 border-black"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
