import { ADD_CERAMIC, DELETE_CERAMIC } from "./ActionsNames";
import product9 from "../../assets/product-09.jpg";
import ceramic_cup from "../../assets/ceramic-cup-01.jpg";
import product3 from "../../assets/product-03.jpg";
import product8 from "../../assets/product-08.jpg";
import product6 from "../../assets/product-06.jpg";
import product5 from "../../assets/product-05.jpg";
import ceramic_planter1 from "../../assets/ceramic-planter-01.jpg";
import product1 from "../../assets/product-01.jpg";
import product2 from "../../assets/product-02.jpg";
import product7 from "../../assets/product-07.jpg";
import contact1 from "../../assets/contact-01.jpg";

export const initial_state = {
  products: [
    {
      img_url: product9,
      type: "Ceramic",
      name: "Ceramic Cup",
      price: 189,
    },
    {
      img_url: ceramic_cup,
      type: "Ceramic",
      name: "Ceramic Planter",
      price: 299,
    },
    {
      img_url: product3,
      type: "Ceramic",
      name: "Ceramic Plates",
      price: 119,
    },
    {
      img_url: product8,
      type: "Ceramic",
      name: "Ceramic Plates and Spoons",
      price: 209,
    },
    {
      img_url: product6,
      type: "Ceramic",
      name: "Ceramic Vases and Spoons",
      price: 299,
    },
    {
      img_url: product5,
      type: "Pottery",
      name: "Ceramic Vases and Planters",
      price: 217,
    },
    {
      img_url: ceramic_planter1,
      type: "Pottery",
      name: "Ceramic Planters",
      price: 189,
    },
    {
      img_url: product1,
      type: "Pottery",
      name: "Ceramic Drink Coasters",
      price: 189,
    },
    {
      img_url: product2,
      type: "Pottery",
      name: "Vases and Planters",
      price: 189,
    },
    {
      img_url: product7,
      type: "Pottery",
      name: "Ceramic Vases and Planters",
      price: 189,
    },
    {
      img_url: contact1,
      type: "Pottery",
      name: "Ceramic Vases and Planters",
      price: 189,
    },
  ],
  shops: [
    {
      img_url: product9,
      type: "Ceramic",
      name: "Ceramic Cup",
      price: 189,
    },
    {
      img_url: ceramic_cup,
      type: "Ceramic",
      name: "Ceramic Planter",
      price: 299,
    },
    {
      img_url: product3,
      type: "Ceramic",
      name: "Ceramic Plates",
      price: 119,
    },
  ],
  basket: [],
  total_price: 0,
};

export const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case ADD_CERAMIC:
      return {
        ...state,
        basket: [...state.basket, state.products[action.payload]],
        total_price: state.total_price + state.products[action.payload].price,
      };

    case DELETE_CERAMIC:
      return {
        ...state,
        basket: [
          ...state.basket.slice(0, action.payload),
          ...state.basket.slice(action.payload + 1),
        ],
        total_price: state.total_price - state.products[action.payload].price,
      };
    default:
      return state;
  }
};
