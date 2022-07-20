import { useContext, useState } from "react";
import CartContext from "../../Store/cart-context";
import classes from "./ItemShoe.module.css";
import ShoeForm from "./ShoeForm";

function ItemShoe(props) {
  const cartCtx = useContext(CartContext);
  const [shoesSize, setShoesSize] = useState(39);
  function addToCartHandler(amount) {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: amount,
      price: props.price,
      size: shoesSize,
    });
  }
  const shoesSizeHandler = (e) => {
    setShoesSize(e.target.value);
    console.log(e.target.value);
  };
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
      <div className={classes.shoesSize}>
        <span>Veličina tenisica: </span>
        <select onChange={shoesSizeHandler}>
          <option>39</option>
          <option>40</option>
          <option>41</option>
          <option>42</option>
          <option>43</option>
          <option>44</option>
          <option>45</option>
        </select>
      </div>
      <ShoeForm onAddToCart={addToCartHandler} />
    </div>
  );
}
export default ItemShoe;
