import React from "react";
import classes from "./Sizes.module.css";

const Sizes = React.forwardRef((props, ref) => {
  return (
    <div className={classes.sizes}>
      <span ref={ref} className={classes.spanSize}>
        {props.size}
      </span>
    </div>
  );
});
export default Sizes;
