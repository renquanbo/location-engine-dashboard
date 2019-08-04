import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import {setAuthenticationStatus} from './actions';
import browserHistory from './components/BrowserHistory';

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          break
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          // localStorage.removeItem('access_token')
          // localStorage.removeItem('tokenExpired')
          console.log(error.response);
          if(error.response.data.error_description.includes('Access token expired')){
            getTokenByRefreshToken();
          }else if (error.response.data.error_description.includes('Cannot convert access token to JSON')){
            store.dispatch(setAuthenticationStatus(false));
            browserHistory.push('/sign-in');
          }
          break
        default:
          break
        // case 504:
        //   localStorage.removeItem('access_token')
        //   localStorage.removeItem('tokenExpired')
        //   router.replace({
        //     path: '/',
        //     query: {redirect: router.currentRoute.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
        //   })
        //   break
      }
    }
    return Promise.reject(error); // 返回接口返回的错误信息
  }
)

function getTokenByRefreshToken(){
  let clientNameAndSecret = 'bcd:bcdsecret'
  let encodedCNAS = window.btoa(clientNameAndSecret)
  axios({
    method: 'post',
    url: '/auth_server/oauth/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + encodedCNAS
    },
    data: 'grant_type=refresh_token&refresh_token=' + localStorage.refresh_token + '&scope=all'
  })
    .then(function(response) {
      localStorage.token_type = response.data.token_type;
      localStorage.access_token = response.data.access_token;
      localStorage.refresh_token = response.data.refresh_token;
      localStorage.tokenExpired = response.data.expires_in * 1000 + new Date().getTime();
      store.dispatch(setAuthenticationStatus(true));
      let lastPath = browserHistory.location.pathname;
      browserHistory.push('/somewhere');
      browserHistory.push(lastPath);
    })
    .catch(function(error) {
      store.dispatch(setAuthenticationStatus(false));
    })
}


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
