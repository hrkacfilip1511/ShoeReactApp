import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../src/Store/auth-context";
import { AdminContextProvider } from "./Store/admin-auth-context";

ReactDOM.render(
  <AuthContextProvider>
    <AdminContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AdminContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
