// import React, { Component } from 'react';
import React, { useState } from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from './logic/calculate';
import './App.css';
import Home from './Home';
import Quote from './Quote';
import Navigation from './Navigation';

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

  const handleClick = (btn) => {
    setState(calculate(state, btn));
  };

  return (
    // <>
      // <div>
      //   <Display result={`${state.total} ${state.operation} ${state.next}`} />
      //   <ButtonPanel clickHandler={handleClick} />
      // </div>
    // </>
    <Router>
      <>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route 
            exact 
            path='/calculatrice'
            render={
                      () => (      
                              <div>
                                <Display result={`${state.total} ${state.operation} ${state.next}`} />
                                <ButtonPanel clickHandler={handleClick} />
                              </div>
                            )
                    }
          />
          <Route exact path='/quotes' component={Quote} />
        </Switch>
      </>
    </Router>
  );
};

export default App;
