import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Recentcss from "../componentecommerce/Recent.css";
import { GrCart } from "react-icons/gr";
import { useStateValue } from "../background/StateProvider";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
function Recent({ image, title, price, id ,quantity,amount}) {
  const notify = () => {
    toast("Item added");
  };

  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        quantity:quantity,
        amount:amount
      },
    });

    //
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="container">
            <div className=" product">
              <Link to={`/system/${id}`}>
                <img className="imagepro" src={image} alt="" />
              </Link>
              <div className="productinfo">
                <p className="producttype">Furnitures</p>
                <Link to={`/system/${id}`}>
                  <a className="titlelink" href="/">
                    <p>{title} </p>
                  </a>
                </Link>
              
                <p className="productprice">
                  <small>$</small>
                  <strong>{price}</strong>
                </p>
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
      </div>
    </div>
  );
}
export default Recent;
