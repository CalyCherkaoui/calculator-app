import React, { useState } from 'react';
import { Route, StaticRouter as Router, Switch } from 'react-router-dom';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from './logic/calculate';
import './App.css';
import Home from './Home';
import Quote from './Quote';
import Navigation from './Navigation';

const App = () => {
  const [state, setState] = useState({ total: '', next: '', operation: '' });

  const handleClick = (btn) => {
    setState(calculate(state, btn));
  };

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/calculator"
          render={
                    () => (
                      <div className="calculator">
                        <Display result={`${state.total} ${state.operation} ${state.next}`} />
                        <ButtonPanel clickHandler={handleClick} />
                      </div>
                    )
                  }
        />
        <Route exact path="/quote" component={Quote} />
      </Switch>
    </Router>
  );
};

export default App;
