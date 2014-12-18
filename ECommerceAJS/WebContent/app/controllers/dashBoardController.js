define([ 'angular', 'app/utils/appModule' ], function(angular, app) {

	var dashBoardController = app.controller('DashBoardController', [ '$log',
			'$scope', function($log, $scope) {

				$scope.init = function() {
					$log.log("Initializing Dash Board Controller!");
				};

				$scope.products = [ {
					name : 'product 1',
					prices : 122,
					productDesc : 'description 1'

				}, {
					name : 'product 1',
					prices : 122,
					productDesc : 'description 1'

				}, {
					name : 'product 1',
					prices : 122,
					productDesc : 'description 1'

				}, {
					name : 'product 1',
					prices : 122,
					productDesc : 'description 1'

				}, {
					name : 'product 1',
					prices : 122,
					productDesc : 'description 1'

				}, {
					name : 'product 1',
					prices : 122,
					productDesc : 'description 1'

				}, {
					name : 'product 1',
					prices : 122,
					productDesc : 'description 1'

				}, {
					name : 'product 1',
					prices : 122,
					productDesc : 'description 1'

				}, {
					name : 'product 1',
					prices : 122,
					productDesc : 'description 1'

				}, {
					name : 'product 1',
					prices : 122,
					productDesc : 'description 1'

				}, {
					name : 'product 1',
					prices : 122,
					productDesc : 'description 1'

				}, {
					name : 'product 1',
					prices : 122,
					productDesc : 'description 1'

				}, {
					name : 'product 1',
					prices : 122,
					productDesc : 'description 1'

				}, {
					name : 'product 1',
					prices : 122,
					productDesc : 'description 1'

				} ];

			} ]);

	return dashBoardController;
});