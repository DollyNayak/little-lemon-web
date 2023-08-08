import React from "react";
import "./Testimonials.css";
export default function TestmonialItem(props) {
  return (
    <div className="testimonials-item-container">
      <div className="flex profile">
        <img src={props.image} alt={props.name} />
        <h3>{props.name}</h3>
      </div>
      <p>{props.rating}</p>
      <p>"{props.review}"</p>
    </div>
  );
}