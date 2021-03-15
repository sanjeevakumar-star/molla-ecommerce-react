import React from 'react'
import ProductCartcss from './ProductCart.css'
import pro from '../background/pro.json';
import { useStateValue} from '../background/StateProvider';
import {GrCart} from 'react-icons/gr';

function Procart({image,title,price}){
    const [{basket} ,dispatch]=useStateValue();
  const removeitem = () => {
  dispatch({
      type:'REMOVE_FROM_CART',
      title:title,
      price: price    

      
  })
  }
 
  return(
    <div className="Data"> 

        <div> {pro .map(pros =>{
            return(
                <div className="row"> 
                    
                  <img  src={pros.image}  alt={pros.title}/>
                    
                     <p>{ pros.title}</p>
                    <p> ${pros.price} </p>
              
                    <button className="addbutton" onClick={removeitem}  >Remove from cart <GrCart className="productcart"/></button>    
  
                </div>
            )
            })}</div>
    </div>
)
}
export default Procart;