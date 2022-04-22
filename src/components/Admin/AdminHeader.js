import { useContext } from "react";
import AdminContext from "../../Store/admin-auth-context";
import AuthContext from "../../Store/auth-context";

const AdminHeader = () => {
  const adminCtx = useContext(AdminContext);
  const isLogged = adminCtx.isLoggedIn;

  const authCtx = useContext(AuthContext);

  console.log("obicni user", authCtx.isLoggedIn);
  console.log("user admin", adminCtx.isLoggedIn);
  const logoutHandler = () => {
    adminCtx.logout();
  };
  return (
    <div>
      {isLogged ? (
        <button className="logoutAdminButton" onClick={logoutHandler}>
          Logout
        </button>
      ) : (
        <h3 style={{ color: "white" }}>Hello Admin!</h3>
      )}
    </div>
  );
};

export default AdminHeader;
