import React, { useState } from "react";

import { GrCart } from "react-icons/gr";

import { Link } from "react-router-dom";
import { useStateValue } from "../background/StateProvider";
import Recentarrivalcss from "../componentecommerce/Recentarrival.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
function Recentarrival({ image, title, price, id, quantity,amount }) {
  const notify = () => {
    toast("Item added");
  };

  const [{ basket }, dispatch] = useStateValue(0);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        quantity: quantity,
        amount:amount
      },
    });
  };

  return (
    <div className="container">
      <div className="change">
        <div className="product" key={id}>
          <Link to={`/system/${id}`}>
            <img className="imagepro" src={image} key={id} alt="" />
          </Link>
          <div className="productinfo">
            <p className="producttype">Furnitures</p>

            <a className="titlelink" href="/">
              <p>{title}</p>
            </a>
            <a className="productprice" href="/">
              {" "}
              <p className="productprice">
                <small>$</small>
                <strong className="recentimg1">{price} </strong>
              </p>{" "}
            </a>
          </div>
          <button
            className="addbutton"
            onClick={addToBasket}
            onClickCapture={notify}
          >
            ADD TO CART <GrCart className="productcart" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Recentarrival;
