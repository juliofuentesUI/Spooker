import React from 'react';
import classes from './Navbar.module.css';
import SideMenu from './../SideMenu/SideMenu';

export const Navbar = () => {
    return (
            <header>
                <div className={classes.headerNavTop}>
                    <p>LYCORIS</p>
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
                    <SideMenu />
                </div>
            </header>
    );
};