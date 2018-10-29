import { ADD_PLACE, DELETE_PLACE } from './actionTypes';

export const addPlace = (placeName, location, image) => {
  return dispatch => {
    const placeData = {
      name: placeName,
      location: location,
      // image: parsedRes.imageUrl
    };
    fetch("https://us-central1-awesome-places-1540584656353.cloudfunctions.net/storeImage", {
      method: "POST",
      body: JSON.stringify({
        image: image.base64
      })
    })
      .catch(err => console.log(err))
      .then(res => res.json())
      .then(parsedRes => {
        console.log(parsedRes)
      })
      //   return fetch("https://awesome-places-1540584656353.firebaseio.com/places.json", {
      //     method: "POST",
      //     body: JSON.stringify(placeData)
      //   })
      // })
      // .catch(err => console.log(err))
      // .then(res => res.json())
      // .then(parsedRes => {
      //   console.log(parsedRes);
      // });
  };
};

export const deletePlace = (key) => {
  return {
    type: DELETE_PLACE,
    placeKey: key
  };
};

// import { ADD_PLACE, DELETE_PLACE } from './actionTypes';

// export const addPlace = (placeName, location, image) => {
//     return dispatch => {
//         fetch("https://us-central1-awesome-places-1540584656353.cloudfunctions.net/storeImage", {
//             method: "POST",
//             body: JSON.stringify({
//                 image: image.base64
//             })
//         })
//         .catch(err => console.log(err))
//         .then(res => res.json())
//         .then(parsedRes => {
//             const placeData = {
//                 name: placeName,
//                 location: location,
//                 image: parsedRes.imageUrl
//             };
//             return fetch("https://awesome-places-1540584656353.firebaseio.com/places.json", {
//                 method: "POST",
//                 body: JSON.stringify(placeData)
//             })
//         })  
//         .catch(err => console.log(err))
//         .then(res => res.json())
//         .then(parsedRes => {
//             console.log(parsedRes);
//         });
//     };
// };

// export const deletePlace = (key) => {
//     return {
//         type: DELETE_PLACE,
//         placeKey: key
//     };
// };