import React from "react";
import { useSelector } from "react-redux";
import { allProducts } from "../../fetchers/prouduct/prouductsSlice";
import ProuductItem from "../ProuductItem/productItem";
import "./ProductsList.scss";
function ProductsList(props) {
  const { products } = props;

  return (
    <div className="boxes">
      {products?.map((item) => (
        <ProuductItem item={item} />
      ))}
    </div>
  );
}

export default ProductsList;
