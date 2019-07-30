import {SET_AUTHENTICATION_STATUS} from '../actions';

function authenticationStatus (state = false, action) {
  switch(action.type) {
    case SET_AUTHENTICATION_STATUS: 
      return action.status
    default:
      return state
  }
}

export default authenticationStatus