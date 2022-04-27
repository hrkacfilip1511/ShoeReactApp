import { Route, Routes } from "react-router-dom";
import CartProvider from "./Store/CartProvider";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import Layout from "./layout/Layout";
import AdminPage from "./pages/AdminPage";
import { AdminContextProvider } from "./Store/admin-auth-context";
import { AuthContextProvider } from "./Store/auth-context";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <CartProvider>
      <AuthContextProvider>
        <Layout>
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route
              path="/admin"
              element={
                <AdminContextProvider>
                  <AdminPage />
                </AdminContextProvider>
              }
            />
            <Route path="/" exact element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </Layout>
      </AuthContextProvider>
    </CartProvider>
  );
}

export default App;
