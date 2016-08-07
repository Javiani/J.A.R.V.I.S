import 'components/assistent'
import 'components/volume'
import 'components/spotify'
import 'components/screen'
import 'components/translate'

import jails from 'jails'

jails('jarvis', ( component, html, data ) =>{

	component.init = ()=>{
		console.log('J.A.R.V.I.S woke up...')
	}

})
