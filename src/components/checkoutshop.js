import React from "react";
import Total from "../background/Total";

import checkoutshopcss from "../components/checkoutshop.css";
import Orderdetail from "../background/orderdetail.js";
function Checkoutshop() {
  return (
    <div className="container">
      <div className="checkoutshop">
        <h1 className="checkoutshop">Checkout</h1>
        <p className="checkoutshops">Shop</p>
      </div>
      <div className="row">
        <div className="col-md-8">
          <b>
            {" "}
            <h5 className="billingdetails">Billing details</h5>{" "}
          </b>
          <form>
            <div class="form-group">
              <div class="form-check">
                <label for="inputEmail4">Firstname</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Firstname"
                />

                <label for="inputEmail4">Lastname</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Lastname"
                />
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputAddress">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>
                <div class="form-group">
                  <label for="inputAddress2">Address 2</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />

                  <label for="inputAddress2">Phone Number</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress2"
                    placeholder="Phone_Number"
                  />
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" class="form-control">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div class="form-group col-md-2">
                    <label for="inputZip">Postcode/Zip*</label>
                    <input type="text" class="form-control" id="inputZip" />
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label class="form-check-label" for="gridCheck">
                      Create an account?
                    </label>
                  </div>
                </div>

                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label class="form-check-label" for="gridCheck">
                      Ship to a different address?
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-4">
          <Orderdetail />
        </div>
      </div>
    </div>
  );
}
export default Checkoutshop;
