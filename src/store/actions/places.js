import { ADD_PLACES, DELETE_PLACES } from './actionTypes'

export const addPlaces = (placeName) => {
  return {
    type: ADD_PLACES,
    placeName: placeName
  };
};

export const deletePlaces = (key) => {
  return {
    type: DELETE_PLACES,
    placeKey: key
  };
};
