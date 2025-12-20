import { Link, NavLink } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <div className="container header-content-container">
        <Link to="/">
          <h1 className="site-name">MeuSite</h1>
        </Link>
        <nav>
          <ul className="menu-item">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "menu-active" : "")}
              >
                Início
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/promotion"
                className={({ isActive }) => (isActive ? "menu-active" : "")}
              >
                Promoção
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sub"
                className={({ isActive }) => (isActive ? "menu-active" : "")}
              >
                Participar
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
