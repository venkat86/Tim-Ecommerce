define([ 'angular', 'app/utils/appModule', 'app/services/appService' ],
		function(angular, app, appService) {

			var headerController = app.controller('HeaderController', [ '$log',
					'$scope', 'AppService', function($log, $scope, AppService) {

						$scope.headerUrl = AppService.headerTemplateUrl;
						$log.log("template url: ",$scope.headerUrl);	

					} ]);

			return headerController;

		});