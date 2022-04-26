import { Route, Routes } from "react-router-dom";
import CartProvider from "./Store/CartProvider";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import Layout from "./layout/Layout";
import AdminPage from "./pages/AdminPage";
import { AdminContextProvider } from "./Store/admin-auth-context";
import { AuthContextProvider } from "./Store/auth-context";

function App() {
  return (
    <CartProvider>
      <Layout>
        <Routes>
          <Route
            path="/admin"
            element={
              <AdminContextProvider>
                <AdminPage />
              </AdminContextProvider>
            }
          />
          <Route
            path="/"
            exact
            element={
              <AuthContextProvider>
                <HomePage />
              </AuthContextProvider>
            }
          />
          <Route
            path="/auth"
            element={
              <AuthContextProvider>
                <AuthPage />
              </AuthContextProvider>
            }
          />
        </Routes>
      </Layout>
    </CartProvider>
  );
}

export default App;
