import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

function Checkout(props) {
  const inputNameRef = useRef();
  const inputPhoneRef = useRef();
  const inputStreetRef = useRef();
  const inputCityRef = useRef();
  const [inputsValidity, setInputsValidity] = useState({
    name: true,
    phone: true,
    street: true,
    city: true,
  });
  const errorTxt = (value) => value.trim() === "";
  function submitOrderHandler(e) {
    e.preventDefault();

    const enteredName = inputNameRef.current.value;
    const enteredPhone = inputPhoneRef.current.value;
    const enteredStreet = inputStreetRef.current.value;
    const enteredCity = inputCityRef.current.value;

    const enteredNameValidator = !errorTxt(enteredName);
    const enteredPhoneValidator = !errorTxt(enteredPhone);
    const enteredStreetValidator = !errorTxt(enteredStreet);
    const enteredCityValidator = !errorTxt(enteredCity);

    setInputsValidity({
      name: enteredNameValidator,
      phone: enteredPhoneValidator,
      street: enteredStreetValidator,
      city: enteredCityValidator,
    });
    if (
      enteredNameValidator &&
      enteredPhoneValidator &&
      enteredStreetValidator &&
      enteredCityValidator
    ) {
      props.onCheckout({
        name: enteredName,
        phone: enteredPhone,
        street: enteredStreet,
        city: enteredCity,
      });
    }
  }
  return (
    <form onSubmit={submitOrderHandler} className={classes.submissionForm}>
      <div
        className={`${classes.checkoutForm}  ${
          inputsValidity.street ? "" : classes.errorInput
        } `}
      >
        <label>Your Name: </label>
        <input type="text" ref={inputNameRef} />
      </div>
      {!inputsValidity.name && (
        <p className={classes.errorTxt}>Enter valid name.</p>
      )}
      <div
        className={`${classes.checkoutForm}  ${
          inputsValidity.street ? "" : classes.errorInput
        } `}
      >
        <label>Your Phone: </label>
        <input type="text" ref={inputPhoneRef} />
      </div>
      {!inputsValidity.phone && (
        <p className={classes.errorTxt}>Enter valid phone number.</p>
      )}
      <div
        className={`${classes.checkoutForm}  ${
          inputsValidity.street ? "" : classes.errorInput
        } `}
      >
        <label>Your Street: </label>
        <input type="text" ref={inputStreetRef} />
      </div>
      {!inputsValidity.street && (
        <p className={classes.errorTxt}>Enter valid street.</p>
      )}
      <div
        className={`${classes.checkoutForm}  ${
          inputsValidity.street ? "" : classes.errorInput
        } `}
      >
        <label>Your City: </label>
        <input type="text" ref={inputCityRef} />
      </div>
      {!inputsValidity.city && (
        <p className={classes.errorTxt}>Enter valid city.</p>
      )}
      <div className={classes.actionBtns}>
        <button
          type="button"
          onClick={props.onClose}
          className={classes.clsBtn}
        >
          Close
        </button>
        <button className={classes.orderBtn}>Confirm</button>
      </div>
    </form>
  );
}

export default Checkout;
