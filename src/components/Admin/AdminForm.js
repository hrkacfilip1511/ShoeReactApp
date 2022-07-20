import { useState } from "react";

import classes from "./AdminForm.module.css";

const AdminForm = (props) => {
  const [urlImage, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const adminSubmitHandler = (e) => {
    e.preventDefault();

    const itemData = {
      picture: urlImage,
      name: title,
      price: +price,
    };

    props.onAddToFirebase(itemData);
    setTimeout(() => {
      setTitle("");
      setImageUrl("");
      setPrice("");
    }, 3500);
  };
  return (
    <div className={classes.adminForm}>
      <p className={classes.titleText}>Add Item to Firebase</p>

      <form onSubmit={adminSubmitHandler}>
        <div className={classes.image}>
          <label htmlFor="image">Image Url: </label>
          <input
            type="url"
            id="image"
            value={urlImage}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
          />
        </div>
        <div className={classes.title}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className={classes.price}>
          <label htmlFor="price">Price: </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className={classes.adminActions}>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AdminForm;
