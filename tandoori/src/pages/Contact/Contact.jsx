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
        // if(response.status == 200){
        //   alert('success');
        // }
      })
      .catch((err) => {
        console.log(err);
      });

    // alert('message sent successfully ')
    alert("message sent successfully");
    console.log("message sent successfully");
  };

  return (
    <div className="flex flex-col items-center text-3xl font-bold gap-y-5 font-comfortaa">
      <h1 className="text-6xl"> Contact us ... </h1>

      <h1>Abhishek Chaudhary</h1>

      <h1> 7060139557</h1>

      <h1>Rahul Yadav</h1>

      <h1>7017224627</h1>

      <h1> enter your email </h1>
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

      <h1>write your message</h1>

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
