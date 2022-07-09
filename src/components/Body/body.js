import React from "react";
import Cards from "./Card/card";
import Shop from "./Shop/shop";
import "./body.css";

const Body = ({ list, shops, handleClick, handleClickShop }) => {
  return (
    <div className="shop-wrap shop-wrap-prod">
      <div className="shop-menu">
        <div className="header">Shops:</div>
        <ul>
          {shops.map(item => (
            <Shop key={item.id} item={item} handleClickShop={handleClickShop} />
          ))}
        </ul>
      </div>
      <div className="shop-content shop-wrap-prod">
        <div className="product-grid">
          {list.map((item) => (
            <Cards key={item.id} item={item} handleClick={handleClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;