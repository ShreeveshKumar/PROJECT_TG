import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import { apetite, best_review, vary_reviews } from "../../data";
import Footer from "../../Components/Footer/Footer";
import Foods from "../../Components/Dish_card/Dishes_card/Foods";
import Rate_cards from "../../Components/Dish_card/Rate_card/Rate_cards";
// import Websocket from 'twrnc'

const socket = new WebSocket("ws://localhost:3000");

socket.onopen = function open(){
  socket.send('this is test')
}


const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Body />
      <Menu />
      <Bdish />
      <NewRate />
      <Footer />
    </React.Fragment>
  );
};



function Body() {
  return (
    <div className="flex flex-wrap justify-evenly bg-poster_color ">
      <h1 className="flex items-center place-content-center text-3xl shadow-black px-11  ">
        
        THE BEST FOOD OF TOWN{" "}
      </h1>
      <div className=" bg-cover header_backimg"></div>
    </div>
  );
}

function Menu() {
  return (
    <div className="  border-2 p-20 border-slate-900 menu_element1">
      <h1 className="flex items-center justify-center text-4xl font-comfortaa menu_title">MENU</h1>
      <section className="flex place-content-evenly flex-wrap food_court">
        {apetite.map((fooog) => {
          return (
            <Foods
              name={fooog.name}
              description={fooog.description}
              source={fooog.source}
            />
          );
        })}
      </section>
    </div>
  );
}

function NewRate() {
  return (
    <div className="border-2 border-slate-950 p-10 rate_card_centre">
      <h1 className="flex text-5xl font-comfortaa items-center justify-center">
        Ratings
      </h1>
      <div className="flex flex-col font-comfortaa font-bold">
        {vary_reviews.map((readme) => {
          return <Rate_cards ratings={readme.view} />;
        })}
      </div>
    </div>
  );
}

function Vdish({ review, source2 }) {
  return (
    <div>
      <div className="text-2xl flex flex-wrap m-5 items-center place-content-evenly">
        <span className="w-1/2 ">{review}</span>
        <span>
          <img
            src={source2}
            alt="image_not_found"
            className=" border-2 border-slate-900 p-2 "
            height={300}
            width={300}
          />
        </span>
      </div>
    </div>
  );
}

function Bdish() {
  return (
    <div className="flex flex-col items-center p-10 ">
      <h1 className="text-5xl font-comfortaa ">Best FOODS</h1>
      <div>
        {best_review.map((frog) => {
          return <Vdish review={frog.review} source2={frog.source2} />;
        })}
      </div>
    </div>
  );
}

export default Home;
