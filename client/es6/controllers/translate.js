import jails from 'jails'

jails.controller('translate', function( html, data ){

	this.init = ()=>{
		this.subscribe('assistent:ready', add)
	}

	let callback = (response)=>{
		this.publish('speak', response.text[0], 'US English Female');
	}

	let add = ()=>{
		this.publish('assistent:command', {
			'traduzir *message':(message)=>{
				$.getJSON(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160403T065211Z.fb3aa628bc0ad4bd.27437e0c1b7b7e776e0465f850da33a9ba5dfe9b&text=${message}&lang=pt-en&callback=?`, callback)
			}
		})
	}
})
