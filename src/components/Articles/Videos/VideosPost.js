import React, { Component } from 'react';
import axios from 'axios';
import { URL } from '../../../Utils/Config';

import ArticlesHeader from '../News/ArticlesHeader';
import VideosBody from './VideosBody';
import style from '../../../App.css';

class VideosPost extends Component {
  state = {
    post: '',
    team: ''
  };

  componentWillMount() {
    const id = this.props.match.params.id;
    axios.get(`${URL}/videos/${id}`).then(response => {
      let post = response.data;

      axios.get(`${URL}/teams?id=${post.team}`).then(response => {
        this.setState({
          post,
          team: response.data[0]
        });
      });
    });
  }

  render() {
    const { post, team } = this.state;
    return (
      <div className={style.post_wrapper}>
        <ArticlesHeader teamData={team} date={post.date} author={null} />
        <VideosBody post={post} team={team} />
      </div>
    );
  }
}

export default VideosPost;
