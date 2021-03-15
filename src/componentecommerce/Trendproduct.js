import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Recent from "./Recent";

function Trendproduct(props) {
  var settings = {
    dots: true,
    infinite: false,

    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Slider className="container product1 " {...settings}>
            <Recent
              id="1"
              image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-1-2.jpg"
              title="Seater-2 sitting"
              price={111.0}
              quantity = {0}
              amount={0}
            />

            <Recent
              id="2"
              title="Sarronade table lamp"
              price={220.0}
              image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-6-2.jpg"
              quantity={0}
              amount={0}
            />

            <Recent
              id="3"
              title="Block Side Table/Trolly"
              price={199.0}
              image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-2-2.jpg"
              quantity={0}
              amount={0}
            />

            <Recent
              id="4"
              title="Flow Slim Armchair"
              price={299.1}
              image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-8-2.jpg"
              quantity={0}
              amount={0}
            />

            <Recent
              id="5"
              title="buttler stool lader"
              price={309.0}
              image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-3-2.jpg"
              quantity={0}
              amount={0}
            />
            <Recent
              id="6"
              title="Buttler stool lader"
              price={109.0}
              image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-3-2.jpg"
              quantity={0}
            />
            <Recent
              id="7"
              title="Large suspension LAMP"
              price={211.0}
              image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-5-2.jpg"
              quantity="0"
              amount={0}
            />
            <Recent
              id="8"
              title="Garden chair"
              price={212.0}
              image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-10-2.jpg"
              quantity={0}
              amount={0}
            />
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default Trendproduct;
