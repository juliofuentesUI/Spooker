import React, { Component } from 'react';
import { Navbar } from '../../components/NavBar/Navbar';
import Footer from '../../components/Footer/Footer.js';
// import classes from './Layout.module.css';
//import redux later.

//this component will act as the OVERLAY component responsible for z-index type 
//effects, like a side drawer and toolbar. this wraps everything.

class Layout extends Component {

    render() {
        return (
            <main>
                <Navbar />
                {this.props.children}
                <Footer />
            </main>
        );
    }

};

export default Layout;