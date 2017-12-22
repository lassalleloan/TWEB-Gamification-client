(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:registerService
	 * @description
	 * # registerService
	 * Service of the app
	 */

  	angular.module('register')
		.factory('registerService', registerService);

	registerService.$inject = ['$http'];

	function registerService($http) {
		
		return {
			saveUser: function (user) {
				console.log('register user: ', user);
				// return new Promise((resolve) => {
				
				// const config = {
				// 	headers : {
				// 		'Content-Type': 'application/json',
				// 	}
				// }
		
				// $http.post('http://localhost', user, config)
				// 	.success(function (data, status, headers, config) {
				// 		resolve(data);
				// 	})
				// 	.error(function (data, status, header, config) {
				// 		let messageError = {
				// 			status: status,
				// 			data: data,
				// 			header: header,
				// 			config: config,
				// 		};

				// 		console.log("RegisterService, POST request: " + JSON.stringify(messageError));
				// 	});
				// });
			},
		};
	}
})();
