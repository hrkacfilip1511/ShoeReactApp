import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./ShoeForm.module.css";
import { useRef, useState } from "react";
function ShoeForm(props) {
  const inputRef = useRef();
  const [isValidInput, setIsValid] = useState(true);
  function submitFormHandler(event) {
    event.preventDefault();
    const enteredAmount = inputRef.current.value;
    const enteredNumAmount = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredNumAmount < 1 ||
      enteredNumAmount > 4
    ) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    props.onAddToCart(enteredNumAmount);
  }
  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <Input
        ref={inputRef}
        label="Quantity: "
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "4",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button />
      {!isValidInput && (
        <p className={classes.errorMsg}>Insert value between 1-4, please.</p>
      )}
    </form>
  );
}
export default ShoeForm;
