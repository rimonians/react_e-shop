import { CART_ADD, CART_UPDATE, CART_REMOVE } from "./cartTypes";

export const cartAdd = (payload) => {
  return {
    type: CART_ADD,
    payload: payload,
  };
};

export const cartUpdate = (payload) => {
  return {
    type: CART_UPDATE,
    payload: payload,
  };
};

export const cartRemove = (payload) => {
  return {
    type: CART_REMOVE,
    payload: payload,
  };
};
