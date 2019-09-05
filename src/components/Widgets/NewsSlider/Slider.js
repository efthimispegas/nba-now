import React from 'react';
import SliderTemplates from './SliderTemplates';
import axios from 'axios';

class NewsSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: []
    };
  }

  componentWillMount() {
    const { start, end } = this.props;
    axios
      .get(`http://localhost:3004/articles?_start=${start}&_end=${end}`)
      .then(response => {
        //console.log(response.data);
        this.setState({
          news: response.data
        });
      });
  }
  render() {
    const { type, settings } = this.props;
    return (
      <div>
        <SliderTemplates
          data={this.state.news}
          type={type}
          settings={settings}
        />
      </div>
    );
  }
}

export default NewsSlider;
