import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    //configure Input field and styling based on props.   
    //as use cases grow, for example select option elements. add them here.
    console.log('props in input.js', props);
    let inputElement = null;

    switch(props.elementType) {
        case ('input'):
            inputElement = <input 
                onChange={props.changed}
                className={classes.Input}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
            />
            break;
        default:
            inputElement = null;
    }

    return (
        <React.Fragment>
            {inputElement}
            <p> I AM FROM input.js</p>
        </React.Fragment>
    );
};

export default Input;