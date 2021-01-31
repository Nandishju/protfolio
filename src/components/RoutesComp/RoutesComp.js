import React from 'react'
import {
  Route,
} from "react-router-dom";
import { Home } from '../home'
import { Skills } from '../skills'

import { Work } from '../work'
import { Education } from '../education'
import { Contact } from '../contact'
export const RoutesComp = (props) => {
  return (<>
    <Route exact path="/" component={Home} />
    <Route exact path="/work" component={Work} />
    <Route exact path="/skills" component={Skills} />
    <Route exact path="/education" component={Education} />
    <Route exact path="/contact" component={Contact} /></>)
}
