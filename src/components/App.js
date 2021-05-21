import './App.css';
import React, { Component } from 'react';

import Display from './Display';
import ButtonPanel from './ButtonPanel';
// import calculate from './logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    /* eslint-disable react/no-unused-state */
    this.state = {
      total: '0',
      next: '',
      operation: '',
    };
  }

  render() {
    return (
      <>
        <Display result={this.state} />
        <ButtonPanel />
      </>
    );
  }
}

export default App;
