import { useEffect, useState } from "react";

import Card from "../UI/Card";
import ItemShoe from "./ItemShoe";
import classes from "./ShoeItems.module.css";
import { FaSpinner } from "react-icons/fa";
import ErrorModal from "../UI/ErrorModal";
import { Fragment } from "react";

function ShoeItems() {
  const [shoes, setShoes] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://shoe-shop-9bf1d-default-rtdb.europe-west1.firebasedatabase.app/shoes.json"
    )
      .then((response) => {
        setLoading(false);

        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        const loadedShoes = [];
        for (const key in data) {
          loadedShoes.push({
            id: key,
            name: data[key].name,
            price: data[key].price,
            picture: data[key].picture,
          });
        }
        setShoes(loadedShoes);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.loadingTxt}>
        <p>
          <FaSpinner />
        </p>
      </section>
    );
  }

  const eachShoes = shoes.map((shoes) => (
    <li>
      <ItemShoe
        key={shoes.id}
        id={shoes.id}
        title={shoes.name}
        price={shoes.price}
        picture={shoes.picture}
      />
    </li>
  ));

  const closeErrorHandler = () => {
    setError(null);
  };
  return (
    <Fragment>
      {error ? (
        <ErrorModal onClose={closeErrorHandler}>{error}</ErrorModal>
      ) : (
        <div className={classes.shoes}>
          <Card>
            <ul>{eachShoes}</ul>
          </Card>
        </div>
      )}
    </Fragment>
  );
}
export default ShoeItems;
