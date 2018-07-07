import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="/calendar"
        className={
          window.location.pathname === "/calendar" ? "nav-link active" : "nav-link"
        }
      >
        Calendar
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/groupchat"
        className={
          window.location.pathname === "/groupchat" ? "nav-link active" : "nav-link"
        }
      >
       Group Chat
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/diary"
        className={
          window.location.pathname === "/diary" ? "nav-link active" : "nav-link"
        }
      >
        Running Diary
      </Link>
    </li>
  </ul>
);

export default NavTabs;
