import { Fragment } from "react";
import classes from "./ShoesStory.module.css";

function ShoesStory() {
  return (
    <Fragment>
      <div className={classes.story}>
        <p className>We are the new one here.</p>
        <p>Check out the coolest models, only in our Shop. </p>
        <p className={classes.moto}>Be a part of our fairy tale</p>
      </div>
    </Fragment>
  );
}
export default ShoesStory;
