import React from "react";

const Cards = ({ product, handleClick }) => {
  const { name, price, img } = product;
  return (
    <div className="product-item">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-title">
        <h2>{name}</h2>
        <h4>{price}</h4>
      </div>
      <div className="product-add-to-cart">
        <a href="#" onClick={() => handleClick(product)}>Add to Cart</a>
      </div>
    </div>

  );
};

export default Cards;