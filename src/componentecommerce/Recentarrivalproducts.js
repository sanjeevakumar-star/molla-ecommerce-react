import React from "react";
import Recentarrival from "../componentecommerce/Recentarrival";

function Recentarrivalproducts() {
  return (
    <div className=" container">
      <div className="homerow">
        <div className="row">
          <div className="col-lg-3 ">
            <Recentarrival
              id="1"
              image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-1-2.jpg"
              title="Seater-2 sitting"
              price={(111)}
              quantity={0}
              amount={111}
            />
          </div>
          <div className="col-lg-3">
            <Recentarrival
              id="2"
              title="Carronade table lamp"
              price={(232)}
              image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-6-2.jpg"
              quantity={0}
              amount={232}
            />
          </div>
          <div className="col-lg-3">
            <Recentarrival
              id="3"
              title="Block Side Table/Trolly"
              price={(199)}
              image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-2-2.jpg"
              quantity={0}
              amount={199}

            />
          </div>

          <div className="col-lg-3">
            <Recentarrival
              id="4"
              title="Flow Slim Armchair"
              price={(291)}
              image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-8-2.jpg"
              quantity={0}
              amount={291}

            />
          </div>

          <div className="col-lg-3">
            <Recentarrival
              id="5"
              title="Buttler stool lader"
              price={(309)}
              image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-3-2.jpg"
              quantity={0}
              amount={309}

            />
          </div>
          <div className="col-lg-3">
            <Recentarrival
              id="6"
              title="Cushion Set 3 Pieces"
              price={(149)}
              image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-7-2.jpg"
              quantity={0}
              amount={149}

            />
          </div>

          <div className="col-lg-3">
            <Recentarrival
              id="7"
              title="Large suspension LAMP"
              price={(212)}
              image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-5-2.jpg"
              quantity={0}
              amount={212}

            />
          </div>
          <div className="col-lg-3">
            <Recentarrival
              id="8"
              title="Garden chair"
              price={(220)}
              image="https://d-themes.com/react/molla/demo-2/assets/images/products/shop/product-10-2.jpg"
              quantity={0}
              amount={220}

            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Recentarrivalproducts;
