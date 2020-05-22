import React , { useEffect, useState, useRef } from 'react';
import classes from './ScrollGallery.module.css';

const ScrollGallery = (props) => {

    console.log('classes.sampleCard', classes.sampleCard);
    
    const [dynamicHeight, setDynamicHeight] = useState(2000);
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

    const tallOuterStyle = {
        height: `${dynamicHeight}px`
    };
    
    // const SampleCards = React.memo(() => {
    //     return Array(5).fill(0).map((element, index) => {
    //         return <div className={classes.sampleCard} key={`sampleCard-${index}`}></div>
    //     });
    // })

    useEffect(() => {
        // using fixedDynamicHeight by setting  state to 2000px for testing.
        // handleDynamicHeight(carouselRef);
        // random comment
        window.addEventListener('resize', resizeHandler);
        applyScrollListener(containerRef);
    }, []);

    return (
        <div style={tallOuterStyle}>
            <div className={classes.stickyContainer} ref={containerRef}>
                <div className={classes.carousel} ref={carouselRef} style={horizontalCarouselStyle} >
                    {/* picture cards go here */}
                    <div className={classes.cardContainer}>
                        <div className={classes.sampleCard}></div>
                        <div className={classes.sampleCard}></div>
                        <div className={classes.sampleCard}></div>
                        <div className={classes.sampleCard}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollGallery;