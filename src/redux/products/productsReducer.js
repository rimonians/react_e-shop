import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "./productsTypes";

const initialProductsState = {
  loading: false,
  products: [],
  err: "",
};

const productsReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true, products: [], err: "" };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload, err: "" };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, products: [], err: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
