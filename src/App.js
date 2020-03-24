import React, { Component } from 'react';
import SVG from './assets/webpack.svg';

class App extends Component {

    state = {
        testing: 'nothing'
    }

    render() {
        return (
            <div>
                <p>Testing new shit</p>
                <img src={SVG} />
            </div>
        );
    }
};

export default App;