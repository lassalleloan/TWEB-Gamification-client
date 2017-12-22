(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:registerCtrl
	 * @description
	 * # registerCtrl
	 * Controller of the app
	 */

  	angular.module('register')
		.controller('RegisterCtrl', Register);

	Register.$inject = ['$location', 'registerService'];

	/**
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Register(registerService) {
		const vm = this;

		vm.title = "Register";

		vm.registerUser = function (user) {
			registerService.saveUser(user);
		};
	}
})();
