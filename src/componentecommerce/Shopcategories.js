import React from "react";
import { BsArrowRight } from "react-icons/bs";
//import { Route } from 'react-router-dom';
import Shopcategoriescss from "../componentecommerce/Shopcategories.css";
import { Link } from "react-router-dom";
function Shopcategories() {
  return (
    <div className="container hi">
      <div className="linehr">
        <hr className="hr" />
      </div>
      <h2 className="categories_title">Shop by Categories</h2>

      <div className="Shoppingcategories">
        <div className="row">
          <div className="col-md-4 ">
            <a href="/">
              <img
                className="  categorieimg1"
                src="https://d-themes.com/react/molla/demo-9/assets/images/home/sliders/slide-1.jpg"
                alt="shoppping categories"
              />
              <div class="carousel-caption">
                <h5 className="titless">Womens sportswear 2021 </h5>
                <Link to="/ProductType">
                  {" "}
                  <a href="/">
                    {" "}
                    <div className="image__overlay">
                    <button className="buttons">
                      Shop now
                      <BsArrowRight />
                    </button>
                    </div>
                  </a>
                </Link>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="/">
              {" "}
              <img
                className=" categorieimg2 "
                src="https://d-themes.com/react/molla/demo-7/assets/images/home/posts/post-3.jpg"
                alt="shooping categories"
              />
              <div class="carousel-caption">
                <h5 className="titless">Shoes for Womens </h5>
                <Link to="/ProductType">
                  {" "}
                  <a href="/">
                    {" "}
                    <div className="image__overlay">
                    <button className="buttons1">
                      Shop now
                      <BsArrowRight />
                    </button>
                    </div>
                  </a>
                </Link>
              </div>
            </a>

            <a href="/">
              {" "}
              <img
                className="Categorieimg4"
                src="https://d-themes.com/react/molla/demo-7/assets/images/blog/grid/3cols/post-2.jpg"
                alt="shooping catagories"
              />
              <div class="carousel-caption">
                <h5 className="makeups">Fashions </h5>
                <Link to="/ProductType">
                  {" "}
                  <a href="/">
                    {" "}
                    <div className="image__overlay">
                    <button className="button3">
                      Shop now
                      <BsArrowRight />
                    </button>
                    </div>
                  </a>
                </Link>
              </div>{" "}
            </a>
          </div>
          <div className="col-md-4 ">
            <a href="/">
              {" "}
              <img
                className="image__img"
                src=" https://d-themes.com/react/molla/demo-9/assets/images/home/sliders/slide-2.jpg"
                alt="shopping categories"
              />
              <div class="carousel-caption">
                <h5 className="titless">Mens jacket </h5>
                <Link to="/Shopping">
                  <div className="image__overlay">
                    <button className="buttons">
                      Shop now
                      <BsArrowRight />
                    </button>
                  </div>
                </Link>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-md-12">
            <h3 className="arrivals">
              <b>Recent Arrivals</b>
            </h3>
            <div className="list ">
              <a className="lists" href="/">
                All
              </a>
              <a className="list1" href="/">
                FURNITUE
              </a>
              <a className="list1" href="/">
                DECARATION
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Shopcategories;
