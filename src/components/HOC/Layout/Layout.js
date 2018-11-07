import React from 'react';

import './Layout.css';

class Layout extends React.Component {

    state = {

    };

    render() {
        return (
            <div>
                
                {this.props.children}
            </div>
        );
    }
}

export default Layout;