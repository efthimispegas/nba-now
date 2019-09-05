import React, { Component } from 'react';
import axios from 'axios';
import { URL } from '../../../Utils/Config';
import { Link } from 'react-router-dom';
import CardInfo from '../../Widgets/CardInfo/CardInfo';
import style from '../../../App.css';

class VideosBody extends Component {
  state = {
    teams: [],
    videos: []
  };

  getRelatedVids = () => {
    const related = this.state.videos.filter(video =>
      video.tags.some(tag => {
        return tag === this.props.team.name || tag === this.props.team.city;
      })
    );
    // console.log(related);
    return related.map((vid, i) => {
      return (
        <Link to={`/videos/${vid.id}`} key={i}>
          <div className={style.videoList_vid}>
            <div
              className={style.left}
              style={{ background: `url('images/videos/${vid.image}')` }}
            >
              <div />
            </div>

            <div className={style.right}>
              <CardInfo
                teams={this.state.teams}
                team={this.state.teams[vid.team - 1]}
                date={vid.date}
              />
              <h2>{vid.title}</h2>
            </div>
          </div>
        </Link>
      );
    });
  };

  componentDidMount() {
    if (this.state.videos.length === 0) {
      axios.get(`${URL}/videos`).then(response => {
        this.setState({
          videos: response.data
        });
      });
    }
    if (this.state.teams.length === 0) {
      axios.get(`${URL}/teams`).then(response => {
        this.setState({
          teams: response.data
        });
      });
    }
  }

  render() {
    const { post, team } = this.props;
    const { related } = this.state;

    return (
      <div className={style.videoWrapper}>
        <h1>{post.title}</h1>
        <iframe
          title="videoplayer"
          width="100%"
          height="300px"
          src={`https://youtube.com/embed/${post.url}`}
        />
        {this.getRelatedVids()}
      </div>
    );
  }
}
export default VideosBody;
