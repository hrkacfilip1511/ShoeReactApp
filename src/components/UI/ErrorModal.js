import classes from "./ErrorModal.module.css";
function ErrorModal(props) {
  return (
    <div className={classes.errorBackdrop} onClick={props.onClose}>
      <div className={classes.errorContainer}>
        <div className={classes.errorHeader}>
          <span>An error has occurred</span>
        </div>
        <div className={classes.errorMsg}>
          <p>{props.children}</p>
        </div>

        <div className={classes.closeErrorBtn}>
          <button type="button" onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
export default ErrorModal;
