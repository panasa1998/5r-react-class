import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    const linkSyle={
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
              {/* <a className="nav-link active" href="#">
                Active
              </a> */}
              <Link to={"/"} style={linkSyle}>Home</Link>
            </li>
            <li className="nav-item" style={listStyle}>
              {/* <a className="nav-link" href="#">
                Link
              </a> */}
              <Link to={"/about"} style={linkSyle}>About</Link>
            </li>
            <li className="nav-item" style={listStyle}>
              {/* <a className="nav-link" href="#">
                Link
              </a> */}
              <Link to={"/contact"} style={linkSyle}>Contact</Link>
            </li>
            <li className="nav-item" style={listStyle}>
              {/* <a className="nav-link" href="#">
                Link
              </a> */}
              <Link to={"/setting"} style={linkSyle}>Setting</Link>
            </li>
            
          </ul>
        </div>
      </nav>
      
      
      


    )
}
export default NavBar;