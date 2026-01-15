import { NavigateButton } from "../../components/NavigateButton";

import { useNavigate } from "react-router";

import style from "./index.module.css";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => navigate("topics/components");

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
      <NavigateButton onClick={handleNavigate}>Перейти к темам</NavigateButton>
    </div>
  );
};
