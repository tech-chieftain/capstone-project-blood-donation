import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/main.css';
import Home from './containers/Home';
import About from './containers/About';
import Instructions from './containers/Instruction';
import Process from './containers/Process';
import Search from './containers/Search';
import Donate from './containers/Donate';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Instructions" component={Instructions} />
        <Route path="/Process" component={Process} />
        <Route path="/Search" component={Search} />
        <Route path="/Donate" component={Donate} />
      </Switch>
    </Router>
  );
}

export default App;
