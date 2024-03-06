import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import  { useEffect, useState } from 'react';
import useApplicationData from '../hooks/useApplicationData';
const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];
const TopicList = ({ onTopicClick }) => {
    const { topicData, fetchTopics, isLoading } = useApplicationData();

    useEffect(() => {
      // Fetch topics when the component mounts
      fetchTopics();
    }, [fetchTopics]);

  return (
    <div className="top-nav-bar__topic-list">
        {isLoading ? (
        <p>Loading topics...</p>
      ) : (
        topicData.map((topic) => (
            <TopicListItem key={topic.id} topic={topic} onTopicClick={onTopicClick}
            />
        ))
      )}
    </div>
  );
};

export default TopicList;

