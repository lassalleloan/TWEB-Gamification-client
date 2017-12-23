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

	Authentication.$inject = ['$scope', '$location', 'authenticationService'];

	/**
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Authentication($scope, $location, authenticationService) {

		const vm = this;

		vm.authentication = {
			title: 'Authentication',
			message: '',
			messageClass: '',
		};
		vm.register = {
			title: 'Register',
		};
		vm.authenHome = {
			title: 'Authenticated Home',
			message: 'Welcome',
			username: authenticationService.getCurrentUser().username,
		};

		vm.login = function (user) {
			authenticationService.isAuthenticated(user)
				.then(function(isAuthenticated) {
					if (isAuthenticated) {
						$location.path('/authenHome');
					} else {
						vm.authentication.message = 'Incorrect username or password';
						vm.authentication.messageClass = 'text-danger';
					}
					
					$scope.$apply();
				}, function() {
					vm.authentication.message = 'Internal server error';
					vm.authentication.messageClass = 'text-danger';
					$scope.$apply();
				});
		};

		vm.registerUser = function (user) {
			authenticationService.isRegisted(user)
			.then(function(isRegisted) {
				if (isRegisted) {
					$location.path('/authentication');
				} else {
					vm.authentication.message = 'Internal server error';
					vm.authentication.messageClass = 'text-danger';
				}
				
				$scope.$apply();
			}, function() {
				vm.authentication.message = 'Internal error';
				vm.authentication.messageClass = 'text-danger';
				$scope.$apply();
			});

			$location.path('/authentication');
		};

		vm.logout = function () {
			authenticationService.logout();
			$location.path('/authentication');
		};

	}

})();
