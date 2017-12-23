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

	Authentication.$inject = ['$scope', 'authenticationService'];

	/**
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Authentication($scope, authenticationService) {

		const vm = this;

		vm.title = "Authentication";

		vm.onSubmit = function (user) {
			authenticationService.isAuthenticated(user)
				.then(function(isAuthenticated) {
					if (isAuthenticated) {
						vm.message = "You are authenticated";
						vm.messageClass = "text-info";
					} else {
						vm.message = "Incorrect username or password";
						vm.messageClass = "text-danger";
					}
					
					$scope.$apply();
				}, function(isNotAuthenticated) {
					vm.message = "Incorrect username or password";
					vm.messageClass = "text-danger";
					$scope.$apply();
				});
		};

	}

})();
