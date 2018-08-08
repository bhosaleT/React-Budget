import React from 'react';
import {Link, NavLink} from "react-router-dom";


const Header = () => (
    <header>
      <h1>React Budget</h1>
        <NavLink to = "/" activeClassName = "is-active" exact = {true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName = "is-active"> Create Expense </NavLink>
        <NavLink to="/help" activeClassName = "is-active">Ask for Help </NavLink>
    </header>
  );

export default Header;