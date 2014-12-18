define([ 'angular', 'angularRoute', 'app/utils/appConstants',
		'app/controllers/dashBoardController', 'app/utils/appModule',
		'app/controllers/headerController' ], function(angular, angularRoute,
		appConstants, dashBoardController, app) {

	app.config([ '$routeProvider', function($routeProvider) {

		$routeProvider.when('/dash', {
			templateUrl : 'app/views/dash.html',
			controller : 'DashBoardController'
		}).otherwise({
			redirectTo : '/dash'
		});

	} ]);

	return angular.bootstrap(document, [ appConstants.APP_MODULE_NAME ]);
});