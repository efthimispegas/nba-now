import React, { Component } from 'react';
import axios from 'axios';
import { URL } from '../../../Utils/Config';

import NewsHeader from './NewsHeader';
import NewsBody from './NewsBody';
import style from '../../../App.css';

class NewsPost extends Component {
  state = {
    post: '',
    team: ''
  };

  componentWillMount() {
    const id = this.props.match.params.id;
    axios.get(`${URL}/articles/${id}`).then(response => {
      let post = response.data;

      axios.get(`${URL}/teams?id=${post.team}`).then(response => {
        this.setState({
          post,
          team: response.data
        });
      });
    });
  }

  render() {
    const { post, team } = this.state;
    return (
      <div className={style.post_wrapper}>
        <NewsHeader />
        <NewsBody />
      </div>
    );
  }
}

export default NewsPost;
