import React from "react";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import {
  addToCard,
  removeToCard,
  productsCard,
} from "../../fetchers/prouduct/prouductsSlice";
import "./CardPage.scss";
import CardButton from "../CrardButton/CardButton";
function CardPage() {
  const pCard = useSelector(productsCard);

  const somePrice = (data) => {
    let price = 0;
    data.map((item) => {
      price = price + item.price * item.qty;
    });

    return price;
  };

  return (
    <div>
      <Header />
      <div className="container">
        <HeaderTitle title="CARDS" />
        <div className="containerC">
          <div className="cardBox">
            {pCard.map((item) => (
              <div className="cardSection">
                <div className="CardImage">
                  <img
                    className="cardImage"
                    src={item.thumbnail}
                  />
                </div>
                <div className="cardDescription">
                  <p>{item.title}</p>
                  <p>{item.price}$</p>
                  <CardButton item={item} />
                </div>
              </div>
            ))}
          </div>
          <div className="calcCard">
            <div className="calcItem">
              <div>price</div>
              <div>{somePrice(pCard)}$</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CardPage;
