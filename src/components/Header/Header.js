import { Fragment } from "react";
import CartButton from "./CartButton";
import classes from "./Header.module.css";
function Header(props) {
  return (
    <Fragment>
      <div className={classes.header}>
        <CartButton onClick={props.onShowCart} />
      </div>
      <div className={classes.bgImg}></div>
    </Fragment>
  );
}

export default Header;
