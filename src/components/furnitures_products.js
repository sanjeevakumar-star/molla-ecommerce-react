import React from "react";
import FurnitureProducts from "./furnitureProducts";
function FurnituresProducts() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 md-3 sm-3">
          <FurnitureProducts
            id="1"
            image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-1-2.jpg"
            title="seater-2 sitting"
            price={111}
            quantity={0}
            amount={111}
          />
        </div>
        <div className="col-lg-3 md-3 sm-3">
          <FurnitureProducts
            id="3"
            title="Block Side Table/Trolly"
            price={199}
            image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-2-2.jpg"
            quantity={0}
            amount={199}
          />
        </div>
        <div className="col-lg-3 md-3 sm-3">
          <FurnitureProducts
            id="4"
            title="Flow Slim Armchair"
            price={159}
            image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-8-2.jpg"
            quantity={0}
            amount={159}
          />
        </div>
        <div className="col-lg-3 md-3 sm-3">
          <FurnitureProducts
            id="5"
            title="buttler stool lader"
            price={309}
            image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-3-2.jpg"
            quantity={0}
            amount={309}
          />
        </div>
        <div className="col-lg-3 md-3 sm-3">
          <FurnitureProducts
            id="8"
            title="Garden chair"
            price={299}
            image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-10-2.jpg"
            quantity={0}
            amount={299}
          />
        </div>
      </div>
    </div>
  );
}
export default FurnituresProducts;
