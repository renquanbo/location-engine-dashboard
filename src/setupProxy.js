const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  // app.use(proxy('/auth_server', {target: 'http://localhost:8000'}));
  // app.use(proxy('/configuration_service', {target: 'http://localhost:8000'}));
  app.use(proxy('/auth-server', {target: 'http://192.168.1.11:8000'}));
  app.use(proxy('/anchor-service', {target: 'http://192.168.1.11:8000'}));
  // app.use(proxy('/configuration', {target: 'http://localhost:8000'}));
  // app.use(proxy('/resource', {target: 'http://localhost:8000'}));
  // app.use(proxy('/logout', {target: 'http://localhost:8000'}));
};