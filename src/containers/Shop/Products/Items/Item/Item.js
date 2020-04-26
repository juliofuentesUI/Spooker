import React from 'react';

const Item = ({ name, imageUrl, price}) => {
    console.log('I AM ITEM.JS');
    console.log('This is name', name);
    console.log('This is imageUrl', imageUrl);
    return (
        <div>
            <img src={imageUrl} />
            <p>{name}</p>
            <p>{price}</p>
        </div>
    );
};

export default Item;