import React from 'react'
import Lightingproducts from './Lightingproducts'
function Lightings(){

    return(  <div className="container">

       <div className="row">
           <div className="col-lg-4 md-4 sm-4">
        < Lightingproducts 
 id="2"
title="carronade table lamp"
price={2,220.00}

image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-6-2.jpg"

/>

</div>
<div className="col-lg-4 md-4 sm-4">
< Lightingproducts
 id="7"
title="Large suspension LAMP"
price={2,111.00}

image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-5-2.jpg"

/>
</div>
</div>
       </div>
    )
}
export default Lightings;  