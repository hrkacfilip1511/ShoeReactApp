import classes from "./AdminAuthForm.module.css";
import { useRef, useState, useContext } from "react";
import AdminContext from "../../Store/admin-auth-context";
import AuthContext from "../../Store/auth-context";
const AdminAuthForm = () => {
  const adminCtx = useContext(AdminContext);

  const [isAdminLogin, setAdminLogin] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const submitFormHandler = (e) => {
    e.preventDefault();
    let enteredEmail = emailInputRef.current.value;
    let enteredPassword = passwordInputRef.current.value;
    let url;

    if (isAdminLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCliDeAkZpd6bvT4VIBIZavnwSACrr2jns";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCliDeAkZpd6bvT4VIBIZavnwSACrr2jns";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMsg = "Authentification failed";
            if (data && data.error && data.error.message) {
              errorMsg = data.error.message;
            }
            throw new Error(errorMsg);
          });
        }
      })
      .then((data) => {
        adminCtx.login(data.idToken);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const changeAdminLoginStatus = () => {
    setAdminLogin((prevStatus) => !prevStatus);
  };
  return (
    <div className={classes.auth}>
      <h3>{isAdminLogin ? "Admin Login" : "Admin Sign Up"}</h3>
      <form onSubmit={submitFormHandler}>
        <div className={classes.email}>
          <label>Email </label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.password}>
          <label>Password </label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>

        <div className={classes.submitBtn}>
          <button>{isAdminLogin ? "Login" : "Sign Up"}</button>
        </div>
        <button
          className={classes.changeLoginStatusBtn}
          onClick={changeAdminLoginStatus}
        >
          {isAdminLogin ? "Create new Admin" : "Login with existing Admin"}
        </button>
      </form>
    </div>
  );
};

export default AdminAuthForm;
