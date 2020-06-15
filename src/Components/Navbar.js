import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (

      <nav className="topnav">
        {/* <div id="myNav" className="overlay">
          <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
          <div class="overlay-content">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <span style={{ color: "white"}} onclick="openNav()">&#9776; open</span>
        <script>
        function openNav() {
          document.getElementById("myNav").style.width = "100%"
        }

        function closeNav() {
          document.getElementById("myNav").style.width = "0%"
        }
        </script> */}
        <ul className="header">
          <li style={{ float: "left"}}>
            <NavLink exact to="/">
              Blue Mesa Engineering
            </NavLink>
          </li>
          <li >
            <NavLink to="/contact" style={{ backgroundColor: "black"}}>Contact</NavLink>
          </li>
          <li className="dropdown">
            <a style={{ backgroundColor: "black"}}>
              About
            </a>
            <ul className="dropdown-content">
              <div>
                <NavLink to="/about/Ndguthrie" style={{ backgroundColor: "black"}}>Nathan Guthrie</NavLink>
              </div>
              <div>
                <NavLink to="/about/Shallphd" style={{ backgroundColor: "black"}}>Stephen Hall</NavLink>
              </div>
            </ul>
          </li>
          {/* <li>
            <NavLink to="/articles">Articles</NavLink>
          </li> */}
          <li className="dropdown">
            <a style={{ backgroundColor: "black"}}>
              Projects
            </a>
            <ul className="dropdown-content">
              <div>
                <NavLink to="/projects/Distralite" style={{ backgroundColor: "black"}}>Distralite</NavLink>
              </div>
              <div>
                <NavLink to="/projects/Minotaurshoof" style={{ backgroundColor: "black"}}>Minotaur's Hoof</NavLink>
              </div>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
