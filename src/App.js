import "./App.css";
import { Fragment } from "react";
import Header from "./components/Header/Header";
import Shoes from "./components/Shoes/Shoes";
import Cart from "./components/Cart/Cart";
import React, { useState } from "react";
function App() {
  const [isCartVisible, setCartVisibility] = useState(false);
  function showCartHandler() {
    setCartVisibility(true);
  }
  function hideCartHandler() {
    setCartVisibility(false);
  }
  console.log(!isCartVisible);
  return (
    <Fragment>
      {isCartVisible && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Shoes />
    </Fragment>
  );
}

export default App;
