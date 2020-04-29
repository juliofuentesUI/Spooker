import React from 'react';
import classes from './Navbar.module.css';
import Spooker from '../../assets/favicon/Spooker.png';

export const Navbar = () => {
    return (
            <header>
                <div className={classes.headerNavTop}>
                    <p>LICORIS</p>
                    <nav>
                        <ul className={classes.navLinks}>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">SHOP</a></li>
                            <li><a href="#">ORDER</a></li>
                        </ul>
                    </nav>
                    <a><button>CONTACT ME</button></a>
                </div>
                <div className={classes.headerNavBottom}>

                </div>
            </header>
    );
};