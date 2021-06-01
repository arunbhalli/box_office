import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
    <Navbar />
      <Switch>
        <Route exact path='/'>
          This is home page
        </Route>
        <Route exact path='/stared'>
          This is stared page
        </Route>
        <Route> This is 404</Route>
      </Switch>
    </div>
  );
}

export default App;
