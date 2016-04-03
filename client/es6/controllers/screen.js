import jails from 'jails'
import scriptjs from 'scriptjs/dist/script.min'

jails.controller('screen', function( html, data ){

	let body = document.body
	let controller

	this.init = ()=>{
		this.subscribe('assistent:ready', commands)
	}

	let open = ( name )=>{
		name = name.toLowerCase()
		controller = document.querySelector('[data-controller*='+name+']')

		html.innerHTML = '<h1 class="title">' + name + '</h1>'
		html.appendChild( controller )
		html.classList.add('-open')
	}

	let close = ()=>{
		body.appendChild( controller )
		html.classList.remove('-open')
		controller = null
	}

	let commands = ()=>{

		this.publish('assistent:command', {

			'abrir :name': (name)=>{
				if( controller ) close()
				else open( name )
			},

			'fechar': close
		});
	}

})
