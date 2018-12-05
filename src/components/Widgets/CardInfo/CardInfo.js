import React from 'react';
import FontAwesome from 'react-fontawesome';

import style from '../../../App.css';

const CardInfo = props => {
  return (
    <div className={style.cardInfo}>
      <span className={style.teamName}>{props.team.name}</span>
      <span className={style.date}>
        <FontAwesome name="clock-o" />
        {props.date}
      </span>
    </div>
  );
};

export default CardInfo;
