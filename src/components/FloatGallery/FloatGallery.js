import React from 'react';
import { useState , useEffect } from 'react';
import classes from './FloatGallery.module.css';
import * as actions from './../../store/actions/index';
import { useSelector, useDispatch } from 'react-redux';

const FloatGallery = () => {

    const floatModelImages = useSelector(state => state.modelsFloatGallery);
    const dispatch = useDispatch();

    console.log('VALUE OF floatModelImages IS', floatModelImages);

    useEffect(() => {
        dispatch(actions.initFloatGallery());
    }, [])

    const SamplePictures = Array(5).fill(0).map((element, index) => {
        return <div className={classes.samplePictures} key={`samplePicture-${index}`}></div>
    });

    return (
        <section className={classes.floatGallery}>
            {SamplePictures}
        </section>
    );
};

export default FloatGallery;