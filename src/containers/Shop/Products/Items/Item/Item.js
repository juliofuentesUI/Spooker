import React from 'react';
import classes from './Item.module.css';

const Item = ({ name, imageUrl, price}) => {
    return (
        <div className={classes.productCard}>
            <div className={classes.productImage}>
                <img src={imageUrl} />
            </div>
            <div className={classes.productInfo}>
                <p>{name}</p>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default Item;