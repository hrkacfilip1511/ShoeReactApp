import { Fragment } from "react";
import Header from "../components/Header/Header";
import Shoes from "../components/Shoes/Shoes";
import { useState, useContext } from "react";
import Cart from "../components/Cart/Cart";
import ErrorModal from "../components/UI/ErrorModal";
import AuthContext from "../Store/auth-context";
import AdminContext from "../Store/admin-auth-context";

function HomePage() {
  const [isCartVisible, setCartVisibility] = useState(false);
  const authCtx = useContext(AuthContext);
  const adminCtx = useContext(AdminContext);

  console.log("obicni user", authCtx.isLoggedIn);
  console.log("user admin", adminCtx.isLoggedIn);
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
