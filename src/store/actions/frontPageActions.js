import * as actionTypes from './actionTypes';


export const initFrontPageContent = () => {
  return (dispatch) => {
    fetch('http://localhost:8080/frontPageContent')
    .then((response) => {
      return response.json();
    })
    .then(data => {
      dispatch(setFrontPageContent(data.contentPanels));
    })
    .catch(error => {
      console.log('Error retrieving Front Page Content Panels', error);
    })
  }
};


const setFrontPageContent = (contentPanels) => {
  return {
    type: actionTypes.SET_FRONT_PAGE_CONTENT,
    frontPageContent: contentPanels
  };
};