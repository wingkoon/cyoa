import React, { useEffect, useState } from "react";
import PhotoList from '../components/PhotoList';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  return (
    <div className="photo-details-modal">
      <button
        onClick={() => props.closeModal()}
        className="photo-details-modal__close-button"
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton
          toggleFavorite={props.toggleFavorite}
          photoId={props.selectedPhoto.id}
          favorites={props.favorites}
        />
        <img
          onClick={() => props.setDisplayModal(props.selectedPhoto)}
          className="photo-details-modal__image"
          src={props.selectedPhoto.urls.full}
        />
        <div className="photo-details-modal__photographer-details ">
          <img
            className="photo-details-modal__photographer-profile"
            src={props.selectedPhoto.user.profile}
          />
          <div className="photo-details-modal__photographer-info">
            {props.selectedPhoto.user.name}
            <div className="photo-details-modal__photographer-location">
              {props.selectedPhoto.location.city},
              {props.selectedPhoto.location.country}
            </div>
          </div>
        </div>
        <div className="photo-details-modal__header">Similar Photos</div>
        <div className="photo-details-modal__images">
          {
            <PhotoList
              photos={Object.values(props.selectedPhoto.similar_photos)}
              favorites={props.favorites}
              toggleFavorite={props.toggleFavorite}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;

