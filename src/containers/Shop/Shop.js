import React , { useEffect } from 'react';
import Products from './Products/Products';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './../../store/actions/index';

const Shop = (props) => {

    const clothes = useSelector(state => state.allProducts);
    console.log('VALUE OF CLOTHES IS', clothes);
    const dispatch = useDispatch();

    let data = null;

    useEffect(() => {
        dispatch(actions.initProducts());
    }, []);

    let products = data ? <Products /> : <div> Loading ... </div>

    return (
        <div>
            <img src="/images/hoodie1.jpg" alt="a hoodie" />
            {products}
        </div>
    );
};

export default Shop;