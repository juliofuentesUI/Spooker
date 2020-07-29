import React , { useEffect, useState, useRef } from 'react';
import classes from './ScrollGallery.module.css';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './../../store/actions/index';

const ScrollGallery = (props) => {

    const testValue = 'testing render';
    const [dynamicHeight, setDynamicHeight] = useState(0);
    const [translateX, setTranslateX] = useState(0);

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
                //if initial offset was -459px, this would mean offsetTop is now -460px
                let difference = Math.abs(offsetTop - initialOffset);
                setTranslateX(-difference);
            }
            // console.log(`translateX state value before : ${translateX}`);
            // setTranslateX(offsetTop);
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
    // const SampleCards = Array(5).fill(0).map((element, index) => {
    //     return <div className={classes.sampleCard} key={`sampleCard-${index}`} ></div>;
    // });

    useEffect(() => {
        dispatch(actions.initFloatGallery());
        window.addEventListener('resize', resizeHandler);
        applyScrollListener(containerRef);
    }, []);

    useEffect(() => {
        if (floatModelImages !== null) {
            handleDynamicHeight(carouselRef);
            console.log('HANDLE-DYNAMIC Line 81');
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
        floatGallery = <p>LOADING.....</p>
    }

    return (
        <div style={tallOuterStyle}>
            <div className={classes.stickyContainer} ref={containerRef}>
                <div className={classes.carousel} ref={carouselRef} style={horizontalCarouselStyle} >
                    <div className={classes.cardContainer}>
                        {floatGallery}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollGallery;