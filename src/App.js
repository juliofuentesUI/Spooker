import React, { Component } from 'react';
import SVG from './assets/webpack.svg';

class App extends Component {

    state = {
        testing: 'nothing'
    }

    render() {
        return (
            <div>
                <p>Testing new new shit</p>
                <img src={SVG} />
                <h1>We are in {process.env.NODE_ENV} mode </h1>
            </div>
        );
    }
};

export default App;


