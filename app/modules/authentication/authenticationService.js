(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:authenticationService
	 * @description
	 * # authenticationService
	 * Service of the app
	 */

    angular.module('authentication')
		.factory('authenticationService', AuthenticationService);

	AuthenticationService.$inject = ['$http'];

	function AuthenticationService ($http) {

		const root = {
			username: "root",
			password: "toortoor",
		};

		let isAuthenticated = false;

		return {

			isAuthenticated: function(user) {
				return new Promise((resolve) => {
					isAuthenticated = user.username === root.username && user.password === root.password;
					resolve(isAuthenticated);

					// $http.post('https://localhost:8080/api/authenticate', user)
					// 	.success(function (response) {
					// 		resolve(response.success);
					// 	});
				});
			},

		};

	}

})();
