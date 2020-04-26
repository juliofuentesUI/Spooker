import React from 'react';
import classes from './Item.module.css';

const Item = ({ name, imageUrl, price}) => {
    console.log('I AM ITEM.JS');
    console.log('This is name', name);
    console.log('This is imageUrl', imageUrl);
    return (
        <div className={classes.productCard}>
            <div className={classes.productImage}>
                <img src={imageUrl} />
            </div>
            <div className={classes.productInfo}>
                <h5>{name}</h5>
                <h6>{price}</h6>
            </div>
        </div>
    );
};

export default Item;