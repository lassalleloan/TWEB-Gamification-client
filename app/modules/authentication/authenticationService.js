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

		return {

		};

	}

})();
