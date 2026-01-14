import { useParams } from "react-router";

import { useMemo } from "react";

import { TopicContentRenderer } from "../TopicContentRenderer";

import topics from "../../data/topics.json";

import style from "./index.module.css";

export const TopicContent = () => {
  const { id } = useParams();

  const currentTopic = useMemo(
    () => topics.find((item) => item.path === id) || topics[0],
    [id]
  );

  return (
    <div className={style.topicContentContainer}>
      <h1>{currentTopic.name}</h1>
      <TopicContentRenderer currentTopic={currentTopic} />
    </div>
  );
};
