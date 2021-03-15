import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./componentecommerce/Checkout";
// import Login from "./background/Login";
import Recentimage1 from "./background/Recentimage.js";
import data from "./componentecommerce/data";
import Header from "./componentecommerce/Header";
import Footer from "./componentecommerce/Footer";
import ProductDescription from "./background/ProductDescription";

import Furniture from "./background/Furniture";
import Lightings from "./components/Lightings";
import DecorationProducts from "./components/DecorationProducts";
import ReactTabs from "./background/ReactTabs";
import FurnituresProducts from "./components/furnitures_products";
import Checkoutshop from "./components/checkoutshop";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <div>
            <Header />

            <Route exact path="/" component={data} />

            {/* <Route path="/login" component={Login} /> */}

            <Route path="/checkout" component={Checkout} />

            <Route path="/recentimage/:id" component={Recentimage1} />

            <Route path="/productDetails" component={ProductDescription} />

            <Route path="/productType" component={ReactTabs} />

            <Route path="/productstype/:catagory" component={Furniture} />

            <Route path="/furniture" component={FurnituresProducts} />

            <Route path="/decoration" component={DecorationProducts} />

            <Route path="/lighting" component={Lightings} />

            <Route path="/proceedtocheckout" component={Checkoutshop} />

            <Footer />
          </div>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
