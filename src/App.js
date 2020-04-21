import React, { Component } from 'react';
import classes from './GlobalStyles.css';
import Layout from './hoc/Layout/Layout';
import { Switch, Route } from 'react-router-dom';

class App extends Component {

    state = {
        testing: 'TESTING FOOL'
    }

    render() {

        let routes = (
            <Switch>
                <Route path="/" exact 
                render={(routeProps) => <div>Component goes here</div>} />
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


