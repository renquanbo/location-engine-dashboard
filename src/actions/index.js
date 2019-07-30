/*
 * action types
 */

export const SET_THEME_TYPE = 'SET_THEME_TYPE';
export const TOGGLE_LIGHT_THEME = 'TOGGLE_LIGHT_THEME';
export const SET_AUTHENTICATION_STATUS = 'SET_AUTHENTICATION_STATUS'; 

/*
 * other constants
 */

export const ThemeType = {
  LIGHT: 'light',
  DARK: 'dark'
}
/*
 * action creators
 */

export function setThemeType(themeType) {
  return {type: SET_THEME_TYPE, themeType}
}

export function setAuthenticationStatus(status) {
  return {type: SET_AUTHENTICATION_STATUS, status}
}
