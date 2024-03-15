import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton
        toggleFavorite={props.toggleFavorite}
        favorites={props.favorites}
        photoId={props.photoId}
      />
      <img
        className="photo-list__image"
        src={props.photo.urls.full}
        onClick={() => props.openModal(props.photo)}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={props.photo.user.profile}
        />
        <div className="photo-list__user-info">
          {props.photo.user.name}
          <div className="photo-list__user-location">
            {props.photo.location.city}
            {props.photo.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
