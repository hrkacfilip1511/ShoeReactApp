import { Fragment } from "react";
import ShoeItems from "./ShoeItems";

import ShoesStory from "./ShoesStory";

function Shoes() {
  return (
    <Fragment>
      <ShoesStory />
      <ShoeItems />
    </Fragment>
  );
}

export default Shoes;
