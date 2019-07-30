// Material helpers
import { createMuiTheme } from '@material-ui/core/styles';

import { white, black } from '../common/colors';
import typography from './typography';
import overrides from './overrides';
import size from './size';


const darkTheme = createMuiTheme({
  palette:{
    type: 'dark',
    common: {
      black,
      white,
      neutral: '#E4E7EB',
      muted: '#9EA0A4'
    },
    primary: {
      contrastText: white,
      main: '#03a9f4',
      light: '#303030',
      dark: '#0B48A0'
    },
    secondary: {
      contrastText: white,
      main: '#7d58ff',
      light: '',
      dark: '#37248F'
    },
    success: {
      contrastText: white,
      main: '#45B880',
      light: '#F1FAF5',
      dark: '#00783E'
    },
    info: {
      contrastText: white,
      main: '#1070CA',
      light: '#F1FBFC',
      dark: '#007489'
    },
    warning: {
      contrastText: white,
      main: '#FFB822',
      light: '#FDF8F3',
      dark: '#95591E'
    },
    danger: {
      contrastText: white,
      main: '#ED4740',
      light: '#FEF6F6',
      dark: '#BF0E08'
    },
    text: {
      primary: white,
      secondary: 'rgba(255,255,255, 0.7)',
      disabled: '#A6B1BB'
    },
    background: {
      default: '#212121',
      light: '#303030',
      dark: '#172B4D',
      paper: '#424242'
    },
    border: '#414141',
    // divider: '#414141'
  },
  typography,
  overrides,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  },
  size,
  sign_in_image: {
    url: 'url(/images/bcd_sign_in_dark.png)'
  }
});
export default darkTheme;