import './App.css';
import React, { Component } from 'react';

import Display from './Display';
import ButtonPanel from './ButtonPanel';
// import calculate from './logic/calculate';

// const App = () => (
//   <>
//     <Display />
//     <ButtonPanel />
//   </>
// );

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: '',
      operation: '',
    }
  }

  render() {
    return (
      <>
        <Display />
        <ButtonPanel />
      </>
    );
  }
}

export default App;
