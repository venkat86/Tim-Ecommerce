define([ 'angular', 'app/utils/appModule' ], function(angular, app) {

	var productTile=app.directive('productTile',function(){
		return{
			
			restrict:'EA',
			templateUrl:'app/templates/product.html',
			controller:function(){
				
			},
			controllerAs:'productTile'
			
		};
	});
	
	return productTile;
	
});