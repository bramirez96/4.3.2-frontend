import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./styles.css";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <h2>Welcome, traveller.</h2>
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/list" component={List} />
      </Switch>
    </div>
  );
}

export default connect(
  null,
  {}
)(App);
