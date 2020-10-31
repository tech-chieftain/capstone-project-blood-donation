import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/main.css';
import Home from './containers/Home';
import About from './containers/About';
import Instructions from './containers/Instruction';
import Process from './containers/Process';
import Search from './containers/Search';
import Donate from './containers/Donate';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Instructions" component={Instructions} />
        <Route path="/Process" component={Process} />
        <Route path="/Search" component={Search} />
        <Route path="/Donate" component={Donate} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
