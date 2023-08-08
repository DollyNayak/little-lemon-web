import React from "react";
import { Link } from 'react-router-dom';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Card.css";

export default function SpecialsCard(props) {
  return (
    <div className="specials-card-container">
      <img src={props.image} alt={props.name} />
      <div className="flex specials-card-header">
        <h3>{props.name}</h3>
        <p>{props.price}</p>
      </div>

      <p>{props.description}</p>
      <div className="specials-card-delivery">
        <Link to={"/under-construction"}>
          Order a delivery <FontAwesomeIcon icon={faMotorcycle} size="3x" />
        </Link>
      </div>
    </div>
  );
}