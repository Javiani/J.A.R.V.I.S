import jails from 'jails'

jails('translate', ( component, html, data ) =>{

	component.init = ()=>{
		component.subscribe('assistent:ready', add)
	}

	let callback = (response)=>{
		component.publish('speak', response.text[0], 'US English Female');
	}

	let add = ()=>{
		component.publish('assistent:command', {
			'traduzir *message':(message)=>{
				$.getJSON(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160403T065211Z.fb3aa628bc0ad4bd.27437e0c1b7b7e776e0465f850da33a9ba5dfe9b&text=${message}&lang=pt-en&callback=?`, callback)
			}
		})
	}
})
