import classes from "./CartItem.module.css";

function CartItem(props) {
  const price = `${props.price.toFixed(2)} KM`;
  return (
    <div className={classes.all}>
      <div className={classes.cartItems}>
        <div className={classes.titlePrices}>
          <h3>{props.name}</h3>
          <h4>{price}</h4>
          <div className={classes.shoeSize}>
            <span>Veličina: </span>
            <span>{props.size}</span>
          </div>
        </div>
        <div className={classes.quantity}>
          <button onClick={props.onDecrease}>-</button>
          <span>{props.amount}</span>
          <button onClick={props.onIncrease}>+</button>
        </div>
      </div>
      <div className={classes.divider}></div>
    </div>
  );
}
export default CartItem;
