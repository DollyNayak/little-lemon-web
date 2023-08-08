import React from "react";
import SpecialsCard from "./Card";
import bruschettaImage from "../Assets/bruchetta.svg";
import greekSaladImage from "../Assets/greek salad.jpg";
import lemonDessertImage from "../Assets/lemon dessert.jpg";
import "./Specials.css";
import { Link } from "react-router-dom";

const specialItems = [
  {
    name: "Greek Salad",
    image: greekSaladImage,
    price: "$12.99",
    description: `The famous greek salad of crispy lettuce, peppers, olives and 
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
      croutons.`,
  },
  {
    name: "Bruschetta",
    image: bruschettaImage,
    price: "$5.99",
    description: `Our Bruschetta is made from grilled bread that has been 
      smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    name: "Lemon Dessert",
    image: lemonDessertImage,
    price: "$5.00",
    description: `This comes straight from grandma's recipe book, every last 
      ingredient has been sourced and is as authentic as can be imagined.`,
  },
];

export default function Specials() {
  return (
    <div className="specials-container">
      <div className="box">
      <div className="flex specials-header">
        <h1>Specials</h1>
        <Link to={"/under-construction"}>
          <button>Online Menu</button>
        </Link>
      </div>
      <div className="flex specials-cards">
        {specialItems.map((item) => (
          <SpecialsCard key={item.name} {...item} />
        ))}
      </div>
      </div>
    </div>
  );
}
