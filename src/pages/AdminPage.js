import { useContext, useState } from "react";
import AdminForm from "../components/Admin/AdminForm";
import AdminHeader from "../components/Admin/AdminHeader";
import AdminAuthForm from "../components/Auth/AdminAuthForm";
import AdminContext from "../Store/admin-auth-context";
import Snackbar from "../components/UI/Snackbar";
const AdminPage = () => {
  const adminCtx = useContext(AdminContext);
  const [isSuccessfullyAdded, setSuccessfullyAdded] = useState(false);
  const isLogged = adminCtx.isLoggedIn;
  const addingItemHandler = (data) => {
    fetch(
      "https://shoe-shop-9bf1d-default-rtdb.europe-west1.firebasedatabase.app/shoes.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        setSuccessfullyAdded(true);
      }
      return res.json();
    });
  };
  return (
    <div>
      <div className="admin-header">
        <AdminHeader />
      </div>
      <div className="admin-form">
        {isLogged ? (
          <AdminForm onAddToFirebase={addingItemHandler} />
        ) : (
          <AdminAuthForm />
        )}
        {isSuccessfullyAdded && <Snackbar />}
      </div>
    </div>
  );
};

export default AdminPage;
