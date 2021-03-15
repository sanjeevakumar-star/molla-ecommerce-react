import React from 'react'
import{GrDeliver} from 'react-icons/gr'

import {MdFindReplace} from 'react-icons/md'
import{MdDonutLarge} from 'react-icons/md'
import  Paymentcss from '../componentecommerce/Payment.css';
function Payment(){
    return(<div className="container">


        <div  className="payment">
            <button className="loadproducts"> Load more products</button>
<div className="row">
    <div className="col-md-4 ">

    <GrDeliver  className="replacement"/>
    <h5>payment&delivery</h5>
    <p>Free Shipping for orders over $50%</p>
    </div>
  
    <div className="col-md-4 ">
    < MdFindReplace className="replacement"/>
    <h5>Return&Refund</h5>
    <p>Free 100% money back guarantee</p>
    </div>
    <div className="col-md-4 ">
   < MdDonutLarge  className="replacement"/>
   <h5>Quality&Support</h5>
    <p>Alway online feedback 24/7</p>
    </div>
   

 




</div>

 </div>
    </div>)

}
export default Payment;