define([ 'angular', 'angularRoute', 'app/utils/appConstants' ], function(
		angular, angularRoute, appConstants) {

	return angular.module(appConstants.APP_MODULE_NAME, [ 'ngRoute' ]);

});