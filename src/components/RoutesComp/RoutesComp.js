import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { About } from '../about'
import { Blogs } from '../blogs'
import { Contact } from '../contact'
import { Products } from '../products'
import { Work } from '../work'
export const RoutesComp =(props)=>{
return(<> 
<Route exact={true} path="/" component={Work} />
<Route exaxt path="/about" component={About} />
<Route exact path="/contact" component={Contact} />
<Route exaxt path="/blogs" component={Blogs}/>
<Route exaxt path="/products" component={Products}/></>)
}
 