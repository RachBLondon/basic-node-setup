var handlers = require('./handlers.js');

//add any additional routes you need
var routes = {
  '/': handlers.home,
  // '/public/style.css': handlers.file,
  // '/public/frontend.js': handlers.file,
  '404': handlers.notFound
}

module.exports = function(req, res) {
  if (routes[req.url]) {
    routes[req.url](req, res);
  } else {
    routes['404'](req, res);
  }
}
