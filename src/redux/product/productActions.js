import axios from "axios";
import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from "./productTypes";

export const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST,
  };
};

export const fetchProductSuccess = (payload) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: payload,
  };
};

export const fetchProductFailure = (payload) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: payload,
  };
};

export const fetchProduct = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchProductRequest());
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      dispatch(fetchProductSuccess(response.data));
    } catch (err) {
      dispatch(fetchProductFailure(err.message));
    }
  };
};
