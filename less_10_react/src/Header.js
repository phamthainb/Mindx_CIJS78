import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext, languTranslate } from "./App";

export default function Header() {
  const { lang, username } = useContext(AppContext);

  return (
    <header className="header">
      <div className="header_content">
        <div className="left">MindX</div>
        <div className="nav">
          <ul
            className="nav-list"
            style={{ display: "flex", gap: "12px", listStyleType: "none" }}
          >
            <li>
              <NavLink to={"/page-1"}>page 1</NavLink>
            </li>
            <li>
              <NavLink to={"/page-2"}>page 2</NavLink>
              <ul>
                <li>
                  <NavLink to={"page-2.1"}>page 2.1</NavLink>
                </li>
                <li>
                  <NavLink to={"page-2.2"}>page 2.2</NavLink>
                </li>
                <li>
                  <NavLink to={"page-2.3"}>page 2.3</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to={"/page-3"}>page 3</NavLink>
            </li>
            <li>
              <NavLink to={"/page-4"}>page 4</NavLink>
            </li>
            <li>
              <NavLink to={"/page-5"}>page 5</NavLink>
            </li>
          </ul>
        </div>
        <div className="right">
          {username
            ? `Welcome, ${username}`
            : languTranslate[lang].header_label}
        </div>
      </div>
    </header>
  );
}
