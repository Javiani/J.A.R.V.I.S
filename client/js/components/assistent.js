import jails from 'jails'
import scriptjs from 'scriptjs'

jails('assistent', ( component, html, data ) =>{

	let socket = io()
	let root = document.documentElement
	let speaker = root.getAttribute('speaker')
	let language = root.getAttribute('lang')

	component.init = ()=>{

		load()

		component.subscribe('speak', speak)
		component.subscribe('assistent:command', add)
	}

	let start = ()=>{
		add({ 'Olá': ()=> speak('Olá') })

		annyang.debug(true)
		annyang.setLanguage(language)
		annyang.start()

		assistent()
		component.publish('assistent:ready')
	}

	let add = ( command )=>{
		annyang.addCommands(command, false)
	}

	let speak = (message, spk = speaker, callback)=>{
		responsiveVoice.speak( message, spk, {
			onend:function(){ if(callback) callback(); }
		})
	}

	let load = ()=>{
		scriptjs([
			'//code.responsivevoice.org/responsivevoice.js',
			'//cdnjs.cloudflare.com/ajax/libs/annyang/2.2.1/annyang.min.js'
		], start)
	}

	let assistent = ()=>{
		html.innerHTML = `<div id="spinner"></div>`
	}
})
