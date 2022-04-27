import classes from "./UserProfileForm.module.css";
import { useRef, useContext, useState } from "react";
import AuthContext from "../../Store/auth-context";
import { useNavigate } from "react-router-dom";
import Snackbar from "../UI/Snackbar";
const UserProfileForm = () => {
  const [isPasswordChanged, setPasswordChanged] = useState(false);
  const passwordRef = useRef();
  const navigator = useNavigate();
  const authCtx = useContext(AuthContext);

  const changePasswordHandler = (e) => {
    e.preventDefault();
    const enteredPassword = passwordRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB4TFYGx_i1fP9rC0RkvQrpVFSYynM8HJE",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredPassword,
          returnSecureToken: true,
        }),
      }
    ).then((res) => {
      if (res.ok) {
        setPasswordChanged(true);
      }
      setTimeout(() => {
        authCtx.logout();
        navigator("/");
      }, 4000);
    });
  };
  return (
    <div>
      <div className={classes.passwordForm}>
        <form onSubmit={changePasswordHandler}>
          <div className={classes.newPasswordInput}>
            <label htmlFor="new-password">Enter new password</label>
            <input
              type="password"
              id="new-password"
              required
              ref={passwordRef}
            />
          </div>
          <div className={classes.actions}>
            <button type="submit">Change Password</button>
          </div>
        </form>
      </div>
      {isPasswordChanged && <Snackbar />}
    </div>
  );
};

export default UserProfileForm;
