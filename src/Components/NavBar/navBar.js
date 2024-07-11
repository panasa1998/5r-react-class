import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"


function NavBar(){
    const NavLinkSyle={
        textDecoration:"none",
    }
    const listStyle={
        margin:10,
        fontSize:30,
    }
    
    return(
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item" style={listStyle}>
              {/* <a className="nav-NavLink active" href="#">
                Active
              </a> */}
              <NavLink to={"/"} style={NavLinkSyle}>Home</NavLink>
            </li>
            <li className="nav-item" style={listStyle}>
              {/* <a className="nav-NavLink" href="#">
                NavLink
              </a> */}
              <NavLink to={"/about"} style={NavLinkSyle}>About</NavLink>
            </li>
            <li className="nav-item" style={listStyle}>
              {/* <a className="nav-NavLink" href="#">
                NavLink
              </a> */}
              <NavLink to={"/contact"} style={NavLinkSyle}>Contact</NavLink>
            </li>
            <li className="nav-item" style={listStyle}>
              {/* <a className="nav-NavLink" href="#">
                NavLink
              </a> */}
              <NavLink to={"/setting"} style={NavLinkSyle}>Setting</NavLink>
            </li>
            
          </ul>
        </div>
      </nav>
      
      
      


    )
}
export default NavBar;