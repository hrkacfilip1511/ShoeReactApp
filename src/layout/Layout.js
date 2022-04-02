import { Fragment } from "react/cjs/react.production.min";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <div>{props.children}</div>
    </Fragment>
  );
}

export default Layout;
