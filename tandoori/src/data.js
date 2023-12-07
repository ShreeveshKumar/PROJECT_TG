const apetite = [
  {
    name: "Tandoori Chicken",
    description:
      "roasted chicken flavoured with raw cooking and that flavour of crisp chicken",
    source:
      "https://upload.wikimedia.org/wikipedia/commons/2/27/Tandoori_chicken_Indian.jpg",
  },
  {
    name: "Afghani Chicken",
    description:
      "let that tangy flavour touch your tongue and let all the flavour mix in , you will love its gravy ",
    source:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/Afghani_Malai_Chicken_Tikka.jpg",
  },
  {
    name: "Khadhai Paneer",
    description: "raw paneer cooked straight up to delight your taste buds",
    source:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Kadai_Paneer_With_Gravy.jpg",
  },
  {
    name: "Shahi Paneer",
    description:
      "Raw paneer dipped into the flavourful gravy, you will love them ",
    source:
      "https://upload.wikimedia.org/wikipedia/commons/8/81/Shahi_paneer_with_lachha_parantha.jpg",
  },
];

const best_review = [
  {
    review:
      "Tandoori Gali restaurant ka Butter Chicken, maza aagaya! Iske swaad mein hai ek khaas magic, dil se bhar kar khaya maine.",
    source2:
      "https://upload.wikimedia.org/wikipedia/commons/4/41/Homemade_Butter_Chicken.jpg",
  },
  {
    review:
      "Tandoori Gali restaurant ki Khadhai Paneer, dil ko choo gayi! Uski masaledar khushboo aur swaad, lajawaab hai, fir se khane ka mann kar raha hai.",
    source2:
      "https://upload.wikimedia.org/wikipedia/commons/7/72/Kadhai_paneer.jpg",
  },
];



const vary_reviews = [
  {
    view: "Rohan , KIET Great place for a quick bite. I tried the chicken tikka, and it was juicy and packed with flavor. They sure know how to make their non-veg dishes tasty. The veg options looked tempting too. ⭐⭐⭐⭐⭐",
  },
  {
    view: "Rishabh , KIET I am a vegetarian, and I was delighted with the variety of options they had. I tried the paneer butter masala, and it was heavenly. The gravy was rich and creamy – definitely the best in town. ⭐⭐⭐⭐⭐",
  },
  {
    view: "Sara, ITS  Spice Haven Spice Haven exceeded my meat-loving expectations. The paneer kadhai was a flavor revelation, and the butter chicken was divine. A five-star experience. ⭐⭐⭐⭐⭐",
  },
  {
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



module.exports = { apetite, best_review,vary_reviews,OrderDish,Deliver_question };
