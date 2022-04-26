import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import classes from "./MainNavigation.module.css";
import AuthContext from "../Store/auth-context";
import AdminContext from "../Store/admin-auth-context";

function MainNavigation() {
  const authCtx = useContext(AuthContext);
  const adminCtx = useContext(AdminContext);

  console.log("Admin je logiran ", adminCtx.isLoggedIn);
  console.log("User je logiran", authCtx.isLoggedIn);
  const navigator = useNavigate();
  const isLoggedIn = authCtx.isLoggedIn;
  function logoutHandler() {
    authCtx.logout();
    navigator("/auth");
  }
  return (
    <div className={classes.header}>
      <Link to="/">
        <div className={classes.title}>
          <span className={classes.dot}></span>
          <span className={classes.titleSpan}>
            Shoe<span className={classes.letterO}>O</span>p
          </span>
        </div>
      </Link>
      {!isLoggedIn && (
        <Link to="/auth">
          <div className={classes.loginTxt}>Login</div>
        </Link>
      )}
      {isLoggedIn && (
        <div onClick={logoutHandler} className={classes.loginTxt}>
          Logout
        </div>
      )}
    </div>
  );
}
export default MainNavigation;
