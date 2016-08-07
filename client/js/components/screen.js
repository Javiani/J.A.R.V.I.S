import jails from 'jails'
import scriptjs from 'scriptjs/dist/script.min'

jails('screen', ( component, html, anno ) =>{

	let body = document.body
	let cp

	component.init = ()=>{
		component.subscribe('assistent:ready', commands)
	}

	let open = ( name )=>{

		name = name.toLowerCase()
		cp = document.querySelector('[name*='+name+']')

		html.innerHTML = '<h1 class="title">' + name + '</h1>'
		html.appendChild( cp )
		html.classList.add('-open')
	}

	let close = ()=>{
		body.appendChild( cp )
		html.classList.remove('-open')
		cp = null
	}

	let commands = ()=>{

		component.publish('assistent:command', {

			'abrir :name': (name)=>{
				if( cp ) close()
				else open( name )
			},

			'fechar': close
		});
	}

})
