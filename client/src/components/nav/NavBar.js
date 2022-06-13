import navLogo from "../../assets/images/nav-logo.svg";
import "../../assets/styles/navbar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            <object
              data={navLogo}
              type="image/svg+xml"
              aria-label="nav-logo"
            ></object>
          </NavLink>
        </li>
        <li>
          <NavLink to="#about-us">
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
