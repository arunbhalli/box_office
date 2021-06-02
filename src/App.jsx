import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Starred from './components/Starred';
function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/stared'>
        <Starred />
      </Route>
      <Route>
        <div>This is 404</div>
      </Route>
    </Switch>
  );
}

export default App;
