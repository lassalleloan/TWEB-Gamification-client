(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:passwordmeterService
	 * @description
	 * # passwordmeterService
	 * Service of the app
	 */

  	angular.module('passwordmeter')
		.factory('passwordmeterService', Passwordmeter);

	Passwordmeter.$inject = [];

	function Passwordmeter () {
		
		return {

		};

	}

})();
