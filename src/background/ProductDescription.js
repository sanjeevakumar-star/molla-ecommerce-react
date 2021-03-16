import React from "react";
import ProductDetails from "../background/ProductDetails.js";
function ProductDescription() {
  return (
    <div>
      <ProductDetails
        id="1"
        image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-1-2.jpg"
        title="seater-2 sitting"
        price={111}
        quantity={0}
        amount={111}
      />

      <ProductDetails
        id="2"
        title="carronade table lamp"
        price={220}
        image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-6-2.jpg"
        quantity={0}
        amount={220}
      />

      <ProductDetails
        id="3"
        title="Block Side Table/Trolly"
        price={199}
        image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-2-2.jpg"
        quantity={0}
        amount={199}
      />

      <ProductDetails
        id="4"
        title="Flow Slim Armchair"
        price={299}
        image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-8-2.jpg"
        quantity={0}
        amount={299}
      />

      <ProductDetails
        id="5"
        title="buttler stool lader"
        price={309}
        image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-3-2.jpg"
        quantity={0}
        amount={309}
      />
      <ProductDetails
        id="6"
        title="buttler stool lader"
        price={109}
        image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-3-2.jpg"
        quantity={0}
        amount={109}
      />
      <ProductDetails
        id="7"
        title="Large suspension LAMP"
        price={211}
        image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-5-2.jpg"
        quantity={0}
        amount={211}
      />
      <ProductDetails
        id="8"
        title="Garden chair"
        price={212}
        image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-10-2.jpg"
        quantity={0}
        amount={212}
      />
    </div>
  );
}
export default ProductDescription;
