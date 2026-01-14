import { useNavigate } from "react-router";

import { useThemeContext } from "../../hooks/useThemeContext";

import style from "./index.module.css";

export const Button = ({ children, path }) => {
  const { theme } = useThemeContext();

  const navigate = useNavigate();

  return (
    <button
      className={`${style.button} ${style[theme]}`}
      onClick={() => navigate(path)}
    >
      {children}
    </button>
  );
};
