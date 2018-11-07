import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Layout from './components/HOC/Layout/Layout';

class Routes extends React.Component {

    render() {
        return (

            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </Layout>
        );
    }
}

export default Routes;