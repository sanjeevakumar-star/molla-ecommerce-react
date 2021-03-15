import React, { useState } from "react";
import Recentimagecss from "../background/Recentimage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";

import { Navbar, Nav } from "react-bootstrap";
import { GrCart } from "react-icons/gr";
import { AiOutlineFacebook, AiFillTwitterSquare } from "react-icons/ai";

import { FaInstagramSquare,  } from "react-icons/fa";
import { useStateValue } from "../background/StateProvider";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
function ProductDetails({ id, image, title, price }) {
  const notify = () => {
    toast("Item added");
  };

  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
      },
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Navbar>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="http://localhost:3000/">Home</Nav.Link>
                <Nav.Link href="#link">Shop</Nav.Link>
                <Nav.Link href="#link">Default</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <img className="background_image1" src={image} alt={title} />
        </div>

        <div className="col-md-6 productdetails">
          <h3>{title}</h3>
          <h3>${price}</h3>
          {/* */}{" "}
          <p className="sd">
            Morbi purus libero, faucibus adipiscing, commodo quis, gravida id,
            est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper
            lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
            neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus
            pede arcu, dapibus eu,
          </p>
          <div>
            {" "}
            <hr />
            <p>
              color :{" "}
              <ul>
                <a href="/">
                  {" "}
                  <li className="green">green</li>
                  <li className="red">red</li>
                </a>
              </ul>{" "}
            </p>
          </div>
          <div>
            <hr />
            <p className="productsizelist">
              size:{" "}
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  Select a Size
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Small</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Medium</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Large</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Extra Large</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </p>
            <hr />
          </div>
          <div>
            <button
              onClick={addToBasket}
              onClickCapture={notify}
              className="addbutton"
            >
              ADD TO CART <GrCart className="productcart" />
            </button>
          </div>
          <div>
            <a href="/">
              {" "}
              <p className="share">
                Share :<AiOutlineFacebook />
                <FaInstagramSquare />
                <AiFillTwitterSquare />
              </p>
            </a>
          </div>
        </div>
      </div>

      <hr />

      <hr />
    </div>
  );
}
export default ProductDetails;
