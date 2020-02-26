import React from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Next from './Next';


function App() {
  return (
    <div className='App'>
      <h1>Nerd Rich React Starter</h1>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/next' component={Next}/>
        <Route path='*'>
          <Redirect to='/'/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
