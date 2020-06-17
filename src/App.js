import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./styles.css";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import List from "./components/List";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const toggleLoggedIn = () => {
    setIsLogged(!isLogged);
  };
  return (
    <div className="App">
      <Header isLogged={isLogged} toggle={toggleLoggedIn} />
      <Switch>
        <Route exact path="/">
          <h2>Welcome, traveller.</h2>
        </Route>
        <Route
          exact
          path="/login"
          render={() => {
            return <Login toggle={toggleLoggedIn} />;
          }}
        />
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
