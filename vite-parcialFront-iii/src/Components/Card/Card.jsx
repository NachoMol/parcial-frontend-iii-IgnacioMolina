import React from "react";
import './Card.css'

const Card = ({ name, club }) => {
  return (
    <div className="card-container">
       <div>Hola {name}, tu club favorito es {club}</div>
    </div>
  );
};

export default Card;