import React from 'react';
import style from '../../../App.css';
import TeamHeader from './TeamHeader';
import PostHeader from './PostHeader';

const ArticlesHeader = props => {
  const teamInfo = team => {
    return team ? <TeamHeader team={team} /> : null;
  };

  const postInfo = (date, author) => {
    return props.teamData ? <PostHeader date={date} author={author} /> : null;
  };

  return (
    <div>
      {teamInfo(props.teamData)} {postInfo(props.date, props.author)}
    </div>
  );
};

export default ArticlesHeader;
