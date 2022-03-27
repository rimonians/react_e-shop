import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from "./productTypes";

const initialProductState = {
  loading: false,
  product: {},
  err: "",
};

const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case FETCH_PRODUCT_SUCCESS:
      return { ...state, loading: false, product: action.payload, err: "" };
    case FETCH_PRODUCT_FAILURE:
      return { ...state, loading: false, product: [], err: action.payload };
    default:
      return state;
  }
};

export default productReducer;
