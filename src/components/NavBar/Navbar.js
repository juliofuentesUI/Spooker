import React from 'react';
import classes from './Navbar.module.css';
import Spooker from '../../assets/favicon/Spooker.png';

export const Navbar = () => {
    return (
            <header>
                <img className={classes.logo} src={Spooker} alt="Ghost" />
                <nav>
                    <ul className={classes.navLinks}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Secret</a></li>
                    </ul>
                </nav>
                <a><button>Contact Me</button></a>
            </header>
    );
};