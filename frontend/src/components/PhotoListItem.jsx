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

const PhotoListItem = ({ toggleFavourite, isFavorited, imageSource, profile, username, location, openModal }) => {
  return (
    <li className="photo-list__item">
      <PhotoFavButton
        toggleFavourite={toggleFavourite}
        isFavorited={isFavorited}
      />
      <img
        className="photo-list__image"
        src={imageSource}
        alt="User's photo"
         onClick={openModal}
      />
      <section className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={profile}
          alt="User's profile"
        />
        <div className="photo-list__user-info">{username}
          <div className="photo-list__user-location">{location.city}, 
          {location.country}</div>
        </div>
      </section>
    </li>
  );
};


