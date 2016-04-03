import '../controllers/assistent'
import '../controllers/volume'
import '../controllers/spotify'
import '../controllers/screen'
import '../controllers/translate'

import jails from 'jails'

jails.app('app', function( html, data ){

	this.init = ()=>{
		console.log('J.A.R.V.I.S woke up...')
	}

})
