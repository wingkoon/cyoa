/*The state object will contain the entire state of the application.
The updateToFavPhotoIds action can be used to set the favourite photos.
The setPhotoSelected action can be used when the user selects a photo.
The onClosePhotoDetailsModal action can be used to close the modal.*/
const initialState = {
  //…rest of the state
  photoData: [],
  topicData: []
}

const [state, setState] = useState({
    isModalOpen: false,
    selectedPhoto: null,
    isFavorited: [],
  });

  const updateToFavPhotoIds = (photoId) => {
    if (state.isFavorited.includes(photoId)) {
      const newFavorites = state.isFavorited.filter((id) => id !== photoId);
      setState({ ...state, isFavorited: newFavorites });
    } else {
      setState({ ...state, isFavorited: [...state.isFavorited, photoId] });
    }
  };


  /* insert app levels actions below */
export const ACTIONS = {
    FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
    FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
    SELECT_PHOTO: 'SELECT_PHOTO',
    DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
  }
  
  function reducer(state, action) {
    switch (action.type) {
      case FAV_PHOTO_ADDED:
        return { /* insert logic */ }
      { /* insert all relevant actions as case statements*/ }  
      }
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  
    function LiveSearch(props) {
      const [term, setTerm] = useState("");
      const [results, setResults] = useState([]);
    
     

    useEffect(() => {
      fetch("/api/photos")
        .then((response) => response.json())
        .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
    }, []);
      return (
        <>
          <SearchBar value={term} onChange={setTerm} />
          <Results results={results} />
        </>
      );
    }

    switch (action.type) {
      case 'SET_PHOTO_DATA':
        return { ...state, photoData: action.payload };
      //…the rest of your cases
    }

