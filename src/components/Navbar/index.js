import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="#">React</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="_blank/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                 <NavLink className="nav-link" to="/About">About</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" to="/FileProcessing">File</NavLink>
              </li>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;