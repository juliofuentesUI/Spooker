import React, { Component } from 'react';
import classes from './GlobalStyles.css';
import Layout from './hoc/Layout/Layout';
import { Switch, Route } from 'react-router-dom';
import Shop from './containers/Shop/Shop';
import ScrollGallery from './components/ScrollGallery/ScrollGallery';
import FloatGallery from './components/FloatGallery/FloatGallery';

class App extends Component {

    state = {
        testing: 'TESTING '
    }

    render() {

        let routes = (
            <Switch>
                <Route path="/Shop" exact 
                component={Shop} />
            </Switch>
        );

        return (
            <div>
                <Layout>
                    {/* <FloatGallery /> */}
                    <ScrollGallery />
                    {routes}
                    {/* routes will be rendered here, but despite what routes load
                    ill always want the navbar , so put the navbar INSIDE layout.  */}
                </Layout>
            </div>
        );
    }
};

export default App;


