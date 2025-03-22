import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import LogoUrl from "../../img/calendar_18202110.webp";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <header className={css.headerNav}>
      <nav className={css.nav}>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <NavLink to="/">
              <img
                className={css.logoNav}
                src={LogoUrl}
                alt="logo"
              />
            </NavLink>

            <NavLink to="/" className={buildLinkClass}>
              Home Page
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink to="/movies" className={buildLinkClass}>
              Movie Page
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
