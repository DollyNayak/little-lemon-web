import React from "react";
import { Link } from 'react-router-dom';
import "./Hero.css";


export default function Hero() {
  return (
    <div className="flex green-container hero-container ">
      <div className="flex hero-info ">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family-owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to={"/reservations"}>
          <button>Reserve a table</button>
        </Link>
      </div>
      <div className="hero-image">
        <img
          src={require("../Assets/restauranfood.jpg")}
          alt="restaurant food"
        />
      </div>
    </div>
  );
}