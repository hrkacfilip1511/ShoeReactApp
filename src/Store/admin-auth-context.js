import React, { useState } from "react";

const AdminContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AdminContextProvider = (props) => {
  const initialToken = localStorage.getItem("tokken");
  const [token, setToken] = useState(initialToken);
  const adminIsLoggedIn = !!token;
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("tokken", token);
  };
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("tokken");
  };

  const context = {
    token: token,
    isLoggedIn: adminIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AdminContext.Provider value={context}>
      {props.children}
    </AdminContext.Provider>
  );
};
export default AdminContext;
