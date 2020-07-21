import React from 'react';
import { useState , useEffect } from 'react';
import classes from './FloatGallery.module.css';

const FloatGallery = () => {

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