import React from "react";
import classes from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { id, title, image, category, price } = product;
  return (
    <div className={classes.card}>
      <div className={classes.cardImg}>
        <img src={image} alt="" />
        <p>{category}</p>
      </div>
      <div className={classes.cardInfo}>
        <h4>{title}</h4>
        <div className={classes.action}>
          <p>Price : {price} $</p>
          <Link to={`/product/${id}`}>View</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
