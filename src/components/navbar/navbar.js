import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import styled from "styled-components";
// import { About } from '../about';
// import { Blogs } from '../blogs';
// import { Contact } from '../contact';
// import { Products } from '../products';
// import { Work } from '../work';
import './navbar.scss'


const Navigation = styled.header`
  width: 100%;
  border-bottom: 10px solid #222;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px 0;
  height: 140px;
  //margin-bottom: 60px;
  background-image: url('https://images.unsplash.com/photo-1500043204644-768d20653f32?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
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


            <NavLink activeClassName="active" to="/blogs">
              <li>blogs</li>
            </NavLink>
            <NavLink activeClassName="active" to="/work">
              <li>work</li>
            </NavLink>
            <NavLink activeClassName="active" to="/products">
              <li>products</li>
            </NavLink>
            <NavLink activeClassName="active" to="/contact">
              <li>contact</li>
            </NavLink>
          </ul>
        </nav>
      </Navigation>
    );
  }
}






