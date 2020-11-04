import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  const { i18n } = useTranslation();
  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

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
