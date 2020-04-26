import React from 'react';
import Items from './Items/Items';

const Products = (props) => {
    //here CREATE THE SHAPE of the products page with CSS.
    //inside of ITEMS you will render all items
    console.log('I AM products.js');
    return (
        <div>
            <Items />
            <p>i am products.js</p>
        </div>
    );
};

export default Products;