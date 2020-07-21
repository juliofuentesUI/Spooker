import * as actionTypes from './actionTypes';

export const initProducts = () => {
    console.log('Init Products Executed');
    return (dispatch) => {
        fetch('http://localhost:8080/featuredClothes')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log('DATA RECEIVED!!');
            console.log(data.products);
            dispatch(setProducts(data.products));
        })
        .catch(error => {
            console.log('error is', error);
            dispatch(initProductsFailed());
        });
    }
};

const setProducts = (clothes) => {
    console.log('SET PRODUCTS RAN, CLOTHES IS', clothes);
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

