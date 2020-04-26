import * as actionTypes from '../actions/actionTypes';

const initialState = {
    allProducts: "ALL PRODUCTS HERE"
}

const setClothes = (state, action) => {
    console.log('THE ACTION WE GOT IS ', action);
    return {
        ...state,
        allProducts: action.clothes
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CLOTHES: return setClothes(state, action);
        default: return state;
    }
};


export default reducer;