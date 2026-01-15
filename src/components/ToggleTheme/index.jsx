import { useThemeContext } from "../../hooks/useThemeContext";

import dark from "../../assets/moon.png";
import light from "../../assets/sun.png";

import style from "./index.module.css";

export const ToggleTheme = () => {
  const { theme, handleChangeTheme } = useThemeContext();

  return (
    <>
      <button onClick={handleChangeTheme} className={style.toogleContainer}>
        <img src={theme === "dark" ? light : dark} alt={"toggleTheme"} />
      </button>
    </>
  );
};
