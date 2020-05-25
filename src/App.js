import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Dashboard from "./components/Analytics/Dashboard";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/expenses" />
        <Route path="/users" />
        <Route path="/settings" />
        <Route path="/sign-out" />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Fragment>
  );
}

export default App;
