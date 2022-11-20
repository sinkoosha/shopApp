import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchproductCat,
  productCat,
  removeProductCat,
} from "../../fetchers/prouduct/prouductsSlice";
import ProductsList from "../ProductsList/ProductsList";
import HeaderTitle from "../HeaderTitle/HeaderTitle";

function ProductCat() {
  const item = useLocation().state.item;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchproductCat(item));
    return () => {
      dispatch(removeProductCat());
    };
  }, [item]);
  const pCat = useSelector(productCat);
  console.log(pCat);
  return (
    <>
      <Header />

      <div className="container">
        <HeaderTitle title={item} />
        <ProductsList products={pCat} />
      </div>

      <Footer />
    </>
  );
}

export default ProductCat;
