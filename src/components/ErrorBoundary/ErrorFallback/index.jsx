import { NavigateButton } from "../../NavigateButton";

import style from "./index.module.css";

export const ErrorFallback = () => {
  return (
    <div className={style.mainContainer}>
      <h1>Что-то пошло не так</h1>
      <NavigateButton path={"/"}>Вернуться на главную</NavigateButton>
    </div>
  );
};
