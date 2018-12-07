import React, { Component } from 'react';
import axios from 'axios';
import { URL } from '../../../Utils/Config';

import ArticlesHeader from './ArticlesHeader';
import ArticlesBody from './ArticlesBody';
import style from '../../../App.css';

class ArticlesPost extends Component {
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
          team: response.data[0]
        });
      });
    });
  }

  render() {
    const { post, team } = this.state;
    console.log(post, team);
    return (
      <div className={style.post_wrapper}>
        <ArticlesHeader teamData={team} date={post.date} author={post.author} />
        <ArticlesBody postData={post} />
      </div>
    );
  }
}

export default ArticlesPost;
