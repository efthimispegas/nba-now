import React from 'react';
import { Link } from 'react-router-dom';

import style from '../../../App.css';

const Buttons = props => {
  let template = null;

  switch (props.type) {
    case 'loadmore':
      template = (
        <div className={style.blue_btn} onClick={props.loadMore}>
          {props.title}
        </div>
      );
      return template;

    default:
      template = null;
      return template;
  }
};

export default Buttons;
