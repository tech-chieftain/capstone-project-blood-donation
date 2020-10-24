import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../../../containers/Home';
import About from '../../../containers/About';
import Instruction from '../../../containers/Instruction';
import Process from '../../../containers/Process';
import Search from '../../../containers/Search';
import Donate from '../../../containers/Donate';

function FooterNav(){
    return (
<Router>
<div classname=" md:flex justify-center flex-wrap">
        <nav>
          <ul className=" text-white md:flex justify-center flex-wrap ">
            <li className="mr-2 hover:bg-blue-500">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-2  hover:bg-blue-500">
              <Link to="/about">About</Link>
            </li>
            <li className="mr-2  hover:bg-blue-500">
              <Link to="instruction">Instructions</Link>
            </li>
            <li className="mr-2  hover:bg-blue-500">
              <Link to="/process">Process</Link>
            </li>
            <li className="mr-2  hover:bg-blue-500">
              <Link to="/search">Search</Link>
            </li>
            <li className="mr-2  hover:bg-blue-500">
              <Link to="/donate">Donate</Link>
            </li>
          </ul>
        </nav>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/instruction">
            <Instruction/>
          </Route>
          <Route path="/process">
            <Process/>
          </Route>
          <Route path="/search">
            <Search/>
          </Route>
          <Route path="/donate">
            <Donate/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>

</Router>
      
    )
}
export default FooterNav