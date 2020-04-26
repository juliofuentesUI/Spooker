import React , { useEffect } from 'react';
import Products from './Products/Products';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './../../store/actions/index';

const Shop = (props) => {

    const allProducts = useSelector(state => state.allProducts);
    const dispatch = useDispatch();

    console.log('VALUE OF CLOTHES IS', allProducts);


    useEffect(() => {
        dispatch(actions.initProducts());
    }, []);

    let products = allProducts ? <Products /> : <div> Loading ... </div>

    return (
        <div>
            {products}
        </div>
    );
};

export default Shop;