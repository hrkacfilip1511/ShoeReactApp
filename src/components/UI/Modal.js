import ReactDom from "react-dom";
import { Fragment } from "react";
import classes from "./Modal.module.css";
function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onHideCart}></div>;
}

function ModalOverlays(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}
const portals = document.getElementById("overlays");
function Modal(props) {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onHideCart={props.onHideCart} />,
        portals
      )}
      {ReactDom.createPortal(
        <ModalOverlays>{props.children}</ModalOverlays>,
        portals
      )}
    </Fragment>
  );
}

export default Modal;
