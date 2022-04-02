import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Store/auth-context";
import classes from "./AuthForm.module.css";

function Auth() {
  const navigator = useNavigate();
  const authCtx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  function changeLoginStatus() {
    setIsLogin((prevState) => !prevState);
  }

  function submitFormHandler(e) {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let url;

    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB4TFYGx_i1fP9rC0RkvQrpVFSYynM8HJE";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB4TFYGx_i1fP9rC0RkvQrpVFSYynM8HJE";
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
        authCtx.login(data.idToken);
        navigator("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  }
  return (
    <div className={classes.auth}>
      <h3>{isLogin ? "Login" : "Sign Up"}</h3>
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
          <button>{isLogin ? "Login" : "Create Account"}</button>
        </div>
        <button
          className={classes.changeLoginStatusBtn}
          onClick={changeLoginStatus}
        >
          {isLogin ? "Create new account" : "Login with existing account"}
        </button>
      </form>
    </div>
  );
}

export default Auth;
