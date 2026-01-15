import { useThemeContext } from "../../hooks/useThemeContext";

import style from "./index.module.css";

export const NavigateButton = ({ children, onClick }) => {
  const { theme } = useThemeContext();

  return (
    <button className={`${style.button} ${style[theme]}`} onClick={onClick}>
      {children}
    </button>
  );
};
