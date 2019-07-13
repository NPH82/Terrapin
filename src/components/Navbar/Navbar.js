import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li className="active"><a href="/admin">Home</a></li>
            <li><a href="/admin/recent">Recent</a></li>
            <li><a href="/admin/map">Map</a></li>
            <li><a href="/admin/archive">Archives</a></li>
          </ul>
        </div>
      </nav>
    );
  }
};

export default Navbar;