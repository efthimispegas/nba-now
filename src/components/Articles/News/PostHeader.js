import React from 'react';
import style from '../../../App.css';

const PostHeader = props => {
  console.log(props);
  return (
    <div className={style.articlePostHeader}>
      <div>
        Date:
        <span>{props.date}</span>
      </div>
      <div>
        Author:
        <span>{props.author}</span>
      </div>
    </div>
  );
};

export default PostHeader;
