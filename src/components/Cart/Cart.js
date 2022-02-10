import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
function Cart(props) {
  return (
    <Modal onHideCart={props.onHideCart}>
      <div className={classes.totalPrice}>
        <span>Total Price:</span>
        <span>0.00 KM</span>
      </div>
      <div className={classes.buttons}>
        <button className={classes.clsBtn} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.ordBtn}>Order</button>
      </div>
    </Modal>
  );
}
export default Cart;
