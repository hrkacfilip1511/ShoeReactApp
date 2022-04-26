import { Fragment } from "react";
import Header from "../components/Header/Header";
import Shoes from "../components/Shoes/Shoes";
import { useState, useContext } from "react";
import Cart from "../components/Cart/Cart";
import AdminContext from "../Store/admin-auth-context";
import AuthContext from "../Store/auth-context";
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
function HomePage() {
  const [isCartVisible, setCartVisibility] = useState(false);
  const adminCtx = useContext(AdminContext);
  const authCtx = useContext(AuthContext);

  console.log("Admin je logiran ", adminCtx.isLoggedIn);
  console.log("User je logiran", authCtx.isLoggedIn);
  // const firebaseApp = initializeApp({
  //   apiKey: "AIzaSyB4TFYGx_i1fP9rC0RkvQrpVFSYynM8HJE",
  //   authDomain: "shoe-shop-9bf1d.firebaseapp.com",
  //   databaseURL:
  //     "https://shoe-shop-9bf1d-default-rtdb.europe-west1.firebasedatabase.app/",
  //   projectId: "shoe-shop-9bf1d",
  //   storageBucket: "shoe-shop-9bf1d.appspot.com",
  //   messagingSenderId: "6974965138",
  // });
  // const auth = getAuth(firebaseApp);
  // const db = getFirestore(firebaseApp);
  // console.log(auth);

  // firebaseApp.auth().onAuthStateChanged((user) => {
  //   if (user) {
  //     const { currentUser } = firebaseApp.auth();
  //     console.log(currentUser);
  //   }
  // });
  // console.log(auth);
  // const authCtx = useContext(AuthContext);
  // const adminCtx = useContext(AdminContext);

  // console.log("obicni user", authCtx.isLoggedIn);
  // console.log("user admin", adminCtx.isLoggedIn);
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
