import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';


import Home from './components/Home';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/Pokemon' component={Pokemon}/>
      </Switch>
    </div>
  );
}

export default App;
