import React from "react";
import "./shop.css";

const Shop = ({ shop, handleClickShop }) => {
  return (
    <li>
      <a href="#" onClick={() => handleClickShop(shop.id)}>{shop.name}</a>
    </li>
  );
};

export default Shop;