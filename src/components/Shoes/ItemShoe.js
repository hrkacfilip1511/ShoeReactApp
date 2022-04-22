import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import classes from "./ItemShoe.module.css";
import ShoeForm from "./ShoeForm";

function ItemShoe(props) {
  const cartCtx = useContext(CartContext);
  function addToCartHandler(amount) {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: amount,
      price: props.price,
    });
  }

  return (
    <div className={classes.shoes}>
      <div className={classes.overview}>
        <div className={classes.pic}>
          <img src={props.picture} alt={props.title} />
        </div>
        <div className={classes.about}>
          <h3>{props.title}</h3>
          <h4 className={classes.price}>{props.price} KM</h4>
        </div>
      </div>

      <ShoeForm onAddToCart={addToCartHandler} />
    </div>
  );
}
export default ItemShoe;
