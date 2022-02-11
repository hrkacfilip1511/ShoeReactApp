import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
function Cart(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)} KM`;
  const cartIsEmpty = cartCtx.items.length > 0;

  function addItemByOne(item) {
    console.log(item);
    cartCtx.addItem({ ...item, amount: 1 });
  }
  function removeItemByOne(id) {
    cartCtx.removeItem(id);
  }
  const itemsInCart = (
    <ul className={classes.listItems}>
      {cartCtx.items.map((item) => (
        <li>
          <CartItem
            key={item.id}
            name={item.title}
            amount={item.amount}
            price={item.price}
            onDecrease={removeItemByOne.bind(null, item.id)}
            onIncrease={addItemByOne.bind(null, item)}
          />
        </li>
      ))}
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {itemsInCart}
      <div className={classes.totalPrice}>
        <span>Total Price:</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.buttons}>
        <button className={classes.clsBtn} onClick={props.onHideCart}>
          Close
        </button>
        {cartIsEmpty && <button className={classes.ordBtn}>Order</button>}
      </div>
    </Modal>
  );
}
export default Cart;
