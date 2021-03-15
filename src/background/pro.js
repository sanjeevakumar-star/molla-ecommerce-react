import React,{useState}from 'react'
import pro from '../background/pro.json';
import {GrCart} from 'react-icons/gr';
import { useStateValue } from '../background/StateProvider';
import {Link} from "react-router-dom"; 
import procss from '../background/pro.css'
function Pro(id,image,title,price){

    const [{basket} ,dispatch]=useStateValue();
    const addToBasket= () => {
      dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:id,
        image:image,
        title:title,
        price:price
       
      }
    })
 
 
  }



 
  
  return(
      <div className="container Data "> 

          <div> {pro.map(pro =>{
              return(
                  <div className="card" key={pro.id}> 
                      
                      <Link to={`/products/${pro.id}`}>   <img src={pro.image}  alt={pro.title}/></Link>
                      <Link to={`/products/${pro.id}`}>  <p>{pro.title}</p></Link>
                      <p> ${pro.price} </p>
                
                      <button className="addbutton" onClick={addToBasket}  >ADD TO CART<GrCart className="productcart"/></button>    
    
                  </div>
              )
              })}</div>
      </div>
  )
}
export default Pro;

