import React from 'react'
import Subtotalcss from  '../background/Subtotal.css';

import {Link} from "react-router-dom";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { useState } from 'react';


  function Orderdetail(){

    const getCartTotal=(basket)=>
    basket?.reduce((amount,item)  =>item.price+amount,0);
     

    const [{basket} ,dispatch]= useStateValue();
    return(<div className="container">
    
    <div className="subtotal"> 
<form className="totalform">
    <CurrencyFormat 
    
    renderText={(value)=>(

      <h5 className="total_length">
       Number Of Products : {basket.length}
      <hr/>
    
 <h5> Subtotal  Amount: {` ${value}`}</h5>

        </h5> 
    )}
    
    decimalScale={2}
    value={getCartTotal(basket)}
    displayType={"text"}
    thousandSeparator={true}
    prefix={"$"}
    />

<hr/>
     <p>Shopping:</p>
     <input type="radio" id="male" name="gender" value="male"/>
  <label for="male">Direct Bank transfer</label><br/>
  <input type="radio" id="female" name="gender" value="female"/>
  <label for="female">Check Payments</label><br/>
  <input type="radio" id="female" name="gender" value="female"/>
  <label for="female">Cash on  Delivery</label><br/>
  <input type="radio" id="female" name="gender" value="female"/>
  <label for="female">Pay Pal</label><br/>
  <input type="radio" id="female" name="gender" value="female"/>
  <label for="female">Credit Card(Stripe)</label><br/>
    
     <div>
     <a href=" " className="address">change address</a>
     <hr/>
     </div>
    <button className="totalcheckout">PLACE ORDER</button>
    <hr/>
   
    </form>
    </div>
    </div>);
   }
  export default Orderdetail;