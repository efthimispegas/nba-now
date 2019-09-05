import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../../../Utils/Config';
import Button from '../Buttons/Buttons';
import CardInfo from '../CardInfo/CardInfo';

import style from '../../../App.css';

class NewsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      start: this.props.start,
      end: this.props.start + this.props.amount,
      amount: this.props.amount,
      teams: []
    };
  }

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

    axios.get(`${URL}/articles?_start=${start}&_end=${end}`).then(response => {
      this.setState({
        items: [...this.state.items, ...response.data],
        start,
        end
      });
    });
  }

  loadMore(start, end) {
    this.request(start, end);
  }

  renderNews(type) {
    let template = null;
    switch (type) {
      case 'card':
        template = this.state.items.map((item, i) => {
          return this.state.teams.length !== 0 ? (
            <CSSTransition
              key={i}
              classNames={{
                enter: style.newsList_wrapper,
                enterActive: style.newsList_wrapper_enter
              }}
              timeout={500}
            >
              <div className={style.newslist_item}>
                <Link to={`/articles/${item.id}`}>
                  <CardInfo
                    team={this.state.teams[item.team - 1]}
                    date={item.date}
                  />
                  <h2>{item.title}</h2>
                </Link>
              </div>
            </CSSTransition>
          ) : null;
        });
        break;
      case 'main':
        template = this.state.items.map((item, i) => {
          return this.state.teams.length !== 0 ? (
            <CSSTransition
              key={i}
              classNames={{
                enter: style.newsList_wrapper,
                enterActive: style.newsList_wrapper_enter
              }}
              timeout={500}
            >
              <Link to={`/articles/${item.id}`}>
                <div className={style.newsMain_item}>
                  <div
                    className={style.newsMain_left}
                    style={{
                      background: `url('images/articles/${item.image}')`
                    }}
                  />
                  <div className={style.newsMain_right}>
                    <CardInfo
                      team={this.state.teams[item.team - 1]}
                      date={item.date}
                    />
                    <h2>{item.title}</h2>
                  </div>
                </div>
              </Link>
            </CSSTransition>
          ) : null;
        });
        return template;
      default:
        template = null;
        return template;
    }
  }

  render() {
    return (
      <div>
        <TransitionGroup component="div" className="list">
          {this.renderNews(this.props.type)}
        </TransitionGroup>

        <Button
          type="loadmore"
          loadMore={() =>
            this.loadMore(this.state.end, this.state.end + this.state.amount)
          }
          title="Load More News"
        />
      </div>
    );
  }
}

export default NewsList;
