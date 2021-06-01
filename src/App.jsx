import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Stared from './components/Stared'
function App() {
  return (
    <div>
    <Navbar />
      <Switch>
        <Route exact path='/'>
        <Home/>
        </Route>
        <Route exact path='/stared'>
        <Stared/>
        </Route>
        <Route> This is 404</Route>
      </Switch>
    </div>
  );
}

export default App;
