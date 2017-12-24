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
			title: 'Home',
			message: 'Welcome ' + 
				authenticationService.getCurrentUser().username,
		};
		vm.authenPassword = {
			title: 'Change Password',
		};

		vm.authenticate = function (user) {
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

		vm.signUp = function (user) {
			authenticationService.isSignUp(user)
				.then(function(isSignUp) {
					if (isSignUp) {
						$location.path('/authentication');
					} else {
						vm.authentication.message = 'Internal server error';
						vm.authentication.messageClass = 'text-danger';
					}
					
					$scope.$apply();
				}, function() {
					vm.authentication.message = 'Internal server error';
					vm.authentication.messageClass = 'text-danger';
					$scope.$apply();
				});

				$location.path('/authentication');
		};

		vm.logout = function () {
			authenticationService.logout();
			$location.path('/authentication');
		};

		vm.setPassword = function (password) {
			authenticationService.isSetPassword(password)
				.then(function(isSetPassword) {
					if (!isSetPassword) {
						vm.authentication.message = 'Internal server error';
						vm.authentication.messageClass = 'text-danger';
					}
					
					$scope.$apply();
				}, function() {
					vm.authentication.message = 'Internal server error';
					vm.authentication.messageClass = 'text-danger';
					$scope.$apply();
				});

				vm.logout();
		};

	}

})();
