import React from 'react';
import classes from './Carousel.module.css';

const Carousel = (props) => {

    return (
        <div>
            <div className={classes.carousel} ref={props.carouselRef} style={props.horizontalCarouselStyle}>
            </div>
        </div>
    );
};

export default Carousel;