import { CodeBlockWrapper } from "../CodeBlockWrapper";

import style from "./index.module.css";


export const TopicContentRenderer = ({ currentTopic }) => {
  
  return (
    <>
      {currentTopic.description.map(({ type, content, items }, index) => {
        switch (type) {
          case "paragraph":
            return <p key={`paragraph-${index}`}>{content}</p>;
          case "code":
            return <CodeBlockWrapper content={content} />;
          case "list":
            return (
              <ul key={`list-${index}`} className={style.list}>
                {items.map((item, itemIndex) => (
                  <li
                    key={`list-item-${index}-${itemIndex}`}
                    className={style.listItem}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "note":
            return (
              <div key={`note-${index}`} className={style.note}>
                <strong>Примечание:</strong> {content}
              </div>
            );
          case "warning":
            return (
              <div key={`warning-${index}`} className={style.warning}>
                <strong>Внимание:</strong> {content}
              </div>
            );
          default:
            return <div key={`unknown-${index}`}>{content}</div>;
        }
      })}
    </>
  );
};
