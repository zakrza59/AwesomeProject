import { ADD_PLACES, DELETE_PLACES } from '../actions/actionTypes'

const initialState = {
  places: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACES:
      return {
        ...state,
        places: state.places.concat({
          key: `${Math.random()}`,
          name: action.placeName,
          image: {
            uri: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/2/0/0'
          }
        })
      };
    case DELETE_PLACES:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.placeKey;
        }),
      };
    default:
      return state;
  }
};

export default reducer;