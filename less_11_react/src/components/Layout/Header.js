import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const u = localStorage.getItem("username");
  const nav = useNavigate();

  return (
    <div className="header">
      <div className="logo">{u ? `Wellcome, ${u}` : "Mindxer"}</div>
      <div className="nav">
        <ul className="nav-item">
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/profile">profile</NavLink>
          </li>
          <li>
            {u ? (
              <span
                onClick={() => {
                  localStorage.clear();
                  nav("/");
                }}
              >
                Logout
              </span>
            ) : (
              <NavLink to="/login">login</NavLink>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
