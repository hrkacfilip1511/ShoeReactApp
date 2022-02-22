import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./ShoeForm.module.css";
import { useRef, useState } from "react";
import Sizes from "../UI/Sizes";

const shoeNum = [
  { size: 40 },
  { size: 41 },
  { size: 42 },
  { size: 43 },
  { size: 44 },
  { size: 45 },
  { size: 46 },
];
function ShoeForm(props) {
  const inputRef = useRef();
  const sizeRef = useRef();
  const [isValidInput, setIsValid] = useState(true);
  const eachNum = shoeNum.map((num) => (
    <div className={classes.option}>
      <Sizes ref={sizeRef} key={num.size} size={num.size} />
    </div>
  ));
  function submitFormHandler(event) {
    event.preventDefault();
    const enteredSize = sizeRef.current.value;
    const enteredSizeNum = +enteredSize;
    console.log(enteredSizeNum);
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
      {eachNum}
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
