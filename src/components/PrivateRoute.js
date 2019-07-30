import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends React.Component{

  render(){
    const {component: Component, ...rest } = this.props
    let isAuthenticated = this.props.isAuthenticated
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/sign-in",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
}

function mapStateToProps (state) {
  return {isAuthenticated: state.authenticationStatus};
}

export default connect(mapStateToProps)(PrivateRoute)