const apetite = [
  {
    index: 1,
    name: "Tandoori Chicken",
    description:
      "roasted chicken flavoured with raw cooking and that flavour of crisp chicken",
    source:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg/1200px-Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg?quality=auto&format=webp",
  },
  {
    index: 2,
    name: "Afghani Chicken",
    description:
      "let that tangy flavour touch your tongue and let all the flavour mix in , you will love its gravy ",
    source:
      "https://live.staticflickr.com/7167/6484530543_74f0046e44_k.jpg?quality=auto&format=webp",
  },
  {
    index: 3,
    name: "Khadhai Paneer",
    description: "raw paneer cooked straight up to delight your taste buds",
    source:
      "https://live.staticflickr.com/7496/15913018051_d7d3d50111_k.jpg?quality=auto&format=webp",
  },
  {
    index: 4,
    name: "Shahi Paneer",
    description:
      "Raw paneer dipped into the flavourful gravy, you will love them ",
    source:""
      // "https://live.staticflickr.com/2890/9536501964_3c20a65438_h.jpg?quality=auto&format=webp",
  },
];

const best_review = [
  {
    index:1,
    review:
      "Tandoori Gali restaurant ka Butter Chicken, maza aagaya! Iske swaad mein hai ek khaas magic, dil se bhar kar khaya maine.",
    source2:
      "https://upload.wikimedia.org/wikipedia/commons/4/41/Homemade_Butter_Chicken.jpg",
  },
  {
    index:2,
    review:
      "Tandoori Gali restaurant ki Khadhai Paneer, dil ko choo gayi! Uski masaledar khushboo aur swaad, lajawaab hai, fir se khane ka mann kar raha hai.",
    source2:
      "https://upload.wikimedia.org/wikipedia/commons/7/72/Kadhai_paneer.jpg",
  },
];



const vary_reviews = [
  {
    index: 1,
    view: "Rohan , KIET Great place for a quick bite. I tried the chicken tikka, and it was juicy and packed with flavor. They sure know how to make their non-veg dishes tasty. The veg options looked tempting too. ⭐⭐⭐⭐⭐",
  },
  {
    index: 2,
    view: "Rishabh , KIET I am a vegetarian, and I was delighted with the variety of options they had. I tried the paneer butter masala, and it was heavenly. The gravy was rich and creamy – definitely the best in town. ⭐⭐⭐⭐⭐",
  },
  {
    index: 3,
    view: "Sara, ITS  Spice Haven Spice Haven exceeded my meat-loving expectations. The paneer kadhai was a flavor revelation, and the butter chicken was divine. A five-star experience. ⭐⭐⭐⭐⭐",
  },
  {
    index: 4,
    view: "Lakshay, RKGIT  Campus Food Escape Food Escape saved me from campus mess food misery. The paneer kadhai was a flavor explosion, and the butter chicken was pure bliss. My go-to escape now. ⭐⭐⭐⭐⭐",
  },
];


const OrderDish = [
  {
    name: 'Butter Chicken',
    code: 'bc',
  },
  {
    name: 'Roasted Chicken',
    code: 'rc',
  },
  {
    name: "Changezi Chicken",
    code: 'cc',
  },
];


const Deliver_question = [
  {
    name: "Enter your name",
  },
  {
    name:'Enter your Mobile No'
  },
  {
    name: 'Enter your House No / Locality ',
  },
  {
    name:'Enter your full Address'
  }
];


const food_order = [
  {
    index: 1,
    name: "Butter Chicken",
    amount: 0,
  },
  {
    index: 2,
    name: "Afghani Chicken",
    amount: 0,
  },
  {
    index: 3,
    name: "Chicken Curry",
    amount: 0,
  },
  {
    index: 4,
    name: "Chicken Changezi",
    amount: 0,
  },
  {
    index: 5,
    name: "Chicken fry",
    amount: 0,
  },
  {
    index: 6,
    name: "Chicken Tikka",
    amount: 0,
  }
];

const navposter = [{
  image:"./src/assets/poster.jpg"
}]


module.exports = { apetite, best_review,vary_reviews,OrderDish,Deliver_question,food_order,navposter };
