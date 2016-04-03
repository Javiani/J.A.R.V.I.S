var path, glob, webpack, uglify, dev, optimize;

path	 = require('path');
glob	 = require('glob');
webpack  = require('webpack');
optimize = webpack.optimize;
uglify   = optimize.UglifyJsPlugin;

dev	 = !!process.argv.filter(function(item){
	return item == '--dev';
}).length;

module.exports = {

	devtool:'source-map',

	entry:{
		main:[ 'jails', 'riot', 'scriptjs', './client/es6/main'+ (dev?'.dev':'') ],
		app :['./client/es6/apps/app']
	},

	output: {
		path: __dirname + '/client/dist/js',
        filename: '[name].min.js'
	},

	resolve:{
		alias :{
			jails :'jails-js/source/jails.js',
			mods  :'jails-modules',
			comps :'jails-components',
			riot  :'riot/riot'
		}
	},

	plugins :[ new optimize.CommonsChunkPlugin('main', 'main.min.js') ].concat(
		dev? [] :new optimize.UglifyJsPlugin({
			compress :{ warnings:false },
			minimize :true}
		)
	),

	module: {
		loaders: [{
			loader: 'babel',
			test: /\.js$/,
			exclude: /node_modules/,
			query:{ presets:['es2015']}
		}]
	}
};
