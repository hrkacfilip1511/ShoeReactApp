import { Fragment } from "react";
import CartButton from "./CartButton";
import classes from "./Header.module.css";
function Header(props) {
  return (
    <Fragment>
      <div className={classes.header}>
        {/* <div className={classes.title}>
          <span className={classes.dot}></span>
          <span className={classes.titleSpan}>
            Shoe<span className={classes.letterO}>O</span>p
          </span>
        </div> */}
        <CartButton onClick={props.onShowCart} />
      </div>
      <div className={classes.bgImg}></div>
    </Fragment>
  );
}

export default Header;
