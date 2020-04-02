import React, { Component } from 'react';
// import classes from './Layout.module.css';
//import redux later.

//this component will act as the OVERLAY component responsible for z-index type 
//effects, like a side drawer and toolbar. this wraps everything.

class Layout extends Component {


    render() {
        return (
            <main>
                {this.props.children}
            </main>
        );
    }

};

export default Layout;