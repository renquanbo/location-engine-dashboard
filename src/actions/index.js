/*
 * action types
 */

export const SET_THEME_TYPE = 'SET_THEME_TYPE'
export const TOGGLE_LIGHT_THEME = 'TOGGLE_LIGHT_THEME'

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

