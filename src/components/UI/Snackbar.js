import { useState } from "react";

const Snackbar = () => {
  const [isHide, setHide] = useState(false);
  setTimeout(() => {
    setHide(true);
  }, 3000);
  const klasa = isHide ? "hide" : "show";
  const classes = `snackbar ${klasa}`;
  return <div className={classes}>Item successfully added</div>;
};

export default Snackbar;
