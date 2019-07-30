import {ThemeType, SET_THEME_TYPE} from '../actions'

const { LIGHT } =  ThemeType

function themeType (state = LIGHT, action) {
  switch (action.type) {
    case SET_THEME_TYPE:
      return action.themeType
    default:
      return state
  }
}


export default themeType