(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:authenticationService
	 * @description
	 * # authenticationService
	 * Service of the app
	 */

    angular.module('authentication')
		.factory('authenticationService', authenticationService);

	authenticationService.$inject = ['$http'];

	function authenticationService($http) {

		return {
		};

	}

})();
