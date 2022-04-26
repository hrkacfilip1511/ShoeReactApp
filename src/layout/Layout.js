import { Fragment, useContext } from "react";
import MainNavigation from "./MainNavigation";
import NotFoundContext from "../Store/not-found";
import { useLocation } from "react-router-dom";

function Layout(props) {
  const location = useLocation();
  const notFoundCtx = useContext(NotFoundContext);
  console.log(location);
  if (
    location.pathname === "/" ||
    location.pathname === "/auth" ||
    location.pathname === "/admin"
  ) {
    notFoundCtx.isNotFound = false;
  } else {
    notFoundCtx.isNotFound = true;
  }

  return (
    <Fragment>
      {!notFoundCtx.isNotFound && <MainNavigation />}
      <div>{props.children}</div>
    </Fragment>
  );
}

export default Layout;
