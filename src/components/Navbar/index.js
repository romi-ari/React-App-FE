import { NavLink, useNavigate } from "react-router-dom";
import {ListCars} from "../../components";

function NavBar() {
  const navigate = useNavigate();
  
  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate('/')
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">Navbar</NavLink>
          <li className="navbar-toggler" type="li" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </li>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/fileprocessing">File</NavLink>
              </li>
            </ul>
          </div>
          <ul className="d-flex list-unstyled">
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" role="li" data-bs-toggle="dropdown">
                  Dropdown
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" type="submit" value="Logout" onClick={handleLogout}>Log out</NavLink></li>
                </ul>
              </li>
          </ul>
        </div>
      </nav>
      <div style={{margin: "16px 0 0 12px"}}>
        <ListCars />
      </div>
    </div>
  )
}

export default NavBar;