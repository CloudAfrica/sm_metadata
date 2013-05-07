
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.logger('dev'));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/ping', function(req,res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("pong");
    res.end();
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
