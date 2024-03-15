import React from 'react';
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
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
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    getPhotosByTopicId,
  } = useApplicationData();

  return (
    <>
      <HomeRoute
        openModal={onPhotoSelect}
        favorites={state.favoritesPhotos}
        toggleFavorite={updateToFavPhotoIds}
        topics={state.topics}
        photos={state.photos}
        getPhotosByTopicId={getPhotosByTopicId}
      />
      {state.isModalOpen && (
        <PhotoDetailsModal
          closeModal={onClosePhotoDetailsModal}
          selectedPhoto={state.selectedPhoto}
          favorites={state.favoritesPhotos}
          toggleFavorite={updateToFavPhotoIds}
          photos={state.photos}
        />
      )}
    </>
  );
};

export default App;
