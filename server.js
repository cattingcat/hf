const express = require('express'),
	http = require('http');

var app = express();
var server = http.Server(app);

app.use('/', express.static(__dirname + '/build'));
app.set('etag', true);

server.listen(81, function(){
    console.log('Express server listening on port ' + 81);
});
