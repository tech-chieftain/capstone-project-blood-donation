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

    const NavDesign ='px-2 py-2 lg:px-6  mt-4 md:mt-0 sm:mr-0 md:mr-2 lg:mr-4 text-sm  text-white tracking-wide inline-block border-b-2 border-transparent hover:border-white'
    return (
<Router>
<div classname="flex justify-center flex-wrap">
        <nav>
          <ul className=" text-white sm:flex justify-center flex-wrap ">
            <li className={NavDesign}>
              <Link to="/">Home</Link>
            </li>
            <li className={NavDesign}>
              <Link to="/about">About</Link>
            </li>
            <li className={NavDesign}>
              <Link to="instruction">Instructions</Link>
            </li>
            <li className={NavDesign}>
              <Link to="/process">Process</Link>
            </li>
            <li className={NavDesign}>
              <Link to="/search">Search</Link>
            </li>
            <li className={NavDesign}>
              <Link to="/donate">Donate</Link>
            </li>
          </ul>
        </nav>
          
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