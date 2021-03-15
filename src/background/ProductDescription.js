import React from 'react'
import ProductDetails from '../background/ProductDetails.js';
function ProductDescription(){
    return(
        <div>
 <ProductDetails
    
    id="1"
    image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-1-2.jpg"
  
    title="seater-2 sitting"
    price={111.00}
   
    />
    
    <ProductDetails
    id="2"
    title="carronade table lamp"
    price={220.00}
    
    image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-6-2.jpg"
    
   />
  
   
   <ProductDetails
   id="3"
  title="Block Side Table/Trolly"
 
  price={199.00}
  
  image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-2-2.jpg"
   />
  
    
   <ProductDetails
   id="4"
   title="Flow Slim Armchair"
   price={299.10}
    
   image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-8-2.jpg"/>
   
   <ProductDetails
   id="5"
   title="buttler stool lader"
   price={309.00}
   
   image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-3-2.jpg" 
   />
   <ProductDetails
   id="6"
   title="buttler stool lader"
   price={109.00}
   
   image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-3-2.jpg" 
   />
   <ProductDetails
   id="7"
 title="Large suspension LAMP"
 price={211.00}
 image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-5-2.jpg"
 />
   <ProductDetails
   id="8"
   title="Garden chair"
   price={212.00}
   
   image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-10-2.jpg"
   />
 

        </div>
    )
}
export default ProductDescription;