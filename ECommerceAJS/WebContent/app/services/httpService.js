define([ 'app/utils/appModule', 'app/utils/appUrls', 'jquery' ], function(app,
		appUrls, $) {

	var httpService = app.service('HTTPService', [ '$log', '$http',
			function($log, $http) {

				var self = this;

				self.config = {};

				self.getRequest = function(config) {
					$.ajax({
						url : config.url,
						type : "GET",
						dataType : config.type || '',
						headers : config.headers,
						success : config.success,
						crossOrgin : true,
						error : config.error
					}).done(function(res) {
						$log.log("Response success: ", res);
					}).fail(function(res) {
						$log.log("Response error: ", res);
					});

				};

				self.postRequest = function(config) {
					$.ajax({
						url : config.url,
						type : "POST",
						dataType : config.type || '',
						headers : config.headers,
						success : config.success,
						data : config.data,
						crossOrgin : true,
						error : config.error
					}).done(function(res) {
						$log.log("Response success: ", res);
					}).fail(function(res) {
						$log.log("Response error: ", res);
					});
				};
			} ]);
	
	return httpService;

});