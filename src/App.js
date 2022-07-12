import React, { useState, useEffect } from "react";
import Body from "./components/Body/body";
import Navbar from "./components/Navbar/navbar";
import Cart from "./components/Body/Cart/cart";
import axios from "axios";


const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [shops, setShop] = useState([]);
  const [products, setProducts] = useState([]);

  const handleClick = (prod) => {
    if (cart.indexOf(prod) !== -1) return;
    prod.amount += 1;
    setCart([...cart, prod]);
  };

  const handleClickShop = (shopId) => {
    // console.log(shopId);
    axios.get(`https://radiant-depths-71519.herokuapp.com/api/shop/${shopId}`)
      .then(res => {
        //console.log(res.data);
        setProducts(res.data.filter(x => x.shop_id === shopId));
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  const saveOrder = (name, email, phone, address, sum, cart) => {
    axios.post(`https://radiant-depths-71519.herokuapp.com/api/order/`,
      {
        "name": name,
        "email": email,
        "phone": phone,
        "address": address,
        "sum": sum,
        "cart": cart
      })
      .then(res => {
        console.log(res.data);
        alert("Заказ оформлен!");
        setCart([]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios.get("https://radiant-depths-71519.herokuapp.com/api/shop/")
      .then(res => {
        //console.log(res.data);
        setShop(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    if (products.length === 0) {
      axios.get(`https://radiant-depths-71519.herokuapp.com/api/products/`)
        .then(res => {
          //console.log(res.data);
          setProducts(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
    //console.log("cart change");
  }, [cart]);

  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Body products={products} shops={shops} handleClick={handleClick} handleClickShop={handleClickShop} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} saveOrder={saveOrder} />
      )}
    </React.Fragment>
  );
};

export default App;