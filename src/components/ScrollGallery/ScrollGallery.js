import React , { useEffect, useState, useRef } from 'react';
import classes from './ScrollGallery.module.css';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './../../store/actions/index';

const ScrollGallery = (props) => {

    const [dynamicHeight, setDynamicHeight] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [isFloatMode, setFloatMode] = useState(false);

    let carouselClasses;

    if (isFloatMode) {
        carouselClasses = [classes.carousel, classes.floatMode];
    } else {
        carouselClasses = [classes.carousel];
    }

    console.log('isFloatMode', isFloatMode);

    const floatModelImages = useSelector(state => state.modelsFloatGallery);
    const dispatch = useDispatch();

    const containerRef = useRef(null);
    const carouselRef = useRef(null);


    const calcDynamicHeight = objectWidth => {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        console.log('objectWidth is ', objectWidth);
        console.log('innerWidth is ', vw);
        console.log('innerHeight is ', vh);
        // console.log('objectWidth - vw + vh + 150 is ', objectWidth - vw + vh + 350);
        return objectWidth - vw + vh + 650;
    };

    const handleDynamicHeight = (ref) => {
        const objectWidth = ref.current.scrollWidth;
        console.log(`scrollWidth of carousel is ${objectWidth}`);
        const dynamicHeight = calcDynamicHeight(objectWidth);
        setDynamicHeight(dynamicHeight);
    };
    
    const applyScrollListener = (ref) => {
        const initialOffset = -ref.current.offsetTop;
        window.addEventListener('scroll', () => {
            const offsetTop = -ref.current.offsetTop;
            console.log(`offsettop of stickyContainer: ${offsetTop}`);
            if (offsetTop < initialOffset) {
                setFloatMode(false);
                let difference = Math.abs(offsetTop - initialOffset);
                setTranslateX(-difference);
            } else {
                setFloatMode(true);
            }   
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

    useEffect(() => {
        dispatch(actions.initFloatGallery());
        window.addEventListener('resize', resizeHandler);
        applyScrollListener(containerRef);
        // REMOVE SCROLL-LISTENER if this component UNMOUNTS in the future. 
        // The unmounting work is done via a return () => //callback function inside useEffect
    }, []);

    useEffect(() => {
        if (floatModelImages !== null) {
            handleDynamicHeight(carouselRef);
            setFloatMode(true);
        }
    }, [floatModelImages]);

    let floatGallery;
    if (floatModelImages) {
        floatGallery = floatModelImages.map((model, index) => {
            return (
                <li key={`${model}-${index}`}>
                    <img className={classes.modelPictures}  src={model.imageUrl}></img>
                </li>
            )
        });
    } else {
        floatGallery = <p>LOADING...</p>
    }

    return (
        <div style={tallOuterStyle}>
            <div className={classes.stickyContainer} ref={containerRef}>
                <div className={carouselClasses.join(' ')} ref={carouselRef} style={horizontalCarouselStyle} >
                    <div className={classes.cardContainer}>
                        {floatGallery}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollGallery;