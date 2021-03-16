import React from "react";
import Decoration from "./Decoration";
function DecorationProducts() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 md-4 sm-4">
          <Decoration
            id="2"
            title="carronade table lamp"
            price={(220)}
            image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-6-2.jpg"
            quantity = {0}
            amount={220}
          />
        </div>
        <div className="col-lg-4 md-4 sm-4">
          <Decoration
            id="7"
            title="Large suspension LAMP"
            price={(210)}
            image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-5-2.jpg"
            quantity = {0}
            amount={210}
          />
        </div>
      </div>
    </div>
  );
}
export default DecorationProducts;
