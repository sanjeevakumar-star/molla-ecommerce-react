import React from "react";


import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { GrCart } from "react-icons/gr";

import { BiSearch } from "react-icons/bi";
import {
  Navbar,
  
  Nav,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStateValue } from "../background/StateProvider";
import css from "../componentecommerce/Header.css";

function Header() {
  // const [count, setCount] = useState(0);
  const [{ basket }, ] = useStateValue();

  return (
    <div className="container">
      <div className="dropdown">
        <Navbar bg="" expand="md">
          <a className=" dropdown-toggle" href="/">USD </a>

          <a className=" dropdown-toggle" href="/">ENG </a>
           <Navbar.Toggle aria-controls="Link" >Links</Navbar.Toggle> 
          <Navbar.Collapse Link="Link">
            <Nav className="mr-auto">
              <Nav.Link className="call" href="#Call">
                {" "}
                <FaPhoneAlt />
                CALL : + 01432 896 453
              </Nav.Link>
              <Nav.Link className="contact" href="#Contact">
                CONTACT US
              </Nav.Link>
              <Nav.Link className="mywish" href="#MywishList">
                <FaHeart /> MYWISHLIST(0)
              </Nav.Link>
              <Nav.Link className="about" href="#About">
                ABOUT
              </Nav.Link>
              <Link to="/login">
                <Nav.Link className="login" href="#Login">
                  <BiLogIn />
                  LOGIN
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <hr />
      <b>
        <Navbar bg="" expand="lg">
          <a href="http://localhost:3000/">
            {" "}
            <img
              className="navbar-brand logo"
              src="https://d-themes.com/react/molla/demo-2/assets/images/logo.png"
              alt=""
            />
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="http://localhost:3000/">Home</Nav.Link>
              <Nav.Link href="Shop">Shop</Nav.Link>
              <Link to="/ProductDetails">
                {" "}
                <Nav.Link href="ProductDetails">Product</Nav.Link>
              </Link>
              <Nav.Link href="#Pages">Pages</Nav.Link>
              <Nav.Link href="#Blogs">Blog</Nav.Link>
              <Nav.Link href="#Elements">Element</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />

              <Button variant="succes">
                Search
                <BiSearch />
              </Button>
            </Form>
          </Navbar.Collapse>

          <Link to="/checkout" className="header_link">
            <div className="header__optionBaskert">
              <GrCart className="cartimg" />
              <button className="cart">{basket?.length}</button>
            </div>
          </Link>
        </Navbar>
      </b>
    </div>
  );
}
export default Header;
