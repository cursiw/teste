// src/components/NavBar.jsx
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ background: "#181A20", color: "#fff", display: "flex", justifyContent: "space-around", padding: "1rem 0" }}>
      <Link to="/">🏠 Accueil</Link>
      <Link to="/tournois">🏆 Tournois</Link>
      <Link to="/equipes">👥 Équipes</Link>
      <Link to="/classement">🏅 Classement</Link>
      <Link to="/notifications">🔔 Notifications</Link>
    </nav>
  );
}
export default NavBar;
