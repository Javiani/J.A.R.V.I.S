import jails from 'jails'

jails.controller('volume', function( html, data ){

	let socket = io()

	this.init = ()=>{
		this.subscribe('assistent:ready', add)
	}

	let add = ()=>{
		this.publish('assistent:command', { 'volume :n': (n)=>{
			socket.emit('volume', n)
			this.publish('speak', 'Volume alterado para ' + n )
		}})
	}

})
