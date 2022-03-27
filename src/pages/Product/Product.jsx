import React, { useEffect } from "react";
import classes from "./Product.module.css";
import Heading from "../../components/Heading/Heading";
import ProductContainer from "../../components/ProductContainer/ProductContainer";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../redux/product/productActions";

const Product = () => {
  const productState = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const params = useParams();
  const { loading, err } = productState;
  const { id } = params;

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, []);

  return (
    <div className={classes.wrapper}>
      <Heading>Product Details</Heading>
      {loading && <p>Loading...</p>}
      {err && <p>{err}</p>}
      {!loading && !err && <ProductContainer productState={productState} />}
    </div>
  );
};

export default Product;
