import React from 'react';
import classes from './Footer.module.css';

const Footer = (props) => {
    return (
        <div className={classes.FooterParent}>
            <div>FOOTER GOES HERE</div>
            <p> i am child 2</p>
        </div>
    );
};

export default Footer;