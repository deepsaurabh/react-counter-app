import React, { Component } from "react";

//Stateless functional component
// Destructuring Arguments
const NavBar = ({ totalCount }) => {
  console.log("NavBar -  Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">{totalCount}</span>
      </a>
    </nav>
  );
};

export default NavBar;
