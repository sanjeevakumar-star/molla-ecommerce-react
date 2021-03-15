import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import Imagescss from "../componentecommerce/Images.css";

function Images() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024, //1024
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, //600
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480, //480
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          alignItems: "center",
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="hello">
        <div className="row">
          <div className="col-md-12">
            <Slider {...settings}>
              <a href="/">
                {" "}
                <img
                  className="addimg"
                  src="https://d-themes.com/react/molla/demo-2/assets/images/brands/1.png"
                  alt=""
                />
              </a>

              <a href="/">
                {" "}
                <img
                  className="addimg"
                  src="https://d-themes.com/react/molla/demo-2/assets/images/brands/5.png"
                  alt=""
                />
              </a>

              <a href="/">
                {" "}
                <img
                  className="addimg"
                  src="https://d-themes.com/react/molla/demo-2/assets/images/brands/3.png"
                  alt=""
                />
              </a>

              <a href="/">
                {" "}
                <img
                  className="addimg"
                  src="https://d-themes.com/react/molla/demo-2/assets/images/brands/4.png"
                  alt=""
                />
              </a>

              <a href="/">
                <img
                  className="addimg"
                  src="https://d-themes.com/react/molla/demo-1/assets/images/brands/2.png"
                  alt=""
                />
              </a>

              <a href="/">
                <img
                  className="addimg"
                  src="https://d-themes.com/react/molla/demo-2/assets/images/brands/6.png"
                  alt=""
                />
              </a>

              <a href="/">
                {" "}
                <img
                  className="addimg"
                  src="https://d-themes.com/react/molla/demo-2/assets/images/brands/7.png"
                  alt=""
                />{" "}
              </a>
            </Slider>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="title1"> Trendy Products</h1>
          </div>
          <div className="list">
            <div className="newlinks">
              <a className="lists" href="/">
                All
              </a>
              <Link to="/furniture">
                {" "}
                <a className="list1" href="/">
                  {" "}
                  FURNITUE
                </a>{" "}
              </Link>
              <Link to="/decoration">
                <a className="list1" href="/">
                  DECARATION
                </a>
              </Link>
              <Link to="/lighting">
                {" "}
                <a className="list1" href="/">
                  LIGHTING
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Images;
