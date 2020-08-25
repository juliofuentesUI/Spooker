import * as actionTypes from './actionTypes';

export const initProducts = () => {
    return (dispatch) => {
        fetch('http://localhost:8080/featuredClothes')
        .then(response => {
            return response.json();
        })
        .then(data => {
            dispatch(setProducts(data.products));
        })
        .catch(error => {
            dispatch(initProductsFailed());
        });
    }
};

const setProducts = (clothes) => {
    return {
        type: actionTypes.SET_CLOTHES,
        clothes: clothes
    }
}; 

const initProductsFailed = () => {
    return {
        type: actionTypes.SET_PRODUCTS_FAILED,
    }
}; 

