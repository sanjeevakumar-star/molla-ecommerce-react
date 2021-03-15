import React from "react";

import { AiFillFacebook } from "react-icons/ai";
import Logincss from "../background/Login.css";
import { ImGoogle2 } from "react-icons/im";
const Login = () => {
  return (
    <div className="container">
      <h1 className="logintitle">Login</h1>
      <div className="row">
        <div className="col-lg-12">
          <form className="form" action="">
            <div className="form-group">
              <label for="email">Email address:</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" className="form-control" id="pwd" />
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" /> Remember me{" "}
                <a href=" " class="forgetpsw">
                  Forget password
                </a>
              </label>
            </div>
            <button type="submit" className="btn btn-default bg-success">
              Submit
            </button>

            <hr></hr>
            <p>or sign in with</p>
            <div>
              <button className="glefb">
                {" "}
                <ImGoogle2 />
                login with google
              </button>{" "}
              <button className="glefb">
                {" "}
                <AiFillFacebook />
                login with FaceBook
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
