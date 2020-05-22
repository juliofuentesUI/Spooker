import React , { useEffect, useState, useRef } from 'react';
import classes from './ScrollGallery.module.css';

const ScrollGallery = (props) => {

    const [dynamicHeight, setDynamicHeight] = useState(null);
    const [translateX, setTranslateX] = useState(0);

    const containerRef = useRef(null);
    const carouselRef = useRef(null);


    const calcDynamicHeight = objectWidth => {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        return objectWidth - vw + vh + 150;
    };

    const handleDynamicHeight = (ref) => {
        const objectWidth = ref.current.scrollWidth;
        const dynamicHeight = calcDynamicHeight(objectWidth);
        setDynamicHeight(dynamicHeight);
    };

    const applyScrollListener = (ref) => {
        window.addEventListener('scroll', () => {
            const offsetTop = -ref.current.offsetTop;
            setTranslateX(offsetTop);
        });
    };

    const resizeHandler = () => {
        handleDynamicHeight(carouselRef);
    };

    const horizontalCarouselStyle = {
        transform: `translateX(${translateX})`
    };


    useEffect(() => {
        handleDynamicHeight(carouselRef);
        window.addEventListener('resize', resizeHandler);
        applyScrollListener(containerRef);
    }, []);

    return (
        <div style={tallOuterStyle}>
            <div className={classes.stickyContainer} ref={containerRef}>
                <div className={classes.carousel} ref={carouselRef} style={horizontalCarouselStyle}>
                </div>
            </div>
        </div>
    );
};

export default ScrollGallery;