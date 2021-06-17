// import React, { Component } from 'react';
import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from './logic/calculate';
import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     /* eslint-disable react/no-unused-state */
//     this.state = {
//       total: '0',
//       next: '',
//       operation: '',
//     };

//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(btn) {
//     this.setState(
//       (state) => {
//         const data = { total: state.total, next: state.next, operation: state.operation };
//         return calculate(data, btn);
//       },
//     );
//   }

//   render() {
//     return (
//       <>
//         <Display result={this.state} />
//         <ButtonPanel clickHandler={this.handleClick} />
//       </>
//     );
//   }
// }

const App = () => {
  const [state, setState] = useState({ total: '', next: '', operation: '' });

  const handleClick = btn => {
    setState(calculate(state, btn));
  }
  return <div>app</div>;
};

export default App;
