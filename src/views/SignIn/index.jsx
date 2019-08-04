import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// Externals
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import validate from 'validate.js';
import _ from 'underscore';

// Material helpers
import { withStyles } from '@material-ui/core/styles/index';

// Material components
import Grid from '@material-ui/core/Grid/index';
import Button from '@material-ui/core/Button/index';
import CircularProgress from '@material-ui/core/CircularProgress/index';
import IconButton from '@material-ui/core/IconButton/index';
import TextField from '@material-ui/core/TextField/index';
import Typography from '@material-ui/core/Typography/index';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import axios from 'axios';
// Shared components
// import FacebookIcon from '../../icons/Facebook';
// import GoogleIcon from '../../icons/Google';

// Component styles
import styles from './styles';

// Form validation schema
import schema from './schema';

import {setAuthenticationStatus} from '../../actions';
import { connect } from 'react-redux';

const CssTextField = withStyles(theme => ({
  root: {
    '& label': {
      color: theme.palette.text.secondary,
    },
    '& input': {
      color: theme.palette.text.secondary,
      zIndex: 1
    },
    '& label.Mui-focused': {
      color: theme.palette.text.secondary
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        backgroundColor: theme.palette.background.light
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.main
      },
    },
  },
}))(TextField);


class SignIn extends Component {
  state = {
    values: {
      username: '',
      password: ''
    },
    touched: {
      username: false,
      password: false
    },
    errors: {
      username: null,
      password: null
    },
    isValid: false,
    isLoading: false,
    submitError: null
  };

  handleBack = () => {
    const { history } = this.props;

    history.goBack();
  };

  validateForm = _.debounce(() => {
    const { values } = this.state;

    const newState = { ...this.state };
    const errors = validate(values, schema);

    newState.errors = errors || {};
    newState.isValid = errors ? false : true;

    this.setState(newState);
  }, 300);

  handleFieldChange = (field, value) => {
    const newState = { ...this.state };

    newState.submitError = null;
    newState.touched[field] = true;
    newState.values[field] = value;

    this.setState(newState, this.validateForm);
  };

  handleSignIn = () => {
    const { history } = this.props;
    const { values } = this.state;

    this.setState({ isLoading: true });

    let clientNameAndSecret = 'bcd:bcdsecret'
    let encodedCNAS = window.btoa(clientNameAndSecret)
    const self = this
    axios({
      method: 'post',
      url: '/auth_server/oauth/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + encodedCNAS
      },
      data: 'grant_type=password&username=' + values.username + '&password=' + values.password + '&scope=all'
    })
      .then(function(response) {
        localStorage.token_type = response.data.token_type
        localStorage.access_token = response.data.access_token
        localStorage.refresh_token = response.data.refresh_token
        localStorage.tokenExpired = response.data.expires_in * 1000 + new Date().getTime()
        self.props.dispatch(setAuthenticationStatus(true))
        history.push('/dashboard');
        
      })
      .catch(function(error) {
        if(error.response.status === 400){
          self.setState({
            submitError: 'wrong password or wrong username!'
          });
        }
        self.setState({
          isLoading: false
        });
        self.props.dispatch(setAuthenticationStatus(false))
      })
  };

  render() {
    const { classes } = this.props;
    const {
      values,
      touched,
      errors,
      isValid,
      submitError,
      isLoading
    } = this.state;

    const showUsernameError = touched.username && errors.username;
    const showPasswordError = touched.password && errors.password;

    return (
      <div className={classes.root}>
        <Grid className={classes.grid} container>
          <Grid className={classes.quoteWrapper} item lg={5}>
            <div className={classes.quote}>
              <div className={classes.quoteInner}>
                <Typography className={classes.quoteText} variant="h1">
                  Breadcrumb Data
                </Typography>
                <Typography className={classes.quoteText} variant="h1">
                  Location Engine
                </Typography>
                <div className={classes.person}>
                  <Typography className={classes.name} variant="body1">
                    breadcrumb data team
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid className={classes.content} item lg={7} xs={12}>
            <div className={classes.content}>
              <div className={classes.contentHeader}>
                <IconButton className={classes.backButton} onClick={this.handleBack}>
                  <ArrowBackIcon />
                </IconButton>
              </div>
              <div className={classes.contentBody}>
                <form className={classes.form}>
                  <Typography className={classes.title} variant="h2">
                    Sign in
                  </Typography>
             
                  <div className={classes.fields}>
                    <CssTextField className={classes.textField} label="Username" name="username"
                      onChange={event => this.handleFieldChange('username', event.target.value)}
                      type="text" value={values.username} variant="outlined" autoComplete="off"
                    />
                    {showUsernameError && (
                      <Typography
                        className={classes.fieldError}
                        variant="body2"
                      >
                        {errors.username[0]}
                      </Typography>
                    )}
                    <CssTextField
                      className={classes.textField}
                      label="Password"
                      name="password"
                      onChange={event =>
                        this.handleFieldChange('password', event.target.value)
                      }
                      type="password"
                      value={values.password}
                      variant="outlined"
                    />
                    {showPasswordError && (
                      <Typography
                        className={classes.fieldError}
                        variant="body2"
                      >
                        {errors.password[0]}
                      </Typography>
                    )}
                  </div>
                  {submitError && (
                    <Typography
                      className={classes.submitError}
                      variant="body2"
                    >
                      {submitError}
                    </Typography>
                  )}
                  {isLoading ? (
                    <CircularProgress className={classes.progress} />
                  ) : (
                    <Button
                      className={classes.signInButton}
                      color="primary"
                      disabled={!isValid}
                      onClick={this.handleSignIn}
                      size="large"
                      variant="contained"
                    >
                      Sign in now
                    </Button>
                  )}
                  <Typography
                    className={classes.signUp}
                    variant="body1"
                  >
                    Don't have an account?{' '}
                    <Link
                      className={classes.signUpUrl}
                      to="/sign-up"
                    >
                      Sign up
                    </Link>
                  </Typography>
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

SignIn.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

function mapStateToProps (state) {
  return {isAuthenticated: state.authenticationStatus};
}

const SignInWithRedux = connect(mapStateToProps)(SignIn)

export default compose(
  withRouter,
  withStyles(styles)
)(SignInWithRedux);
