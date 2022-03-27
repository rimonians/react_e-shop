import { CART_ADD, CART_UPDATE, CART_REMOVE } from "./cartTypes";

const initialCartState = {
  cart: [],
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case CART_ADD:
      const inCart = state.cart.find((item) => item.id === action.payload.id);
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return {
        ...state,
        cart: inCart ? updatedCart : [...state.cart, action.payload],
      };
    case CART_UPDATE:
      const updatedCartQuantity = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: action.payload.value };
        }
        return item;
      });
      return { ...state, cart: updatedCartQuantity };
    case CART_REMOVE:
      const afterRemoved = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, cart: afterRemoved };
    default:
      return state;
  }
};

export default cartReducer;
