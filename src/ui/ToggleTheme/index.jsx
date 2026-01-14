import { useThemeContext } from "../../hooks/useThemeContext";

import moon from "../../assets/moon.png";
import sun from "../../assets/sun.png";

import style from "./index.module.css";

export const ToggleTheme = () => {
  const { theme, handleChangeTheme } = useThemeContext();

  return (
    <>
      <button onClick={handleChangeTheme} className={style.toogleContainer}>
        <img src={theme === "dark" ? sun : moon} alt={"toggleTheme"} />
      </button>
    </>
  );
};
