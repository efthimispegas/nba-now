import React from 'react';
import style from '../../../App.css';

const PostHeader = props => {
  return (
    <div className={style.articlePostHeader}>
      <div>
        Date:
        <span>{props.date}</span>
      </div>

      {props.author ? (
        <div>
          Author:
          <span>{props.author}</span>
        </div>
      ) : null}
    </div>
  );
};

export default PostHeader;
