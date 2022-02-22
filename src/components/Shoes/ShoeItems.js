import { useEffect, useState } from "react";

import Card from "../UI/Card";
import ItemShoe from "./ItemShoe";
import classes from "./ShoeItems.module.css";
import { FaSpinner } from "react-icons/fa";

function ShoeItems() {
  const [shoes, setShoes] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://shoe-shop-9bf1d-default-rtdb.europe-west1.firebasedatabase.app/shoes.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const responseData = await response.json();

      const loadedShoes = [];
      for (const key in responseData) {
        loadedShoes.push({
          id: key,
          name: responseData[key].name,
          price: responseData[key].price,
          picture: responseData[key].picture,
        });
      }
      setShoes(loadedShoes);
      setLoading(false);
    };
    fetchData().catch((error) => {
      setLoading(false);
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
  if (error) {
    return (
      <section className={classes.errorTxt}>
        <p>{error}</p>
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
  return (
    <div className={classes.shoes}>
      <Card>
        <ul>{eachShoes}</ul>
      </Card>
    </div>
  );
}
export default ShoeItems;
