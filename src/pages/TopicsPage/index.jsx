import { useRef, useEffect } from "react";
import { useLocation } from "react-router";

import { Sidebar } from "../../components/Sidebar";
import { Outlet } from "react-router";

import { useThemeContext } from "../../hooks/useThemeContext";

import style from "./index.module.css";

export const TopicsPage = () => {
  const { theme } = useThemeContext();
  const mainContentRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTop = 0;
    }
  }, [location.pathname]);

  return (
    <div className={style.topicContainer}>
      <Sidebar />
      <main
        ref={mainContentRef}
        className={`${style.mainContent} ${style[theme]}`}
      >
        <Outlet />
      </main>
    </div>
  );
};

