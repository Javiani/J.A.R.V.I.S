var express = require('express');
var io = require('socket.io');
var app = express();
var exec = require('child_process').exec;
var glob = require('glob');
var path = require('path');

app.use(express.static('client'));

var io = require('socket.io').listen(
	app.listen(3000, function(){
		console.log('Example app listening on port 3000!');
	})
);

io.sockets.on('connection', function (socket) {

	glob.sync('./server/modules/*.js').map(function(file){
		var module = require('./modules/' + path.basename(file));
		module( app, system, socket );
	});
});

function system( cmd ){
	exec(cmd, function(error, stdout, stderr) {
	  console.log(stdout);
	});
}
