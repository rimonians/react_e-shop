import axios from "axios";
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "./productsTypes";

export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsSuccess = (payload) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: payload,
  };
};

export const fetchProductsFailure = (payload) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: payload,
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchProductsRequest());
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(fetchProductsSuccess(response.data));
    } catch (err) {
      dispatch(fetchProductsFailure(err.message));
    }
  };
};
