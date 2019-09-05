import React from 'react';
import style from '../../../App.css';

const ArticlesBody = props => {
  return (
    <div className={style.articleBodyHeader}>
      <h1>{props.postData.title}</h1>
      <div
        className={style.articleBodyImage}
        style={{
          background: `url('/images/articles/${props.postData.image}')`
        }}
      />
      <div className={style.articleBodyText}>{props.postData.body}</div>
    </div>
  );
};

export default ArticlesBody;
