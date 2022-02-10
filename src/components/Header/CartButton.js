import { Fragment } from "react";
import classes from "./CartButton.module.css";
import { FaShoppingCart } from "react-icons/fa";
function CartButton(props) {
  return (
    <Fragment>
      <button className={classes.cartBtn} onClick={props.onClick}>
        <FaShoppingCart className={classes.icon} />
        <span>Cart</span>
        <span className={classes.quantity}>0</span>
      </button>
    </Fragment>
  );
}
export default CartButton;
