import React from 'react';
import classes from './Item.module.css';
import useHover from './../../../../../hooks/useHover.js';

const Item = ({ name, imageUrl, price}) => {
    const [hoverRef, hovered] = useHover();

    if (hovered) {
        console.log(`Hovered for ${name} at ${price}`);
    }

    return (
        <div ref={hoverRef} className={classes.productCard}>
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