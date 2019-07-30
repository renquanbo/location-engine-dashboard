import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// Routes
import Routes from '../Routes';

// Material helpers
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// Theme
import {ThemeType} from '../actions';
import {darkTheme,lightTheme} from '../theme';
import '../assets/scss/index.scss';
import 'react-perfect-scrollbar/dist/css/styles.css';
// Browser history
const browserHistory = createBrowserHistory();

function ThemeWrapper(props) {
  return (
    <MuiThemeProvider theme={props.themeType === ThemeType.LIGHT ? lightTheme : darkTheme}>
      <CssBaseline />
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </MuiThemeProvider>
  );
}

export default ThemeWrapper;
