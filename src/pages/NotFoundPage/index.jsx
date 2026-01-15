import { useNavigate } from "react-router";
import { NavigateButton } from "../../components/NavigateButton";

import { useThemeContext } from "../../hooks/useThemeContext";

import style from "./index.module.css";

export const NotFoundPage = () => {
  const { theme } = useThemeContext();

  const navigate = useNavigate();

  const handleNavigate = () => navigate("/");

  return (
    <div className={`${style.mainContainer} ${style[theme]}`}>
      <h1>404</h1>
      <p>Not Found</p>
      <NavigateButton onClick={handleNavigate}>На главную</NavigateButton>
    </div>
  );
};
