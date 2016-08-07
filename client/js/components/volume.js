import jails from 'jails'

jails('volume', ( component, html, data ) =>{

	let socket = io()

	component.init = ()=>{
		component.subscribe('assistent:ready', add)
	}

	let add = ()=>{
		component.publish('assistent:command', { 'volume :n': (n)=>{
			socket.emit('volume', n)
			component.publish('speak', 'Volume alterado para ' + n )
		}})
	}

})
