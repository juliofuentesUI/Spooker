import React , { useEffect } from 'react';
import Products from './Products/Products';

const Shop = (props) => {

    let data = null;

    useEffect(() => {
        //because of empty 2nd arg, this will 
        // only run once like component did mount
        fetch('http://localhost:8080/featuredClothes')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log('data received', data);
        })
        .catch(error => {
            console.log('fetch failed', error);
        });

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