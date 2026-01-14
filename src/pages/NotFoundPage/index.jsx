import { Button } from "../../ui/Button";

import { useThemeContext } from "../../hooks/useThemeContext";
import style from "./index.module.css";

export const NotFoundPage = () => {
  const { theme } = useThemeContext();

  return (
    <div className={`${style.mainContainer} ${style[theme]}`}>
      <h1>404</h1>
      <p>Not Found</p>
      <Button path={"/"}>На главную</Button>
    </div>
  );
};
