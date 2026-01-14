import { Button } from "../../../ui/Button";

import style from "./index.module.css";

export const ErrorFallback = () => {
  return (
    <div className={style.mainContainer}>
      <h1>Что-то пошло не так</h1>
      <Button path={"/"}>Вернуться на главную</Button>
    </div>
  );
};
