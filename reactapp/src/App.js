import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

import ScreenHome from './ScreenHome';

function App() {
  return (
      <Router>
        <Switch>
          <Route component={ScreenHome} path="/" exact />
        </Switch>
      </Router>
  );
}
export default App;
