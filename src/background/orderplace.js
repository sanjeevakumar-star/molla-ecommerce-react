import React from "react";
import Login from '../background/Login'
import { Link } from "react-router-dom";
function Orderplace() {
  return (<div className="orderplaced">
    <div className="p-3 text-center text-success">
       
      <p>Order successfull</p>
      <a href="/http://localhost:3000"> <Link to="/" className="btn btn-outline-success btn-sm">
      BUY MORE PRODUCTS
      </Link></a>

    </div></div>
  );
}
export default Orderplace;
