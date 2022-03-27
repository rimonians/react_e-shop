import React from "react";
import classes from "./Cart.module.css";
import Heading from "../../components/Heading/Heading";
import { useSelector, useDispatch } from "react-redux";
import { cartUpdate, cartRemove } from "../../redux/cart/cartActions";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  let totalItem = 0;
  let totalPrice = 0;
  cart.forEach((el) => {
    totalItem += el.quantity;
    totalPrice += el.quantity * el.price;
  });

  return (
    <div className={classes.wrapper}>
      <Heading>Cart Lists</Heading>
      {cart.length === 0 && <parent>Cart is empty</parent>}
      {cart.length !== 0 && (
        <div className={classes.cartContainer}>
          <table>
            <thead>
              <tr>
                <th>Serial</th>
                <th>Image</th>
                <th>Product</th>
                <th>Rate</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>
                    <img src={item.image} alt="" />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        dispatch(
                          cartUpdate({
                            id: item.id,
                            value: Number(e.target.value),
                          })
                        )
                      }
                    />
                  </td>
                  <td>{(item.quantity * item.price).toFixed(2)}</td>
                  <td>
                    <button onClick={() => dispatch(cartRemove(item.id))}>
                      <MdOutlineRemoveShoppingCart />
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={4}>Sub Total</td>
                <td>{totalItem}</td>
                <td>{totalPrice.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Cart;
