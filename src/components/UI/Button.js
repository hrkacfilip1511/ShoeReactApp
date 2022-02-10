import { FaCartPlus } from "react-icons/fa";
import classes from "./Button.module.css";
function Button() {
  return (
    <button className={classes.button}>
      <FaCartPlus className={classes.icon} />
      <span className={classes.addText}>Add to Cart</span>
    </button>
  );
}
export default Button;
