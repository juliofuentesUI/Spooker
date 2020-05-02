import React, { useState } from 'react';
import classes from './SideMenu.module.css';

const SideMenu = (props) => {

    const [menuClicked, toggleMenu] = useState(false);
    const inputClasses = [classes.headerMenuWrap];
    const hiddenMenuClasses = [classes.menu];

    if (menuClicked) {
        inputClasses.push(classes.active);
        hiddenMenuClasses.push(classes.active);
    }

    const toggleSideMenu = () => {
        toggleMenu(!menuClicked);
    };


    return (
        <React.Fragment>
            <div onClick={toggleSideMenu} className={inputClasses.join(' ')}>
                <span></span>
            </div>
            <div className={hiddenMenuClasses.join(' ')}>
                <a href="#">LINK 1</a>                
                <a href="#">LINK 2</a>                
                <a href="#">LINK 3</a>                
            </div>
        </React.Fragment>
    );
};

export default SideMenu;