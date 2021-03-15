import React, { useState } from 'react'
import { render } from 'react-dom';
import {GrCart} from 'react-icons/gr';

import {Link} from "react-router-dom";
import { useStateValue } from '../background/StateProvider';


 
  function LightingProdutcts({image,title,price,id}){



  const [{basket} ,dispatch]=useStateValue()
    const addToBasket= () => {
      dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:id,
        title: title,
        image: image,
        price: price
      }
    })
 
 
  }



   return(<div className="container" >
   <div>
    
<div className="product" key={id}>
 <a  href=""><Link to={`/system/${id}`}><img  className="imagepro" src={image}  key={id} alt=""/></Link></a> 
<div className="productinfo">

  <a className="titlelink" href=""><p >{title}</p></a>
  <a className="productprice">  <p className="productprice">
      <small>$</small>
      <strong className="recentimg1">{price}</strong>
      </p> </a> 
    
   
 
</div>
  <button className="addbutton" onClick={addToBasket}  >ADD TO CART <GrCart className="productcart"/></button>
</div>
</div>
</div> );
}
export default LightingProdutcts;   
 