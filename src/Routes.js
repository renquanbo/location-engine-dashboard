import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import Dashboard from './views/Dashboard';
import Location from './views/Location';
import AnchorManagement from './views/AnchorManagement';
import TagManagement from './views/TagManagement';
import Statistics from './views/Statistics';
// import Account from './views/Account';
import Settings from './views/Settings';
// import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
// import UnderDevelopment from './views/UnderDevelopment';
// import NotFound from './views/NotFound';

import PrivateRoute from './components/PrivateRoute';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect
          exact
          from="/"
          to="/dashboard"
        />
        <PrivateRoute
          component={Dashboard}
          exact
          path="/dashboard"
        />
        <Route
          component={SignIn}
          exact
          path="/sign-in"
        />
        <PrivateRoute
          component={Location}
          exact
          path="/location"
        />
        <PrivateRoute
          component={AnchorManagement}
          exact
          path="/anchor-management"
        />
        <PrivateRoute
          component={TagManagement}
          exact
          path="/tag-management"
        />
        <PrivateRoute
          component={Statistics}
          exact
          path="/statistics"
        />
        <PrivateRoute
          component={Settings}
          exact
          path="/settings"
        />
      </Switch>
    );
  }
}
