import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import  { useEffect, useState } from 'react';
import useApplicationData from '../hooks/useApplicationData';

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((topic) => (
        <TopicListItem key={topic.id} label={topic.title} getPhotosByTopicId={props.getPhotosByTopicId} photoTopicId={topic.id}/>
      ))}
    </div>
  );
};

export default TopicList;

