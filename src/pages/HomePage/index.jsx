import { useNavigate } from "react-router";

import { useThemeContext } from "../../hooks/useThemeContext";

import style from "./index.module.css";

export const HomePage = () => {
  const navigate = useNavigate();

  const { theme } = useThemeContext();

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

      <button
        className={`${style.button} ${style[theme]}`}
        onClick={() => navigate("/topics")}
      >
        Перейти к темам
      </button>
    </div>
  );
};
