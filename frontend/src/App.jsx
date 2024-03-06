import React from 'react';

//import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import TopNavigationBar from './components/TopNavigationBar';
import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const photoListItems = photos.map((photo, index) => 
    <PhotoListItem key={index} photo={sampleDataForPhotoListItem} imageSource={sampleDataForPhotoListItem.imageSource}/>
  );
  const {
    isModalOpen,
    selectedPhoto,
    isFavorited,
    toggleFavourite,
    openModal,
    closeModal,
    photoData,
    topicData,
  } = useApplicationData();

  return (
    <div className="App">
      <TopNavigationBar />
      <HomeRoute />
      <HomeRoute photoData={photoData} topicData={topicData}  openModal={openModal} isFavorited={isFavorited} toggleFavourite={toggleFavourite} />
      {isModalOpen && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          toggleFavourite={toggleFavourite}
          onClose={() => {
            closeModal();
          }}
          similarPhotos={selectedPhoto.similar_photos} 
        />
      )}
    </div>
  );
};


export default App;

