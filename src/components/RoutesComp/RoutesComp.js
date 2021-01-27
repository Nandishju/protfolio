import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { About } from '../about'
import { Blogs } from '../blogs'
import { Skills } from '../skills'
import { Products } from '../products'
import { Work } from '../work'
import {Education } from '../education'
export const RoutesComp =(props)=>{
return(<> 
<Route exact={true} path="/" component={About} />
<Route exact path="/work" component={Work} />
<Route exact path="/skills" component={Skills} />
  <Route exact path="/blogs" component={Blogs} />
  <Route exact path="/education" component={Education}/>
<Route exact path="/products" component={Products}/></>)
}
 