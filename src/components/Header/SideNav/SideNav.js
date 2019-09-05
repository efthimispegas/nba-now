import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItems from './SideNavItems';

const SideNavigation = props => {
  return (
    <div>
      <SideNav
        showNav={props.showNav}
        onHideNav={props.onHideNav}
        onShowNav={props.onShowNav}
        navStyle={{
          background: '#242424',
          maxWidth: '220px'
        }}
      >
        <SideNavItems onHideNav={props.onHideNav} />
      </SideNav>
    </div>
  );
};

export default SideNavigation;
