import './App.css';
import React from 'react';
import { Component } from 'react';
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
  };

  render() {
    <>
      <Display />
      <ButtonPanel />
    </>
  };
};
export default App;
