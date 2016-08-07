import 'comps/view/view'
import jails from 'jails'
import scriptjs from 'scriptjs/dist/script.min'

jails('spotify', ( component, html, data ) =>{

	let socket = io()
	let audio  = new Audio()
	let view   = component.get('[data-component=view]')

	component.init = ()=>{
		view('update')
		socket.on('spotify:search:track', play)
		component.subscribe('assistent:ready', commands)
	}

	let play = ( response )=>{

		if( !response.tracks.items ){
			return component.publish('assistent:speak', 'Música não encontrada')
		}

		let item = response.tracks.items[0]
		audio.src = item.preview_url
		audio.play()

		view('update', {
			artist :item.artists[0].name,
			image  :item.album.images[0].url,
			track  :item.name
		})
	}

	let commands = ()=>{

		component.publish('assistent:command', {

			'spotify toque *name': (name)=>{
				component.publish('speak', 'Procurando por ' + name)
				socket.emit('spotify:search:track', name)
			},

			'spotify pare': ()=>{
				audio.pause()
			},

			'spotify tocar': ()=>{
				audio.play()
			}
		});
	}

})
