import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx/index.jsx";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    console.error("Need to wrap it in the provider");
  }

  return context;
};
