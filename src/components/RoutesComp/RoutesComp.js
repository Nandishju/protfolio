import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { About } from '../about'
import { Home } from '../home'
import { Skills } from '../skills'
import { Products } from '../products'
import { Work } from '../work'
import { Education } from '../education'
import { Contact } from '../contact'
export const RoutesComp = (props) => {
  return (<>
    {/* <Route exact={true} path="/" component={About} /> */}
    <Route exact path="/" component={Home} />
    <Route exact path="/work" component={Work} />
    <Route exact path="/skills" component={Skills} />

    <Route exact path="/education" component={Education} />
    <Route exact path="/contact" component={Contact} /></>)
}
