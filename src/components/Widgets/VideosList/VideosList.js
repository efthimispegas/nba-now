import React, { Component } from 'react';
import style from '../../../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../../../Utils/Config';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Button from '../Buttons/Buttons';
import CardInfo from '../CardInfo/CardInfo';

class VideosList extends Component {
  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }

  request(start, end) {
    if (this.state.teams.length === 0) {
      axios.get(`${URL}/teams`).then(response => {
        this.setState({
          teams: response.data
        });
      });
    }

    axios.get(`${URL}/videos?_start=${start}&_end=${end}`).then(response => {
      this.setState({
        videos: [...this.state.videos, ...response.data],
        start,
        end
      });
    });
  }

  loadMore(start, end) {
    this.request(start, end);
  }

  renderVideos(type) {
    let template = null;
    switch (type) {
      case 'card':
        template = this.state.videos.map((vid, i) => {
          if (this.state.teams.length > 0) {
            return (
              <CSSTransition
                key={i}
                classNames={{
                  enter: style.videoList_wrapper,
                  enterActive: style.videoList_wrapper_enter
                }}
                timeout={500}
              >
                <Link to={`/videos/${vid.id}`}>
                  <div className={style.videoList_vid}>
                    <div
                      className={style.left}
                      style={{ background: `url(images/videos/${vid.image})` }}
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
              </CSSTransition>
            );
          }
        });
        break;

      default:
        template = null;
        break;
    }

    return template;
  }

  render() {
    return (
      <div>
        <div className={style.videoList_title}>
          {this.props.title ? (
            <h3>
              <strong>NBA</strong> Videos
            </h3>
          ) : null}

          <TransitionGroup component="div" className="list">
            {this.renderVideos(this.props.type)}
          </TransitionGroup>

          {this.props.loadmore ? (
            <Button
              type="loadmore"
              loadMore={() =>
                this.loadMore(
                  this.state.end,
                  this.state.end + this.state.amount
                )
              }
              title="Watch More Videos"
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default VideosList;
