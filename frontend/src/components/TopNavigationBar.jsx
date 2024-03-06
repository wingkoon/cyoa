import React from 'react';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = ({ isFavorited }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <FavBadge isFavPhotoExist={isFavorited} />
    </div>
  )
}

export default TopNavigation;

