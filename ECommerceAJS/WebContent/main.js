require.config({

	paths : {
		'angular' : 'lib/angular/angular.min',
		'angularRoute' : 'lib/angular/angular-route.min',
		'jquery' : 'lib/jquery/jquery-1.11.1.min',
		'twitterbs' : 'lib/bootstrap/js/bootstrap.min',
		'init' : 'app/init'
	},

	shim : {

		'angularRoute' : {
			deps : [ 'angular' ]
		},
		'twitterbs' : {
			deps : [ 'jquery' ]
		},
		'angular' : {
			deps : [ 'jquery', 'twitterbs' ],
			exports : 'angular'
		}
	},
	deps : [ 'app/app' ]
});
