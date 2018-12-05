import React from 'react';
import NewsSlider from '../Widgets/NewsSlider/Slider';
import NewsList from '../Widgets/NewsList/NewsList';
import VideosList from '../Widgets/VideosList/VideosList';

class Home extends React.Component {
  render() {
    return (
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
        <NewsList type="card" loadmore={true} start={3} amount={3} />

        <VideosList
          type="card"
          title={true}
          loadmore={true}
          start={1}
          amount={3}
        />
      </div>
    );
  }
}

export default Home;
