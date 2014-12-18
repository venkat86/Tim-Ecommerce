define(function() {

	 var baseUrl = "http://localhost:8080/photobook-web";
	

	return {

		serviceUrl : baseUrl + "",
		testUrl : baseUrl + "/testData/getAllImages",
		getAllProducts : baseUrl + '/product/getProduct'
	};
});