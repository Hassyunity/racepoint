import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* LOGO → HOME */}
      <div className="nav-left">
        <Link to="/">
          <img src={logo} alt="RacePont Logo" className="nav-logo" />
        </Link>
      </div>

      {/* MENU */}
      <ul className="nav-links">
        <li><Link to="/">Calendrier</Link></li>
        <li><Link to="/">Résultats</Link></li>
        <li><Link to="/">Actualités</Link></li>
        <li><Link to="/pilotes">Pilotes</Link></li>
        <li><Link to="/">Équipes</Link></li>
        <li><Link to="/">Evenements</Link></li>
        <li><Link to="/">Boutiques</Link></li>
      </ul>

      {/* RIGHT */}
      <div className="nav-actions">
        <div className="f1-tv-logo">
          <span className="f1-logo-red">Race</span>
          <span className="tv-text">Chanel</span>
        </div>
        <button className="sign-in-btn">Sign In</button>
        <button className="subscribe-btn">Subscribe</button>
      </div>
    </nav>
  );
}
