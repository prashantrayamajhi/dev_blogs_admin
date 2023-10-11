import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.scss";
import { logout, checkJwtToken } from "./../../helper/auth";

const Navbar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!checkJwtToken()) {
      return navigate("/login");
    }
  }, []);

  return (
    <div className="navbar">
      <div></div>
      <div className="links">
        <Link to="/news/create" className="link">
          Create Blog
        </Link>
        <p
          className="link"
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            logout();
            window.location.href = "/login";
          }}
        >
          Logout
        </p>
      </div>
    </div>
  );
};

export default Navbar;
