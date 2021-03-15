import React from "react";
import Center from "../componentecommerce/Center";
import Images from "../componentecommerce/Images";
import Shopcategories from "../componentecommerce/Shopcategories";
import Payment from "../componentecommerce/Payment.js";
import Blogs from "../componentecommerce/Blogs";
import Trendproduct from "../componentecommerce/Trendproduct";
import Recentarrivalproducts from "../componentecommerce/Recentarrivalproducts.js";

function Data() {
  return (
    <div>
      <Center />
      <Images />
      <Trendproduct />
      <Shopcategories />
      <Recentarrivalproducts />
      <Payment />
      <Blogs />
    </div>
  );
}
export default Data;
