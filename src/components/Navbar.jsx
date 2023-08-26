import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Todo list</h1>
      <ul className="nav-links">
        <li className="nav-link">
          <NavLink to={"/"}>add todo</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to={"/all"}>all todos</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to={"/completed"}>completed todos</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
