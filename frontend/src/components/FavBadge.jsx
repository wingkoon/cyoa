import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  const hasFavoritedItems = isFavPhotoExist && isFavorited.length > 0;

  return (
    <div className={`top-nav-bar__icon-container ${hasFavoritedItems ? 'active' : ''}`}>
       {hasFavoritedItems ? (
      <FavIcon selected={true} displayAlert={true} /> 
       ) : (
    
    <FavIcon selected={true} displayAlert={false} />
       )}
       </div>
  );
};

export default FavBadge;

