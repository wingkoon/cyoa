import React from 'react';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';
import TopicList from "./TopicList";

const TopNavigationBar = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList
        topics={props.topics}
        getPhotosByTopicId={props.getPhotosByTopicId}
      />
      <FavBadge isFavPhotoExist={props.favorites?.length > 0} />
    </div>
  );
};

export default TopNavigationBar;

