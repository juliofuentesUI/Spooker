import React, { Component } from 'react';
import classes from './GlobalStyles.css';
import Layout from './hoc/Layout/Layout';
import { Switch, Route } from 'react-router-dom';
import Shop from './containers/Shop/Shop';

class App extends Component {

    state = {
        testing: 'TESTING '
    }

    render() {

        let routes = (
            <Switch>
                <Route path="/" exact 
                component={Shop} />
            </Switch>
        );

        return (
            <div>
                <Layout>
                    {routes}
                    {/* routes will be rendered here, but despite what routes load
                    ill always want the navbar , so put the navbar INSIDE layout.  */}
                </Layout>
            </div>
        );
    }
};

export default App;


