import { Fragment, useContext, useState } from "react";
import AuthContext from "../../Store/auth-context";
import CartContext from "../../Store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
function Cart(props) {
  const [isCheckoutForm, setCheckoutForm] = useState(false);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const cartCtx = useContext(CartContext);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)} KM`;
  const cartIsEmpty = cartCtx.items.length > 0;
  const [isSubmitting, setSubmitting] = useState(false);
  const [isSubmited, setSubmited] = useState(false);
  function addItemByOne(item) {
    console.log("aa", totalAmount);
    cartCtx.addItem({ ...item, amount: 1 });
  }
  function removeItemByOne(id) {
    cartCtx.removeItem(id);
  }
  function showCheckoutForm() {
    setCheckoutForm(true);
  }
  async function submitOrder(orderData) {
    setSubmitting(true);
    await fetch(
      "https://shoe-shop-9bf1d-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: orderData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setSubmitting(false);
    setSubmited(true);
    cartCtx.clearCart();
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
  const modalActions = (
    <div className={classes.buttons}>
      <button className={classes.clsBtn} onClick={props.onHideCart}>
        Close
      </button>
      {cartIsEmpty && isLoggedIn && (
        <button className={classes.ordBtn} onClick={showCheckoutForm}>
          Order
        </button>
      )}
    </div>
  );
  const cartContent = (
    <Fragment>
      {itemsInCart}
      <div className={classes.totalPrice}>
        <span>Total Price:</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckoutForm && (
        <Checkout onCheckout={submitOrder} onClose={props.onHideCart} />
      )}
      {!isCheckoutForm && modalActions}
    </Fragment>
  );

  const successfulSubmit = (
    <Fragment>
      <p className={classes.successText}>
        You have successfully sent your order.
      </p>
      <div className={classes.buttons}>
        <button className={classes.clsBtn} onClick={props.onHideCart}>
          Close
        </button>
      </div>
    </Fragment>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {!isSubmitting && !isSubmited && cartContent}
      {!isSubmitting && isSubmited && successfulSubmit}
    </Modal>
  );
}
export default Cart;
