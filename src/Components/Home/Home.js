import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import ProductsList from "../ProductsList/ProductsList";
import "./Home.scss";
import { useProducts } from "../../hoocks";

function Home() {
  const { data, isLoading } = useProducts();
  if (isLoading) return "loading...";

  const { products } = data;
  return (
    <>
      <Header />
      <div className="container">
        <ProductsList products={products} />
      </div>

      <Footer />
    </>
  );
}

export default Home;
