import React, { Component } from 'react';
import { Navbar } from './components/NavBar/Navbar';
import classes from './GlobalStyles.css';
import Layout from './hoc/Layout/Layout';

class App extends Component {

    state = {
        testing: 'TESTING FOOL'
    }

    render() {
        return (
            <div>
                <Layout>
                    <Navbar />
                </Layout>
            </div>
        );
    }
};

export default App;


