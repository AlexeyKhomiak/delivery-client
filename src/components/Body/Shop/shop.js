import React from "react";
import "./shop.css";

const Shop = ({ item, handleClickShop }) => {
  const { Name } = item;
  return (
    <li>
      <a href="#" onClick={() => handleClickShop(item)}>{Name}</a>
    </li>
  );
};

export default Shop;