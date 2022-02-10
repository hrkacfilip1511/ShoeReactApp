import classes from "./Input.module.css";

function Input() {
  return (
    <div className={classes.input}>
      <span>Quantity: </span>
      <input type="number" min="1" max="4" step="1" />
    </div>
  );
}
export default Input;
