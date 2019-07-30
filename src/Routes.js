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

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect
          exact
          from="/"
          to="/dashboard"
        />
        <Route
          component={Dashboard}
          exact
          path="/dashboard"
        />
        <Route
          component={SignIn}
          exact
          path="/sign-in"
        />
        <Route
          component={Location}
          exact
          path="/location"
        />
        <Route
          component={AnchorManagement}
          exact
          path="/anchor-management"
        />
        <Route
          component={TagManagement}
          exact
          path="/tag-management"
        />
        <Route
          component={Statistics}
          exact
          path="/statistics"
        />
        <Route
          component={Settings}
          exact
          path="/settings"
        />
      </Switch>
    );
  }
}
