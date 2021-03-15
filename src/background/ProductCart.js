import React from "react";
import ProductCartcss from "./ProductCart.css";
import { useStateValue } from "../background/StateProvider";
import Data from "../componentecommerce/data";

function ProductCarts({ image, title, price, id, quantity, amount }) {
  const [{ basket }, dispatch] = useStateValue(0);

  const removeitem = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
      image: image,
      title: title,
      price: price,
      quantity: quantity,
      amount: amount,
    });
  };

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        quantity: quantity,
        amount: amount,
      },
    });
  };
  const decreasecart = () => {
    dispatch({
      type: "DECREASE",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        quantity: quantity,
        amount: amount,
      },
    });
  };
  return (
    <div className="container row">
      <div className=" col md-6 productcartdetails">
        <img className="productcart_imagepro" src={image} alt="" />
        <div className="productcartinfo">
          <p className="productcart_title">{title}</p>

          <p className="productcartprice">
            <small>$</small>

            <strong>{price}</strong>
          </p>

          <button className="remove_button" onClick={removeitem}>
            REMOVE TO CART
          </button>

          <div>
            <button className="increase" onClick={addToBasket}>
              +
            </button>
            {quantity}
            <button className="decrease" onClick={decreasecart}>
              -
            </button>
          </div>
          <p> Total amount:${amount}</p>
        </div>
      </div>
    </div>
  );
}
export default ProductCarts;
