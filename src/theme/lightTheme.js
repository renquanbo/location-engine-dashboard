// Material helpers
import { createMuiTheme } from '@material-ui/core/styles';

import palette from './palette';
import typography from './typography';
import overrides from './overrides';
import size from './size';


palette.type = 'light'

const lightTheme = createMuiTheme({
  palette,
  typography,
  overrides,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  },
  size,
  sign_in_image: {
    url: 'url(/images/bcd_sign_in_light.png)'
  }
});
export default lightTheme;