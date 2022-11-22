import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  fetchSingleprouduct,
  singleProduct,
} from "../../fetchers/prouduct/prouductsSlice";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ProductSlider from "../ProductSlider/ProductSlider";
import "./SingleProduct.scss";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import CardButton from "../CrardButton/CardButton";

function SingleProduct() {
  const dispatch = useDispatch();
  const itemId = useLocation().state.id;
  console.log(itemId);
  useEffect(() => {
    dispatch(fetchSingleprouduct(itemId));
  }, []);
  const SingleProduct = useSelector(singleProduct);
  console.log("single", SingleProduct);
  return (
    <>
      <Header />
      <div className="container">
        <HeaderTitle title={SingleProduct.title} />
        <div className="containerP">
          <div className="productDetails">
            <div className="sectionBox">
              <div className="sectionTitle">
                <strong> TITLE</strong>
              </div>
              <div className="sectionTitle">
                {SingleProduct.title}
              </div>
            </div>
            <div className="sectionBox">
              <div className="sectionTitle">
                <strong> PRICE</strong>
              </div>
              <div className="sectionTitle">
                {SingleProduct.price}
              </div>
            </div>
            <div className="sectionBox">
              <div className="sectionTitle">
                <strong> description</strong>
              </div>
              <div className="sectionTitle">
                {SingleProduct.description}
              </div>
            </div>
            <div className="sectionBox">
              <CardButton item={SingleProduct} />
            </div>
          </div>
          <div className="productSlider">
            <ProductSlider
              images={SingleProduct.images}
              autoPlayp={false}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SingleProduct;
