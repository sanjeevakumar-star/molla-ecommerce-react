import React from "react";
import ReactTabscss from "../background/ReactTabs.css";
import { Tab } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";

import Lightings from "../components/Lightings";
import Recentarrivalproducts from "../componentecommerce/Recentarrivalproducts.js";
import DecorationProducts from "../components/DecorationProducts";
import FurnituresProducts from "../components/furnitures_products";
function ReactTabs() {
  return (
    <div className="container">
      <div className="Listofproducts">
        <h1 className="product_list">List</h1>
        <h6 className="product_lis">shop</h6>
      </div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Nav className="flex-clumn ">
          <Nav.Item>
            <Nav.Link to="/allproducts" eventKey="first" className="description">
            All Products
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link to="/#furniture" eventKey="second" className="description">
              Funiture
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link to="/#Lighting" eventKey="three" className="description">
              Lighting
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link to="/#Decoration" eventKey="four" className="description">
              Decoration
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link to="/#Toys" eventKey="five" className="description">
              Toys
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content className="typeof">
          <Tab.Pane className="typeof" eventKey="first">
            <Recentarrivalproducts />
          </Tab.Pane>

          <Tab.Pane className="typeof" eventKey="second">
            <FurnituresProducts />
          </Tab.Pane>

          <Tab.Pane className="typeof" eventKey="three">
            <Lightings />
          </Tab.Pane>

          <Tab.Pane className="typeof" eventKey="four">
            <DecorationProducts />
          </Tab.Pane>

          <Tab.Pane className="typeof" eventKey="five">
            <h2 className="toys">No Toys in this section</h2>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}
export default ReactTabs;
