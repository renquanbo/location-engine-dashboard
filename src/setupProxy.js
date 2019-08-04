const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/auth_server', {target: 'http://localhost:8000'}));
  app.use(proxy('/configuration_service', {target: 'http://localhost:8000'}));
  // app.use(proxy('/configuration', {target: 'http://localhost:8000'}));
  // app.use(proxy('/resource', {target: 'http://localhost:8000'}));
  // app.use(proxy('/logout', {target: 'http://localhost:8000'}));
};