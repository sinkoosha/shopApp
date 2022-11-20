import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardCount } from "../../common/utils";
import {
  addToCard,
  removeToCard,
  productsCard,
} from "../../fetchers/prouduct/prouductsSlice";
function CardButton({ item }) {
  const dispatch = useDispatch();
  const cards = useSelector(productsCard);
  return (
    <>
      <div className="cardFooter">
        <button
          className={`cardBasketLink ${
            cardCount(item.id, cards) && "displayN"
          }`}
          href="#"
          onClick={() => dispatch(addToCard(item))}
        >
          ADD TO CARD
        </button>

        <div
          className={`CardBasketCount ${
            !cardCount(item.id, cards) && "displayN"
          }`}
        >
          <button
            href="#"
            className="BasketCountIcon"
            onClick={() => dispatch(removeToCard(item.id))}
          >
            -
          </button>
          <span className="BasketCountVal">
            {cardCount(item.id, cards)?.qty}
          </span>
          <button
            href="#"
            className="BasketCountIcon"
            onClick={() => dispatch(addToCard(item))}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default CardButton;
