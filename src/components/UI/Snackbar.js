import { useState } from "react";

const Snackbar = () => {
  const [isHide, setHide] = useState(false);
  setTimeout(() => {
    setHide(true);
  }, 3000);
  const klasa = isHide ? "hide" : "show";
  const classes = `snackbar ${klasa}`;
  return <div className={classes}>Completed successfully</div>;
};

export default Snackbar;
