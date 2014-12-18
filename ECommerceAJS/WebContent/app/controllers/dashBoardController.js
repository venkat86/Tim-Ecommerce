define([ 'angular', 'app/utils/appModule' ], function(angular, app) {

	var dashBoardController = app.controller('DashBoardController', [ '$log',
			'$scope', function($log, $scope) {

				$scope.init = function() {
					$log.log("Initializing Dash Board Controller!");
				};

			} ]);
	
	return dashBoardController;
});