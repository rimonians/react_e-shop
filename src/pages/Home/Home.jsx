import React, { useEffect } from "react";
import classes from "./Home.module.css";
import Heading from "../../components/Heading/Heading";
import Card from "../../components/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/products/productsActions";

const Home = () => {
  const productsState = useSelector((state) => state.products);
  const { loading, products, err } = productsState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={classes.wrapper}>
      <Heading>Recent Products</Heading>
      {loading && <p>Loading...</p>}
      {err && <p>{err}</p>}
      <div className={classes.cardContainer}>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
