define([ 'angular', 'app/utils/appModule' ], function(angular, app) {

	var appService = app.service('AppService', [ '$log', function($log) {

		var self = this;

		self.headerTemplateUrl = "app/views/header.html";

	} ]);

	return appService;

});