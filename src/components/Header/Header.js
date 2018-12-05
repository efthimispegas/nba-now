import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import SideNavigation from './SideNav/SideNav';
import style from '../../App.css';

const Header = props => {
  const navBars = () => {
    return (
      <div className={style.bars}>
        <FontAwesome
          name="bars"
          onClick={props.onOpenNav}
          style={{
            color: '#dfdfdf',
            padding: '15px 0px 0px 10px',
            cursor: 'pointer'
          }}
        />
      </div>
    );
  };

  const logo = () => {
    return (
      <Link to="/" className={style.logo}>
        <img alt="nba_logo" src="\images\nba_logo.png" />
      </Link>
    );
  };

  return (
    <header className={style.header}>
      <SideNavigation {...props} />
      <div className={style.headerOpt}>
        {navBars()}
        {logo()}
      </div>
    </header>
  );
};

export default Header;
