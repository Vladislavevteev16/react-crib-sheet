import { ToggleTheme } from "../../ui/ToggleTheme";
import { Link } from "react-router";

import svg from "../../assets/react.svg";

import style from "./index.module.css";

export const Header = () => {
  console.log("Header re-render");

  return (
    <header className={style.headerContainer}>
      <Link to="/">
        <img className={style.logo} src={svg}></img>
      </Link>
      <ToggleTheme />
    </header>
  );
};
