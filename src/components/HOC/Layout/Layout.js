import React from 'react';

import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

class Layout extends React.Component {
  state = {
    showNav: false
  };

  toggleSideNav(action) {
    this.setState({
      showNav: action
    });
  }

  render() {
    return (
      <div>
        <Header
          showNav={this.state.showNav}
          onHideNav={() => this.toggleSideNav(false)}
          onOpenNav={() => this.toggleSideNav(true)}
        />

        {this.props.children}

        <Footer />
      </div>
    );
  }
}

export default Layout;
