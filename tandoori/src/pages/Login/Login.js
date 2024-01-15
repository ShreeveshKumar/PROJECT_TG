import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [id, setId] = useState(" ");
  const [password, setpassword] = useState(" ");
  const navigate = useNavigate();

  const RunThis = async () => {
    console.log(id, password);

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        credentials: "include",
        body: JSON.stringify({ id, password }),
      });

      const data = await response.json();
      if (data.isAuthenticated) {
        navigate("/Admin");
      }
    } catch (err) {
      console.log(err);
    }
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
