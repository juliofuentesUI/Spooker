import * as actionTypes from '../actions/actionTypes';

const initialState = {
    allProducts: null,
    modelsFloatGallery: null,
    frontPageContent: null
}

const setClothes = (state, action) => {
    return {
        ...state,
        allProducts: action.clothes
    }
};

const setFloatGallery = (state, action) => {
    return {
        ...state,
        modelsFloatGallery: action.modelFloatGalleryImages
    }
};

const setFrontPageContent = (state, action) => {
    return {
        ...state,
        frontPageContent: action.frontPageContent
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CLOTHES: return setClothes(state, action);
        case actionTypes.SET_FLOAT_GALLERY_MODELS: return setFloatGallery(state, action);
        case actionTypes.SET_FRONT_PAGE_CONTENT: return setFrontPageContent(state, action);
        default: return state;
    }
};


export default reducer;