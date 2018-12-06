import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Layout from './components/HOC/Layout/Layout';
import ArticlesPost from './components/Articles/News/ArticlesPost';

class Routes extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/articles/:id" exact component={ArticlesPost} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
