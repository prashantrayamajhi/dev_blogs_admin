import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.scss";
import { logout, checkJwtToken } from "./../../helper/auth";
import Axios from "./../../api/server";

const Navbar = () => {
  const navigate = useNavigate();

  const fetchProfile = async (token) => {
    try {
      await Axios.get("/admin/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (err) {
      console.log(err);
      logout();
      navigate("/login");
    }
  };

  useEffect(() => {
    const token = checkJwtToken();
    token && fetchProfile(token);
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
