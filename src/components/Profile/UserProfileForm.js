import classes from "./UserProfileForm.module.css";
import { useRef, useContext } from "react";
import AuthContext from "../../Store/auth-context";
import { useNavigate } from "react-router-dom";
const UserProfileForm = () => {
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
        alert("Password changed successfully.");
      }
      authCtx.logout();
      navigator("/");
    });
  };
  return (
    <div className={classes.passwordForm}>
      <form onSubmit={changePasswordHandler}>
        <div className={classes.newPasswordInput}>
          <label htmlFor="new-password">Enter new password</label>
          <input type="password" id="new-password" required ref={passwordRef} />
        </div>
        <div className={classes.actions}>
          <button type="submit">Change Password</button>
        </div>
      </form>
    </div>
  );
};

export default UserProfileForm;
