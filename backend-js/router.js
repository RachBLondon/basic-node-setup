var handlers = require('./handlers.js');

//add any additional routes you need
var routes = {
  '/': handlers.home,
  '/style.css': handlers.file,
  '/frontend.js': handlers.file,
  '404': handlers.notFound
}

module.exports = function(req, res) {
console.log("request in router",req.url)
  if (routes[req.url]) {
    routes[req.url](req, res);
  } else {
    routes['404'](req, res);
  }
}
