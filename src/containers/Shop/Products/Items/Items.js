import React from 'react';
import Item from './Item/Item';
import { useSelector } from 'react-redux';

const Items = (props) => {

    const allProducts = useSelector(state => state.allProducts);
    console.log('ALLPRODUCTS in ITEMS.js', allProducts);

    const items = allProducts.map(product => {
        return <Item name={product.name}  imageUrl={product.imageUrl} price={product.price}/>;
    });

    return (
        <React.Fragment>
            {items}
        </React.Fragment>
    );
};

export default Items;