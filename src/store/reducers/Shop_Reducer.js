import * as actionTypes from '../actions/actionTypes';

const initialState = {
    allProducts: null,
    modelsFloatGallery: null
}

const setClothes = (state, action) => {
    console.log('THE ACTION WE GOT IS ', action);
    return {
        ...state,
        allProducts: action.clothes
    }
};

const setFloatGallery = (state, action) => {
    console.log('FLOAT GALLERY ACTION IS', action);
    return {
        ...state,
        modelsFloatGallery: action.modelFloatGalleryImages
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CLOTHES: return setClothes(state, action);
        case actionTypes.SET_FLOAT_GALLERY_MODELS: return setFloatGallery(state, action);
        default: return state;
    }
};


export default reducer;