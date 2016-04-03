module.exports = function(app, system, socket){
	socket.on('volume', function(n){
		system('amixer set Master ' + n + '%'); // Linux
		system('sudo osascript -e "set Volume '+ (n*5)/100 +'"'); // Mac
	});
}
