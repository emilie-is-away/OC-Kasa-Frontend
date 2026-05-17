import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Kasa</h1>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
    </header>
  );
}

export default Header;
