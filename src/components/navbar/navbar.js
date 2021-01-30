import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import styled from "styled-components";
// import { About } from '../about';
// import { Blogs } from '../blogs';
// import { Skills } from '../Skills';
// import { Products } from '../products';
// import { Work } from '../work';
import './navbar.scss'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }

  render() {
    const { isExpanded } = this.state;

    return (
      <Navigation>
        <div className="logo">
          <Link to="/">
            <p>Portfolio</p>

          </Link>
        </div>
        <nav className="nav">
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={e => this.handleToggle(e)}
          />
          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>


            <NavLink activeClassName="active" to="/">
              <li>Home</li>
            </NavLink>
            <NavLink activeClassName="active" to="/Skills">
              <li>skills</li>
            </NavLink>
            <NavLink activeClassName="active" to="/work">
              <li>experience</li>
            </NavLink>            
           
            {/* <NavLink activeClassName="active" to="/education">
            <li>education</li>
          </NavLink> */}
            <NavLink activeClassName="active" to="/products">
              <li>Contact Us</li>
            </NavLink>
          </ul>
          <div id="hero-wave" class="css-1qmcrmh ehoxvtz0"><svg viewBox="0 0 1695 57" preserveAspectRatio="none"><path d="M0 23c135.4 19 289.6 28.5 462.5 28.5C721.9 51.5 936.7 1 1212.2 1 1395.8.9 1556.7 8.3 1695 23v34H0V23z" fill="rgba(255,255,255,1)" fill-rule="evenodd"></path></svg></div>
        </nav>
      </Navigation>
    );
  }
}


const Navigation = styled.header`
  width: 100%;
  
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px 0;
  height: 100px;
  //margin-bottom: 60px;
  // background-image: url('https://images.unsplash.com/photo-1500043204644-768d20653f32?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
  background: radial-gradient( circle farthest-corner at 10% 20%,rgba(26,20,74,1) 0%,rgba(59,52,120,1) 100.2% );
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  .logo a {
    font-size:xxx-large;
    padding-top: 33px;
    display: flex;
    flex-direction: column;
    clear: both;
    padding-bottom: 30px;
    text-decoration: none;
    color:white !important;
    opacity:1;
  
    p {
      width: 50%;
      display: block;
    }
    em {
      font-size: 0.5em;
      float: left;
      display: block;
      img {
        display: inline-block;
        margin-top: 5px;
        width: 15px;
        float: left;
      }
      .letterhead {
        display: inline-block;
        line-height: 260%;
        float: left;
      }
    }
  }
  .gray {
    color: #ccc;
  }
  a {
    color: white;
    opacity: 0.55;
    transition: all 0.6s;
    font-size: 1em;
    opacity:1;
  }
  a:hover {
    opacity: 1;
  }
  .fa-bars {
    display: none;
    color: white;
    font-size: 2rem;
  }
  nav {
    //position:sticky;
    ul {
      display: flex;
      justify-content: space-between;
      list-style:none
    }
    li {
      text-transform:capitalize;
      margin: 0 15px;
      justify-content: space-between;
      font-size: 1em;
    }
    a {
      color:white;
      font-size: 1em;
      text-decoration: none;
      .active {
        color: tomato;
      }
    }
    a.active {
      color: white;
      font-weight:900;
      opacity:1;
    }
  }

  @media only screen and (max-width: 800px) {
    padding: 0px;
    .logo {
      padding-left: 15px;
      padding-top: 0px !important;
    }
  }
  @media only screen and (max-width: 800px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    .logo {
      width: 100%;
      display: block;
      padding-top: 20px;
      margin: 0px;
      margin-left: -5px;
      a {
        padding: 20px 0px;
      }
    }
    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 40px;
      right: 10px;
      cursor: pointer;
    }
    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;

      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }
      li {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  }
`;






