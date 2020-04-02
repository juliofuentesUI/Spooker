import React from 'react';
import { UseState, UseEffect } from 'react';
import Input from './../../components/UI/InputField/Input';


const SpookerMain = (props) => {

    const inputHandler = (event) => {

    };

    return (
        <div>
            <Input changed={inputHandler} 
            elementType="input"
            type='text' 
            placeHolder='Your question here' 
            value='Temp value' />
        </div>
    );
};

export default SpookerMain;

