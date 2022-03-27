import React from "react";
import classes from "./ProductContainer.module.css";
import { FiStar, FiDollarSign, FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { cartAdd } from "../../redux/cart/cartActions";

const ProductContainer = ({ productState }) => {
  const dispatch = useDispatch();
  const { loading, product, err } = productState;

  return (
    <>
      {!loading && !err && (
        <div className={classes.productContainer}>
          <div className={classes.productImage}>
            <img src={product.image} alt="" />
          </div>
          <div className={classes.productInfo}>
            <div className={classes.infoGroup}>
              <h3 className={classes.title}>{product.title}</h3>
              <p className={classes.category}>{product.category}</p>
              <p className={classes.rating}>
                <FiStar />
                {product?.rating?.rate}
              </p>
              <p className={classes.description}>{product.description}</p>
              <div className={classes.action}>
                <button className={classes.price}>
                  <FiDollarSign /> {product.price}
                </button>
                <button
                  className={classes.cart}
                  onClick={() => dispatch(cartAdd({ ...product, quantity: 1 }))}
                >
                  <FiShoppingCart />
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductContainer;
