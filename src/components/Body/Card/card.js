import React from "react";

const Cards = ({ item, handleClick }) => {
  const { title, price, img } = item;
  return (
    <div className="product-item">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-title">
        <h2>{title}</h2>
        <h4>{price}</h4>
      </div>
      <div className="product-add-to-cart">
        <a href="#" onClick={() => handleClick(item)}>Add to Cart</a>
      </div>
    </div>

  );
};

export default Cards;