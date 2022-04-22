import { useRef } from "react";
import classes from "./AdminForm.module.css";

const AdminForm = (props) => {
  const urlInputRef = useRef();
  const titleInputRef = useRef();
  const priceInputRef = useRef();
  const adminSubmitHandler = (e) => {
    e.preventDefault();
    let enteredImageUrl = urlInputRef.current.value;
    let enteredTitle = titleInputRef.current.value;
    let enteredPrice = priceInputRef.current.value;

    const itemData = {
      picture: enteredImageUrl,
      name: enteredTitle,
      price: +enteredPrice,
    };

    props.onAddToFirebase(itemData);
    // enteredImageUrl = "";
    // enteredTitle = "";
    // enteredPrice = "";
  };
  return (
    <div className={classes.adminForm}>
      <p className={classes.titleText}>Add Item to Firebase</p>

      <form onSubmit={adminSubmitHandler}>
        <div className={classes.image}>
          <label htmlFor="image">Image Url: </label>
          <input type="url" id="image" ref={urlInputRef} />
        </div>
        <div className={classes.title}>
          <label htmlFor="title">Title: </label>
          <input type="text" id="title" ref={titleInputRef} />
        </div>
        <div className={classes.price}>
          <label htmlFor="price">Price: </label>
          <input type="number" id="price" ref={priceInputRef} />
        </div>
        <div className={classes.adminActions}>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AdminForm;
