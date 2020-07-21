import * as actionTypes from './actionTypes';

export const initFloatGallery = () => {
  return (dispatch) => {
    fetch('http://localhost:8080/floatGalleryModels')
    .then(response => {
      return response.json();
    })
    .then(data => {
      //dispatch the data here. Use actionCreator object
      dispatch(setModelFloatGallery(data.models_float_gallery));
    })
    .catch(error => {
      console.log('Error retrieving float gallery models', error);
    })
  }
};

function setModelFloatGallery(modelImages) {
  return {
    type: actionTypes.SET_FLOAT_GALLERY_MODELS,
    modelFloatGalleryImages: modelImages
  };
};