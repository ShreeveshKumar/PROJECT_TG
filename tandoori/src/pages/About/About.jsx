import React from "react";
import "./About.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import DoneIcon from "@mui/icons-material/Done";

const About = () => {
  return (
    <div>
      <Navbar />
      <Quote />
      <Footer />
    </div>
  );
};

const Quote = () => {
  return (
    <div className="flex flex-col italic my-10 text-green-900 text-5xl items-center justify-center">
      <div className="text-black not-italic my-5">
        <h1> Closes 11 pm  <DoneIcon /></h1>
        <h1>Dine-in  <DoneIcon /></h1>
        <h1>Delivery  <DoneIcon /></h1>
        <h1>Takeway <DoneIcon /></h1>
      </div>

      <h1 className="items-center justify-center">
        "स्वाद जो दिल को छू जाए, वो खाना है।"
      </h1>
      <h1>"Food that touches the heart is what we serve."</h1>
    </div>
  );
};

export default About;
