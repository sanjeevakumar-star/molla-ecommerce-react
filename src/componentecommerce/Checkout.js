import React from "react";

import { useStateValue } from "../background/StateProvider";
import Checkoutcss from "../componentecommerce/Checkout";
import Total from "../background/Total";
import ProductCart from "../background/ProductCart";
// import Pro from "../background/pro";

function Checkout({ id, image, title, price, amount }) {
  const [{ basket }] = useStateValue();

  return (
    <div className="container">
      {console.log("bass", basket)}

      <div className=" row checkout">
        <div className=" col-md-6  checkout_left">
          {basket?.length === 0 ? (
            <div>
              <h2 className="checkout_title">your shopping basket is empty</h2>

              <p>you have no items in your basket</p>
            </div>
          ) : (
            <div>
              <h2 className="shoppingbaskettitle">
                Items in the shoopping Basket
              </h2>
              {basket.map((item) => (
                <ProductCart
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  quantity={item.quantity}
                  amount={item.amount}
                />
              ))}
            </div>
          )}
        </div>

        {basket.length > 0 && (
          <div className=" col-md-6 checkout_right">
            <Total />
          </div>
        )}
      </div>
    </div>
  );
}
export default Checkout;
