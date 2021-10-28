import React from "react";
import { isAuthenticated } from "./auth";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginScreen from "./components/LoginScreen";
import Layout from "./components/Layout";
import GlobalStyles from "./styles/GlobalStyles";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginScreen} />
      <PrivateRoute  path="/app">
        <Layout />
        <GlobalStyles />
      </PrivateRoute>
    </Switch>
  </BrowserRouter>
);

export default Routes;