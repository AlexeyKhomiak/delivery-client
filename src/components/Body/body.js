import React from "react";
import Cards from "./Card/card";
import Shop from "./Shop/shop";
import "./body.css";

const Body = ({ products, shops, handleClick, handleClickShop }) => {
  return (
    <div className="shop-wrap shop-wrap-prod">
      <div className="shop-menu">
        <div className="header">Shops:</div>
        <ul>
          {shops.map(shop => (
            <Shop key={shop.id} shop={shop} handleClickShop={handleClickShop} />
          ))}
        </ul>
      </div>
      <div className="shop-content shop-wrap-prod">
        <div className="product-grid">
          {products.map((product) => (
            <Cards key={product.id} product={product} handleClick={handleClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;