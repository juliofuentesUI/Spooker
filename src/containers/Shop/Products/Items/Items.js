import React from 'react';
import Item from './Item/Item';
import { useSelector } from 'react-redux';

const Items = (props) => {

    const allProducts = useSelector(state => state.allProducts);

    const items = allProducts.map((product, index) => {
        return <Item name={product.name} key={index} imageUrl={product.imageUrl} price={product.price}/>;
    });

    return (
        <React.Fragment>
            {items}
        </React.Fragment>
    );
};

export default Items;