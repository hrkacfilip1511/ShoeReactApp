import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import classes from "./ItemShoe.module.css";
import ShoeForm from "./ShoeForm";

const shoeNum = [
  { size: 40 },
  { size: 41 },
  { size: 42 },
  { size: 43 },
  { size: 44 },
  { size: 45 },
  { size: 46 },
];

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
  const eachNum = shoeNum.map((num) => (
    <div className={classes.option}>{num.size}</div>
  ));
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
      <div className={classes.size}>{eachNum}</div>
      <ShoeForm onAddToCart={addToCartHandler} />
    </div>
  );
}
export default ItemShoe;
