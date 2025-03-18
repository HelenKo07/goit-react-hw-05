import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

export default function Navigation() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={buildLinkClass}></NavLink>
      <NavLink to="/movies" className={buildLinkClass}></NavLink>
    </nav>
  );
}
