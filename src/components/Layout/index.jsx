import { Header } from "../Header";
import { Outlet } from "react-router";

import { useThemeContext } from "../../hooks/useThemeContext";

import style from "./index.module.css";

export const Layout = () => {
  const { theme } = useThemeContext();

  return (
    <div className={`${style.layoutContainer} ${style[theme]}`}>
      <Header />
      <main className={style.main}>
        <Outlet />
      </main>
    </div>
  );
};
