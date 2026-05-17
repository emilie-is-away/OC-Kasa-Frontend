import { NavLink } from "react-router-dom";
import logo from "../images/KASA-LOGO.png";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Kasa" className="header-logo" />

      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Accueil
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          A propos
        </NavLink>
      </nav>
    </header>
  );
}