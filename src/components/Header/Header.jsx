import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { SiTrustedshops } from "react-icons/si";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart.cart);
  let totalItem = 0;
  cart.forEach((el) => {
    totalItem += el.quantity;
  });

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">
          <SiTrustedshops />
          <span>E-shop</span>
        </Link>
      </div>
      <div className={classes.links}>
        <Link to="/cart">
          <FiShoppingCart /> Cart ({totalItem})
        </Link>
      </div>
    </div>
  );
};

export default Header;
