(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:authenticationCtrl
	 * @description
	 * # authenticationCtrl
	 * Controller of the app
	 */

    angular.module('authentication')
		.controller('AuthenticationCtrl', Authentication);

	Authentication.$inject = ['authenticationService'];

	/**
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Authentication(authenticationService) {

		const vm = this;

		vm.title = "Authentication";
		
	}

})();
