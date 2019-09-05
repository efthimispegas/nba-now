import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
