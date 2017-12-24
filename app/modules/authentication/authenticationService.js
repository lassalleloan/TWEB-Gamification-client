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
		let isSignUp = false;
		let isSetPassword = false;
		let currentUser = {};

		return {

			isAuthenticated: function (user) {
				return new Promise((resolve) => {
					const index = userList.findIndex(u => user.username === u.username && user.password === u.password);
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

			isSignUp: function (user) {
				return new Promise((resolve) => {
					const index = userList.findIndex(u => user.username === u.username && user.password === u.password);

					if (index < 0) {
						userList.push(user);
					}

					isSignUp = true;
					resolve(isSignUp);

					// $http.post('https://localhost:8080/api/register', user)
					// 	.success(function (response) {
					// 		resolve(response.success);
					// 	});
				});
			},

			getCurrentUser: function () {
				return currentUser;
			},

			logout: function () {
				isAuthenticated = false;
			},

			isSetPassword: function (password) {
				return new Promise((resolve) => {
					currentUser.password = password;

					isSetPassword = true;
					resolve(isSetPassword);

					// $http.post('https://localhost:8080/api/register', user)
					// 	.success(function (response) {
					// 		resolve(response.success);
					// 	});
				});
			},

		};

	}

})();
