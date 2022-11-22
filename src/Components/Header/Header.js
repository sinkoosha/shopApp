import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useCategories } from "../../hoocks";
import profile from "../../image/profile.png";
import "./Header.scss";
import Conveyer from "@egjs/conveyer";
import search from "../../img/Search.png";
import logo from "../../img/Logo.png";
import home from "../../img/Home.png";
import { useSelector } from "react-redux";
import { productsCard } from "../../fetchers/prouduct/prouductsSlice";
import { cardQty } from "../../common/utils";

function Header() {
  const { data, isLoading } = useCategories();
  const [scrollStatus, setScrollStatus] = useState({
    isDown: false,
    startX: null,
    scrollLeft: null,
    pageX: null,
  });
  // const cardsString = localStorage.getItem("cards");
  // const pCard = JSON.parse(cardsString);
  const pCard = useSelector(productsCard);

  const catBoxRef = useRef();
  const handelMouseLeave = () => {
    setScrollStatus({
      ...scrollStatus,
      isDown: false,
    });
  };
  const handelMouseDown = (e) => {
    setScrollStatus({
      ...scrollStatus,
      isDown: true,
      startX: e.clientX - catBoxRef.current.offsetLeft,
      scrollLeft: catBoxRef.current.scrollLeft,
    });
  };
  const handelMouseMove = (e) => {
    if (!scrollStatus.isDown) return;
    e.preventDefault();

    const x = e.clientX - catBoxRef.current.offsetLeft;
    const walk = (x - scrollStatus.startX) * 3;
    catBoxRef.current.scrollLeft =
      scrollStatus.scrollLeft - walk;
  };
  const handelMouseUp = () => {
    setScrollStatus({
      ...scrollStatus,
      isDown: false,
    });
  };

  return (
    <>
      <header class="MUPRA_header">
        <div class="mainHeader">
          <div class="logo">
            <h1>SHOPING APP</h1>
            <div class="MUPRA_Basket_Mobile">
              <button>
                <Link to="/cards">
                  BASKET<span>{cardQty(pCard)}</span>{" "}
                </Link>
              </button>
            </div>
          </div>

          <div class="MUPRA_Main_menu">
            <nav class="MUPRA_Menu_TOP">
              <ul>
                <li>
                  <a href="index.html" class="active">
                    <img src={home} />
                  </a>
                </li>
                <li>
                  <a href="#">HOME</a>
                </li>
                <li>
                  <a href="#">ABOUT US</a>
                </li>
              </ul>
              <ul class="MUPRA_MENU_LS">
                <li>
                  <a href="#">
                    {" "}
                    <img src={search} />
                    Search
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    {/* <img /> */}
                    Login
                  </a>
                </li>
              </ul>
            </nav>
            <nav class="MUPRA_Menu_BUTTON">
              <ul
                class="Main_Menu catBox"
                ref={catBoxRef}
                onMouseDown={handelMouseDown}
                onMouseLeave={handelMouseLeave}
                onMouseUp={handelMouseUp}
                onMouseMove={handelMouseMove}
              >
                {!isLoading ? (
                  data?.map((item, index) => (
                    <li className="catItem">
                      <Link
                        to={`/cats/${item}`}
                        state={{ item }}
                      >
                        {item}
                      </Link>
                    </li>
                  ))
                ) : (
                  <p>Loading...</p>
                )}
              </ul>
            </nav>
          </div>
          <div class="MUPRA_Basket">
            <button>
              <Link to="/cards">
                BASKET<span>{cardQty(pCard)}</span>{" "}
              </Link>
            </button>
          </div>
        </div>
      </header>

      {/* <div className="header">
        <div className="logo">
          <Link to="/">
            <h1>SHOPING APP</h1>
          </Link>
        </div>
        <div className="profile">
          <img src={profile} className="HeaderProfileImage" />
        </div>

        <div className="catBar">
          <div
            className="catBox"
            ref={catBoxRef}
            onMouseDown={handelMouseDown}
            onMouseLeave={handelMouseLeave}
            onMouseUp={handelMouseUp}
            onMouseMove={handelMouseMove}
          >
            {!isLoading ? (
              data?.map((item, index) => (
                <div className="catItem">
                  <Link to={`/cats/${item}`} state={{ item }}>
                    {item}
                  </Link>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Header;
