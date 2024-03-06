import React from 'react';

//import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import './App.scss';

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

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = [...Array(3)];
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

