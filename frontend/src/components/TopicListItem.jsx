import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = ({ topic, onTopicClick }) => {

  return (
    <div className="topic-list__item" onClick={() => onTopicClick(topic.id)}>
      <p>{topic.title}</p>
    </div>
  );
};

export default TopicListItem;

