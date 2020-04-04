import React from 'react';
import { useState, useEffect } from 'react';
import Input from './../../components/UI/InputField/Input';
import classes from './SpookerMain.module.css';


const SpookerMain = (props) => {

    console.log('props in spookermain.js', props);
    const [petition, setPetition] = useState('');
    const [question, setQuestion] = useState('');

    const inputHandler = (event) => {
        console.log('event here', event.target.name);
        const inputField = event.target.name;
        const inputValue = event.target.value;

        eval(`set${inputField}(${inputValue})`);
    };

    return (
        <div>
            <Input changed={inputHandler} 
            elementType="input"
            placeholder='Petition' 
            value={petition}
            name='Petition'
            changed={inputHandler}
            />
            <Input changed={inputHandler} 
            elementType="input"
            placeholder='Your question here' 
            value={question}
            name='Question'
            changed={inputHandler}
            />
        </div>
    );
};

export default SpookerMain;

