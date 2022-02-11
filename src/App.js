import "./App.css";

import Header from "./components/Header/Header";
import Shoes from "./components/Shoes/Shoes";
import Cart from "./components/Cart/Cart";
import React, { useState } from "react";
import CartProvider from "./Store/CartProvider";
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
    <CartProvider>
      {isCartVisible && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Shoes />
    </CartProvider>
  );
}

export default App;
