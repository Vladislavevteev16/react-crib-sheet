import { NavLink, useParams } from "react-router";

import { useThemeContext } from "../../hooks/useThemeContext";

import topics from "../../data/topics.json";

import style from "./index.module.css";

export const Sidebar = () => {
  const { theme } = useThemeContext();

  const { id } = useParams();

  return (
    <nav
      className={`${style.sidebar} ${
        theme === "light" ? style.lightTheme : style.darkTheme
      }`}
    >
      <ul>
        {topics.map(({ path, name }, index) => (
          <li key={path}>
            <NavLink
              className={({ isActive }) => {
                const shouldBeActive = !id && index === 0;
                return isActive || shouldBeActive
                  ? style.activeLink
                  : style.link;
              }}
              to={path}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
