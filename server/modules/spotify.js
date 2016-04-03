var request = require('request');

module.exports = function(app, system, socket){

	socket.on('spotify:search:track', function( query ){

		request(
			'https://api.spotify.com/v1/search?type=track&q=' + query,
			function(err, resp, json){
				var data = JSON.parse(json);
				socket.emit('spotify:search:track', data);
			}
		)
	});
}
