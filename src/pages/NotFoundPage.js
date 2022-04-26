import { useContext } from "react";
import { Link } from "react-router-dom";
import NotFoundContext from "../Store/not-found";

const NotFoundPage = () => {
  return (
    <div className="notFound">
      <img
        src="https://i.dlpng.com/static/png/6474276_preview.png"
        alt="losted"
      />

      <span>It looks like you're lost</span>
      <Link to="/">Take me back to Home Page</Link>
    </div>
  );
};
export default NotFoundPage;
