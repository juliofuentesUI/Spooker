import React , { useEffect, useState, useRef } from 'react';
import classes from './ScrollGallery.module.css';

const ScrollGallery = (props) => {

    const [dynamicHeight, setDynamicHeight] = useState(0);
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
        console.log(`scrollWidth of carousel is ${objectWidth}`);
        const dynamicHeight = calcDynamicHeight(objectWidth);
        setDynamicHeight(dynamicHeight);
    };

    const applyScrollListener = (ref) => {
        window.addEventListener('scroll', () => {
            const offsetTop = -ref.current.offsetTop;
            console.log(`offsettop of stickyContainer: ${offsetTop}`);
            // console.log(`translateX state value before : ${translateX}`);
            setTranslateX(offsetTop);
            // console.log(`translateX state value after : ${translateX}`);
        });
    };

    const resizeHandler = () => {
        handleDynamicHeight(carouselRef);
    };

    const horizontalCarouselStyle = {
        transform: `translateX(${translateX}px)`
    };

    const tallOuterStyle = {
        height: `${dynamicHeight}px`
    };
    
    const SampleCards = Array(5).fill(0).map((element, index) => {
        return <div className={classes.sampleCard} key={`sampleCard-${index}`} ></div>;
    });

    useEffect(() => {
        // using fixedDynamicHeight by setting  state to 2000px for testing.
        handleDynamicHeight(carouselRef);
        window.addEventListener('resize', resizeHandler);
        applyScrollListener(containerRef);
    }, []);

    return (
        <div style={tallOuterStyle}>
            <div className={classes.stickyContainer} ref={containerRef}>
                <div className={classes.carousel} ref={carouselRef} style={horizontalCarouselStyle} >
                    {/* picture cards go here */}
                    <div className={classes.cardContainer}>
                        {SampleCards}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollGallery;