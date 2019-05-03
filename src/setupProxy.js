const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/ibi_apps', {target: 'http://localhost:8080'}))
};