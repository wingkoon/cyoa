import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map((photo, index) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          photoId={photo.id}
          favorites={props.favorites}
          openModal={props.openModal}
          toggleFavorite={props.toggleFavorite}
          displaySinglePhotoDetails={props.displaySinglePhotoDetails}
        />
      ))}
    </ul>
  );
};

export default PhotoList;



