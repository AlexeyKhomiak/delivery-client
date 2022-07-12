import React, { useState, useEffect } from "react";
import "./cart.css";


const Cart = ({ cart, setCart, handleChange, saveOrder }) => {
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const saveData = () => {
    if (name === "" || email === "" || phone === "" || address === "") {
      alert("Форма заказа не заполнена!");
    } else if (cart.length === 0) {
      alert("Товар не добавлен!");
    } else {
      saveOrder(name, email, phone, address, price, cart);
    }
  }

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <div>
      <div className="shop-wrap cart-page">
        <div className="shop-menu">
          <div className="form">
            <label>Name:</label>
            <input type="text" onChange={(event) => { setName(event.target.value) }} />
            <label>Email:</label>
            <input type="text" onChange={(event) => { setEmail(event.target.value) }} />
            <label>Phone:</label>
            <input type="text" onChange={(event) => { setPhone(event.target.value) }} />
            <label>Address:</label>
            <input type="text" onChange={(event) => { setAddress(event.target.value) }} />
          </div>
        </div>
        <div className="shop-content">
          <div className="product-grid">
            {cart.map((item) => (
              <div className="product-item" key={item.id}>
                <div className="product-img">
                  <img src={item.img} alt="" />
                </div>
                <div className="productrightside">
                  <div className="product-title">
                    <h2>{item.title}</h2>
                  </div>
                  <div className="product-price">
                    Price: {item.price}
                  </div>
                  <button onClick={() => handleRemove(item.id)}>Remove</button>
                  <div className="product-add-to-cart">
                    <button className="btn-count" onClick={() => handleChange(item, -1)}>-</button>
                    <button className="btn-count">{item.amount}</button>
                    <button className="btn-count" onClick={() => handleChange(item, 1)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="total-price-line">
        <div className="total-price-wrap">
          <div className="total-price">
            Total price: {price}
          </div>
        </div>
        <div className="submit">
          <button onClick={saveData}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;