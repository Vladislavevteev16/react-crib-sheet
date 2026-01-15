import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import {
  coldarkCold,
  coldarkDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

import { useThemeContext } from "../../hooks/useThemeContext";

import { useMemo } from "react";

import style from "./index.module.css";

SyntaxHighlighter.registerLanguage("javascript", js);

const SYNTAX_HIGHLIGHTER_STYLES = {
  codeBlock: {
    fontSize: "0.78em",
    lineHeight: 1.2,
    borderRadius: "6px",
    padding: "12px 16px",
    margin: 0,
    overflowX: "auto",
    tabSize: 2,
    maxWidth: "calc(100vw - 32px)",
  },
  lineNumbers: {
    color: "#5a5a5a",
    paddingRight: "12px",
    userSelect: "none",
    minWidth: "40px",
  },
  line: {
    whiteSpace: "pre",
    wordBreak: "keep-all",
  },
};

export const CodeBlockWrapper = ({ content }) => {
  const { theme } = useThemeContext();

  const syntaxHighlighterProps = useMemo(
    () => ({
      language: "javascript",
      style: theme === "dark" ? coldarkDark : coldarkCold,
      showLineNumbers: true,
      lineNumberStyle: SYNTAX_HIGHLIGHTER_STYLES.lineNumbers,
      customStyle: SYNTAX_HIGHLIGHTER_STYLES.codeBlock,
      wrapLines: false,
      lineProps: SYNTAX_HIGHLIGHTER_STYLES.line,
    }),
    [theme]
  );

  return (
    <div className={style.codeBlockContainer}>
      <SyntaxHighlighter {...syntaxHighlighterProps}>
        {content}
      </SyntaxHighlighter>
    </div>
  );
};
