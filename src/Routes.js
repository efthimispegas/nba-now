import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Layout from './components/HOC/Layout/Layout';
import ArticlesPost from './components/Articles/News/ArticlesPost';
import VideosPost from './components/Articles/Videos/VideosPost';
import NewsList from './components/Widgets/NewsList/NewsList';
import VideosList from './components/Widgets/VideosList/VideosList';
import NewsSlider from './components/Widgets/NewsSlider/Slider';

class Routes extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/news"
            exact
            render={() => (
              <div>
                <NewsSlider
                  type="featured"
                  start={0}
                  end={4}
                  settings={{
                    dots: false //here i can pass any settings I want
                    //and they will overwrite the defaults in the child component
                  }}
                />
                <NewsList type="main" loadmore={true} start={0} amount={10} />
              </div>
            )}
          />
          <Route
            path="/videos"
            exact
            render={() => (
              <VideosList
                type="card"
                title={true}
                loadmore={true}
                start={1}
                amount={3}
              />
            )}
          />
          <Route path="/articles/:id" exact component={ArticlesPost} />
          <Route path="/videos/:id" exact component={VideosPost} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
