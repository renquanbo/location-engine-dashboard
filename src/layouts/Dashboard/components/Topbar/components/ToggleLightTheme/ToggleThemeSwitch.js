import React from 'react'; 
import Switch from '@material-ui/core/Switch';
import { setThemeType, ThemeType } from '../../../../../../actions'

function ToggleThemeSwitch(props) {
  return (
    <Switch
      // we need redux to do the listener
      checked={props.themeType === ThemeType.LIGHT}
      onChange={() => {
        if(props.themeType === ThemeType.LIGHT){
          props.dispatch(setThemeType(ThemeType.DARK))
        }else{
          props.dispatch(setThemeType(ThemeType.LIGHT))
        }
      }}
      value="themeType"
      color="primary"
      inputProps={{ 'aria-label': 'primary checkbox' }}
    />
  )
}

export default ToggleThemeSwitch;