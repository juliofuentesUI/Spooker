import React, { Component } from 'react';
import SVG from './assets/webpack.svg';
import { Navbar } from './components/NavBar/Navbar';
import classes from './App.css';

class App extends Component {

    state = {
        testing: 'TESTING FOOL'
    }

    render() {
        return (
            <div>
                <Navbar />
                <p>Testing new new yooo</p>
                <img src={SVG} />
                <h1 className={classes.para1}>We are in {process.env.NODE_ENV} mode </h1>
            </div>
        );
    }
};

export default App;


