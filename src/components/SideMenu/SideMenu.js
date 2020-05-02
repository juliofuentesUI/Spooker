import React, { useState } from 'react';
import classes from './SideMenu.module.css';

const SideMenu = (props) => {

    const [menuClicked, toggleMenu] = useState(false);
    const inputClasses = [classes.headerMenuWrap];

    if (menuClicked) {
        inputClasses.push(classes.active);
    }

    const toggleSideMenu = () => {
        toggleMenu(!menuClicked);
    };


    return (
        <div onClick={toggleSideMenu} className={inputClasses.join(' ')}>
            <span></span>
        </div>
    );
};

export default SideMenu;

        // <div className={classes.headerMenuWrap}>
        //     <div className={classes.headerBurgerMenu}>
        //     </div>
        // </div>