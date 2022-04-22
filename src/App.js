import { Route, Routes } from "react-router-dom";
import CartProvider from "./Store/CartProvider";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import Layout from "./layout/Layout";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <CartProvider>
      <Layout>
        <Routes>
          <Route path="/" exact element={<HomePage />} />

          <Route path="/admin" element={<AdminPage />} />

          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </Layout>
    </CartProvider>
  );
}

export default App;
