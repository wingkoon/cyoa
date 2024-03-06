import React from 'react';

//import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import TopNavigationBar from './components/TopNavigationBar';
import './App.scss';

function Application(props) {
  const firstname = useControlledInput("");
  const lastname = useControlledInput("");
  const email = useControlledInput("");
  const password = useControlledInput("");
  const passwordConfirmation = useControlledInput("");

  return (
    <form>
      <input {...firstname} />
      <input {...lastname} />
      <input {...email} />
      <input {...password} type="password" />
      <input {...passwordConfirmation} type="password" />
    </form>
  );
}

function useControlledInput(initial) {
  const [value, setValue] = useState(initial);

  return {
    value,
    onChange: (event) => setValue(event.target.value)
  };
}

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
  /*const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  }*/

  return (
    <div className="App">
      <TopNavigationBar />
      <PhotoFavButton
  toggleFavourite={toggleFavourite}
  photoId={photo.id}
/>
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
