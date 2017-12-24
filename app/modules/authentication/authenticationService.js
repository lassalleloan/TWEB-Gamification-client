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

	AuthenticationService.$inject = ['$http', '$location'];

	function AuthenticationService ($http, $location) {

		const userList = [
			{
				username: 'AvendoBlack',
				password: 'aaaaaaaa',
			},
		];

		let isAuthenticated = false;
		let isSignedUp = false;
		let isSettedPassword = false;
		let currentUser = {};

		return {

			isAuthenticated: function() {
				return isAuthenticated;
			},

			authenticate: function (user) {
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

			isSignedUp: function (user) {
				return isSignedUp;
			},

			signUp: function (user) {
				return new Promise((resolve) => {
					const index = userList.findIndex(u => user.username === u.username && user.password === u.password);

					if (index < 0) {
						userList.push(user);
					}

					isSignedUp = true;
					resolve(isSignedUp);

					// $http.post('https://localhost:8080/api/register', user)
					// 	.success(function (response) {
					// 		resolve(response.success);
					// 	});
				});
			},

			isSettedPassword: function () {
				return isSettedPassword;
			},

			setPassword: function (password) {
				return new Promise((resolve) => {
					currentUser.password = password;

					isSettedPassword = true;
					resolve(isSettedPassword);

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
				$location.path('/authentication');
			},

		};

	}

})();
