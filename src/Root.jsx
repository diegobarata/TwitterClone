import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StoreProvider from 'components/Store/Provider';
import RoutesPrivate from 'components/Routes/Private/Private';
import Layout from './components/Layout';
import UserLogin from './components/LoginScreen';

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={UserLogin} />
        <RoutesPrivate path="/" component={Layout} />
      </Switch>
    </StoreProvider>
  </Router>
)


export default PagesRoot;
