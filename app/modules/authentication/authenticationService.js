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

		const userList = [
			{
				username: "AvendoBlack",
				password: "aaaaaaaa",
			},
		];

		let isAuthenticated = false;
		let isRegisted = false;
		let currentUser = {};

		return {

			isAuthenticated: function (user) {
				return new Promise((resolve) => {
					let index = userList.findIndex(u => user.username === u.username && user.password === u.password);
					isAuthenticated = index >= 0;

					if (isAuthenticated) {
						currentUser = userList[index];
					}

					resolve(isAuthenticated);

					// $http.post('https://localhost:8080/api/authenticate', user)
					// 	.success(function (response) {
					// 		resolve(response.success);
					// 	});
				});
			},

			getCurrentUser: function () {
				return currentUser;
			},

			isRegisted: function (user) {
				return new Promise((resolve) => {
					userList.push(user);
					isRegisted = true;
					resolve(isRegisted);

					// $http.post('https://localhost:8080/api/register', user)
					// 	.success(function (response) {
					// 		resolve(response.success);
					// 	});
				});
			},

			logout: function () {
				isAuthenticated = false;
			}

		};

	}

})();
