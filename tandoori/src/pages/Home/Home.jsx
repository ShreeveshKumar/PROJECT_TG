import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import { apetite_nonveg, best_review, vary_reviews } from "../../data";
import Footer from "../../Components/Footer/Footer";
import Foods from "../../Components/Dish_card/Dishes_card/Foods";
import Rate_cards from "../../Components/Dish_card/Rate_card/Rate_cards";
import { Link } from "react-router-dom";
import { apetite_veg } from "../../data";
import BestFood from "../../Components/Dish_card/BestFood/BestFood";

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
    <div>
      <div className="flex p-8 mt-10 bg-yellow-500 k text-white align-middle justify-center place-content-center">
        <h3 className="px-2 py-2 text-black ">
          LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN
        </h3>
        <Link to="/Order">
          <button
            type="button"
            className="mx-3 bg-red-900 px-2 py-2 rounded-xl "
          >
           
            Let's Start
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap justify-center items-center h-screen gap-10">
  <div className="flex flex-col items-center font-bold font-comfortaa text-xl text-center">
    <h1 className="text-2xl w-26 ">The best food of Town is here</h1>
  </div>
  <div className="w-96">
    <img
      src="https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg"
      alt="images_here"
    />
  </div>
</div>

    </div>
  );
}

function Menu() {
  return (
    <div className=" border-0 mt-12 p-10 border-slate-900 menu_element1 md:p-0 mb-5 ">
      <h1 className="flex items-center justify-center text-4xl font-Textpos1">
        MENU
      </h1>
      <div className="flex justify-between  ">

      <h1 className="m-5 font-dancingScript text-4xl  ">Veg</h1>
      <img src="https://w7.pngwing.com/pngs/274/7/png-transparent-green-leaf-leaf-logo-brand-plant-stem-folha-grass-green-line-thumbnail.png" alt="veg " className="w-12 h-10 m-5  "/>
      </div>
      <section className="flex flex-wrap justify-evenly overflow-hidden">
        {apetite_veg.map((fooog) => {
          return (
            <Foods
              key={fooog.index}
              name={fooog.name}
              description={fooog.description}
              source={fooog.source}
            />
          );
        })}
        </section>
        <div className="flex justify-between  ">

<h1 className="m-5 font-dancingScript text-4xl  ">Non-Veg</h1>
<img src="https://static.vecteezy.com/system/resources/previews/030/806/288/non_2x/chicken-curry-icon-design-vector.jpg" alt="veg " className="w-12 h-10 m-5  "/>
</div>
      <section className="flex flex-wrap justify-evenly overflow-hidden">
        {apetite_nonveg.map((fooog) => {
          return (
            <Foods
              key={fooog.index}
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
    <div className="border-0 border-slate-950 m-10 ">
      <h1 className="flex text-5xl font-comfortaa items-center justify-center">
        Ratings
      </h1>
      <div className="flex flex-wrap font-comfortaa font-bold place-content-center gap-5 ">
        {vary_reviews.map((readme) => {
          return <Rate_cards key={readme.index} ratings={readme.view} />;
        })}
      </div>
    </div>
  );
}

function Vdish({ index, review, source2 }) {
  return (
    <div>
      <div
        className="text-2xl flex flex-wrap flex-col m-5 items-center place-content-evenly"
        key={index}
      >
        
        <span className=" ">
          <img
            src={source2}
            alt="image_not_found"
            className=" border-2 border-slate-900 p-2 "
            height={300}
            width={300}
            loading="lazy"
          />
        </span>
        <span className=" ">{review}</span>

      </div>
        

    </div>
  );
}

function Bdish() {
  return (
    <div className="">
      <h1 className="text-5xl font-sans ">Best FOODS</h1>
      <section>
        {best_review.map((frog) => {
          return (
            <BestFood
              key={frog.index}
              name={frog.name}
              image={frog.source2}
              description={frog.description}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Home;
