import React from 'react';
import Items from './Items/Items';
import classes from './Products.module.css';

const Products = (props) => {
    //here CREATE THE SHAPE of the products page with CSS.
    //inside of ITEMS you will render all items
    return (
        <section className={classes.products}>
            <Items />
        </section>
    );
};

export default Products;