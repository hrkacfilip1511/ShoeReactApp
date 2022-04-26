import { useContext } from "react";
import classes from "./CartButton.module.css";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../../Store/cart-context";
function CartButton(props) {
  const cartCtx = useContext(CartContext);

  const numberOfItemInCart = cartCtx.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);
  return (
    <button className={classes.cartBtn} onClick={props.onClick}>
      <FaShoppingCart className={classes.icon} />
      <span>Cart</span>
      <span className={classes.quantity}>{numberOfItemInCart}</span>
    </button>
  );
}
export default CartButton;
