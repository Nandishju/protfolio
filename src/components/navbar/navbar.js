import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { About } from '../about';
import { Blogs } from '../blogs';
import { Contact } from '../contact';
import { Products } from '../products';
import { Work } from '../work';
import './navbar.scss'


export default class NavBar extends React.Component {


  render() {
    return (
      <div>
        <Router>
               <div class="wrapper">
          <header id="header" class="header">
            <div class="container" id="header-inner">
              <div class="row">

                <div id="header-left" class="clearfix">
                  <div id="logo" class="logo">
                    <a href="#">
                      <img src=""
                        alt="logo" id="logo-img" class="logo-img" height="35" width="150" />
                    </a>
                  </div>
                </div>

                <div id="header-right">
                  <nav class="navbar navbar-default" id="">

                    <div class="navbar-header">
                      <a class="navbar-brand" href="#">Portfolio</a>
                      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-main">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                    </div>


                    <div class="gnav collapse navbar-collapse" id="navbar-main">
                      <ul class="nav navbar-nav navbar-right">
                        <li class="dropdown active">
                        <Link to="/contact">About</Link>
                          {/* <a class="" data-toggle="dropdown" href="#about">About <i></i></a> */}

                          <ul class="dropdown-menu">
                            <li>
                              <a class="" href='#'>Graduation<i class=""></i></a>
                              <ul class="sub-dropdown">
                                <li><a href="#">Major</a></li>
                                <li><a href="#">Minor</a></li>
                              </ul>
                            </li>
                            <li>
                              <a class="" href='#'>School <i class=""></i></a>
                              <ul class="sub-dropdown">
                                <li><a href="#">Secondary</a></li>
                                <li><a href="#">Primary</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li class="dropdown">
                          <a class="" data-toggle="dropdown" href="#blogs">Blogs <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                          <ul class="dropdown-menu">
                            <li>
                              <a class="" href='#'>Technical <i class=""></i></a>
                              <ul class="sub-dropdown">
                                <li><a href="#">JS</a></li>
                                <li><a href="#">React</a></li>
                                <li><a href="#">Vue</a></li>
                              </ul>
                            </li>
                            <li>
                              <a class="" href='#'>Non Tech <i class=""></i></a>
                              <ul class="sub-dropdown">
                                <li><a href="#">Arts</a></li>
                                <li><a href="#">Health</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li class="dropdown">
                          <a class="" data-toggle="dropdown" href="#work">Work <i></i></a>
                          <ul class="dropdown-menu">
                            <li><a class="" href='#'>Prof Experice</a></li>
                            <li><a class="" href='#'>Personal learning</a></li>
                          </ul>
                        </li>
                        <li class="dropdown">
                          <a class="" data-toggle="dropdown" href="#products">Products <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                          <ul class="dropdown-menu">
                            <li>
                              <a class="" href='#'>Technical <i class=""></i></a>
                              <ul class="sub-dropdown">
                                <li><a href="#">Simple</a></li>
                                <li><a href="#">Moderate</a></li>
                              </ul>
                            </li>
                            <li>
                              <a class="" href='#'>Non Tech <i class=""></i></a>
                              <ul class="sub-dropdown">
                                <li><a href="#">General</a></li>
                                <li><a href="#">Specific</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li class="dropdown">
                          <a class="" data-toggle="dropdown" href="#contact">contact <i></i></a>
                          <ul class="dropdown-menu">
                            <li><a class="" href='#'>Primary</a></li>
                            <li><a class="" href='#'>Secondary</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                  </nav>
                </div>
              </div>
            </div>

          </header>


        </div>
        <Switch>
                <Route exact path="/about">
                  <About />
                </Route>
                <Route path="/blogs">
                  <Blogs />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/products">
                  <Products />
                </Route>
                <Route path="/work">
                  <Work />
                </Route>
              </Switch>

       </Router> <div>
          {false &&
            <Router>
              <nav id='nav'>
                <div class="nav-center">

                  <div class="nav-header">
                    <img src="./logo.svg" alt="logo" class="logo" />
                    <button class="nav-toggle">
                      <div class="fas fa-bars">

                      </div>
                    </button>
                  </div>
                  <div class="links-container">
                    <ul className="links">
                      <li>
                        <Link to="/">About</Link>
                      </li>
                      <li>
                        <Link to="/blogs">blog</Link>
                      </li>
                      <li>
                        <Link to="/contact">contact</Link>
                      </li>
                      <li>
                        <Link to="/products">products</Link>
                      </li>
                      <li>
                        <Link to="/work">work</Link>
                      </li>
                    </ul>

                  </div>
                </div>
              </nav>


              {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
              <Switch>
                <Route exact path="/">
                  <About />
                </Route>
                <Route path="/blogs">
                  <Blogs />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/products">
                  <Products />
                </Route>
                <Route path="/work">
                  <Work />
                </Route>
              </Switch>

            </Router>

          }
        </div>
      </div>
    );
  }
}
