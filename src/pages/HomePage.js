import { Fragment } from "react";
import Header from "../components/Header/Header";
import Shoes from "../components/Shoes/Shoes";
import { useState } from "react";
import Cart from "../components/Cart/Cart";
import ErrorModal from "../components/UI/ErrorModal";

function HomePage() {
  const [isCartVisible, setCartVisibility] = useState(false);
  function showCartHandler() {
    setCartVisibility(true);
  }
  function hideCartHandler() {
    setCartVisibility(false);
  }
  return (
    <Fragment>
      {isCartVisible && <Cart onHideCart={hideCartHandler} />}

      <Header onShowCart={showCartHandler} />

      <Shoes />
    </Fragment>
  );
}

export default HomePage;
