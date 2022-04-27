import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <div className="not-found-image">
        <img src="/assets/confused.png" alt="losted" />
      </div>

      <span>It looks like you're lost</span>
      <Link to="/">Take me back to Home Page</Link>
    </div>
  );
};
export default NotFoundPage;
