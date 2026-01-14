import { Button } from "../../ui/Button";

import style from "./index.module.css";

export const HomePage = () => {
  return (
    <div className={style.homePageContainer}>
      <h1>
        Шпаргалка по <span>React</span>
      </h1>
      <p>
        Ссылка на оф. документацию:
        <a
          className={style.link}
          href="https://react.dev"
          target="_blank"
          rel="noreferrer noopener"
        >
          React.dev
        </a>
      </p>
      <Button path={"./topics"}>Перейти к темам</Button>
    </div>
  );
};
