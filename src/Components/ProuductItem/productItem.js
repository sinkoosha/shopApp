import React from "react";

import { Link } from "react-router-dom";
import { productsCard } from "../../fetchers/prouduct/prouductsSlice";
import { useDispatch, useSelector } from "react-redux";
import "./ProductItem.scss";

import CardButton from "../CrardButton/CardButton";

function ProuductItem({ item }) {
  const dispatch = useDispatch();
  const cards = useSelector(productsCard);

  return (
    <div className="Card">
      <div className="cardBody">
        <img src={item.thumbnail} className="cardBodyImage" />
        <h3 className="cardBodyTitle">{item.title}</h3>
        <div className="cardDiscountBox">
          <div className="cardDiscountBody">
            <span className="cardDisCountVal">{item.price}</span>
            <span className="cardDiscuntTitle">$</span>
          </div>
          <div className="cardDiscountBody">
            <span className="cardDisCountVal">
              <Link to={`/p/${item.id}`} state={{ id: item.id }}>
                {" "}
                SHOW MORE
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="cardFooter">
        <CardButton item={item} />
      </div>
    </div>
  );
}

export default ProuductItem;
