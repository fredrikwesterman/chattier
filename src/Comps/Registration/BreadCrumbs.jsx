import { Link } from "react-router-dom";

const BreadCrumbs = () => {
  return (
    <div className="breadcrumbs text-sm ml-10">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumbs;
