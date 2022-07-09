import React, { useState, useEffect } from "react";
import Body from "./components/Body/body";
import Navbar from "./components/Navbar/navbar";
import Cart from "./components/Body/Cart/cart";
import list from "./data";
import { shops } from "./data";


const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleClickShop = (item) => {
    console.log(list.find(x => x.id = item.id));
    return list.find(x => x.id = item.id);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  useEffect(() => {
    console.log("cart change");
  }, [cart]);

  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Body list={list} shops={shops} handleClick={handleClick} handleClickShop={handleClickShop}/>
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </React.Fragment>
  );
};

export default App;