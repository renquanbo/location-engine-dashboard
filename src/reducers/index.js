import { combineReducers } from 'redux'
import themeType from  './themeType'
import authenticationStatus from './authenticationStatus'

export default combineReducers({
  themeType,
  authenticationStatus
})