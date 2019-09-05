import React from 'react';
import style from '../../App.css';
import { Link } from 'react-router-dom';

import { CURRENT_YEAR } from '../../Utils/Config';

const Footer = () => {
  return (
    <div className={style.footer}>
      <Link to="/" className={style.logo}>
        <img alt="nba_logo" src="images/nba_logo.png" />
      </Link>
      <div className={style.copyrights}>
        @NBA {CURRENT_YEAR} Copyright © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
