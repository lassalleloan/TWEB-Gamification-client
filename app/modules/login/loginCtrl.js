(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:loginCtrl
	 * @description
	 * # loginCtrl
	 * Controller of the app
	 */

    angular.module('login')
		.controller('LoginCtrl', Login);

	Login.$inject = ['$location', 'loginService'];

	/**
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Login($location, loginService) {
		const vm = this;

		vm.title = "Login";

		vm.loginUser = function (user) {
			console.log('login user: ', user);

			// loginService
			// authenticationService.login(this.username, this.password)
			// 	.then(function (response) {
			// 		$location.path('/home');
			// 		console.log(response);
			// 	}, function (err) {
			// 		alert(err.data.error.message);
			// 		console.log(err);
			// 	});
		};	
	}
})();