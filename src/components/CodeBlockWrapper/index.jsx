import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import style from "./index.module.css";

SyntaxHighlighter.registerLanguage("javascript", js);

const SYNTAX_HIGHLIGHTER_STYLES = {
  codeBlock: {
    fontSize: "14px",
    lineHeight: 1.4,
    borderRadius: "6px",
    padding: "12px 16px",
    margin: 0,
    background: "#16181D",
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
  return (
    <div className={style.codeBlockContainer}>
      <SyntaxHighlighter
        language="javascript"
        style={atomDark}
        showLineNumbers={true}
        lineNumberStyle={SYNTAX_HIGHLIGHTER_STYLES.lineNumbers}
        customStyle={SYNTAX_HIGHLIGHTER_STYLES.codeBlock}
        wrapLines={false}
        lineProps={SYNTAX_HIGHLIGHTER_STYLES.line}
      >
        {content}
      </SyntaxHighlighter>
    </div>
  );
};
