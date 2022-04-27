import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import classes from "./MainNavigation.module.css";
import AuthContext from "../Store/auth-context";

function MainNavigation() {
  const authCtx = useContext(AuthContext);
  const navigator = useNavigate();
  let isLoggedIn = authCtx.isLoggedIn;
  console.log(authCtx);
  function logoutHandler() {
    authCtx.logout();
    navigator("/auth");
  }
  function goToProfilePageHandler() {
    navigator("/profile");
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
      <div className={classes.profile}>
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
        {isLoggedIn && (
          <div className={classes.profileLink} onClick={goToProfilePageHandler}>
            Profile
          </div>
        )}
      </div>
    </div>
  );
}
export default MainNavigation;
