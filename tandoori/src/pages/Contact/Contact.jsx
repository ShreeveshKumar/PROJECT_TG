import React, { useState } from "react";
import "./Contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactAddress />
      <Footer />
    </div>
  );
};

const linking = "http://localhost:4000";

const ContactAddress = () => {
  const [email, setemail] = useState(" ");
  const [message, setmessage] = useState("");

  const handledata = () => {
    const data = {
      email: email,
      message: message,
    };

    document.querySelector('#input_email').value = " ";
    document.querySelector("#input_message").value = " ";



    fetch(linking, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      });
    alert("message sent successfully");
    console.log("message sent successfully");
  };

  return (
    <div className="flex flex-col items-center text-xl font-bold gap-y-5 font-comfortaa md:text-lg sm:text-sm ">
      <h4 className="text-xl"> Contact us ... </h4>

      <h3>Abhishek Chaudhary</h3>

      <h3> 7060139557</h3>

      <h3>Rahul Yadav</h3>

      <h3>7017224627</h3>

      <h3> enter your email </h3>
      <input
        type="email"
        name="email"
        id="input_email"
        required
        onChange={(e) => {
          setemail(e.target.value);
        }}
        className="border-2 border-blue-800"
      />

      <h3>write your message</h3>

      <input
        type="text"
        name="message"
        id="input_message"
        required
        onChange={(e) => {
          setmessage(e.target.value);
        }}
        className="border-2 border-blue-800"
      />
      <button
        type="button"
        onClick={() => {
          handledata();
        }}
        className=" bg-black text-white text-1xl py-3 px-3 rounded-full"
      >
        Submit
      </button>
    </div>
  );
};

export default Contact;
