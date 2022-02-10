import Card from "../UI/Card";
import ItemShoe from "./ItemShoe";
import classes from "./ShoeItems.module.css";
const avaliableShoes = [
  {
    id: "s1",
    name: "Nike Air Max 270",
    price: 320.5,
    picture: "../../assets/air-max-270.jpg",
  },
  {
    id: "s2",
    name: "Nike Air Force 1 '07",
    price: 255.85,
    picture: "../../assets/air-force.jpg",
  },
  {
    id: "s3",
    name: "Air Jordan 11 Retro Low",
    price: 322.77,
    picture: "../../assets/air-jordan-11.jpg",
  },
  {
    id: "s4",
    name: "Adidas Kaptir 2.0",
    price: 155.1,
    picture: "../../assets/kaptir-2-0.jpg",
  },
];
function ShoeItems() {
  const eachShoes = avaliableShoes.map((shoes) => (
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
