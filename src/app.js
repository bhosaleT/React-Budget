import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const ExpenseDashboardPage = () => <div>This is my dashboard</div>;

const AddExpensePage = () => <div>This is my Expense</div>;

const EditPage = () => <div>This is my EditPage</div>;

const HelpPage = () => <div>This is my HelpPage</div>;

const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Go Home </Link>
  </div>
);

const Header = () => (
  <header>
    <h1>React Budget</h1>
      <NavLink to = "/" activeClassName = "is-active" exact = {true}>Dashboard</NavLink>
      <NavLink to="/create" activeClassName = "is-active"> Create Expense </NavLink>
      <NavLink to="/edit" activeClassName = "is-active">Edit Expenses </NavLink>
      <NavLink to="/help" activeClassName = "is-active">Ask for Help </NavLink>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
