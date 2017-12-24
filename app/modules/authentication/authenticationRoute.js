'use strict';

/**
 * @ngdoc function
 * @name app.route:authenticationRoute
 * @description
 * # authenticationRoute
 * Route of the app
 */

angular.module('authentication')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider

			.state('home.authentication', {
				url:'/authentication',
				templateUrl: 'app/modules/authentication/authentication.html',
				controller: 'AuthenticationCtrl',
				controllerAs: 'vm',
				requiresAuthentication: false,
			})
			.state('home.register', {
				url:'/register',
				templateUrl: 'app/modules/authentication/register.html',
				controller: 'AuthenticationCtrl',
				controllerAs: 'vm',
				requiresAuthentication: false,
			})
			.state('home.authenHome', {
				url:'/authenHome',
				templateUrl: 'app/modules/authentication/authenHome.html',
				controller: 'AuthenticationCtrl',
				controllerAs: 'vm',
				requiresAuthentication: true,
			})
			.state('home.authenPassword', {
				url:'/authenPassword',
				templateUrl: 'app/modules/authentication/authenPassword.html',
				controller: 'AuthenticationCtrl',
				controllerAs: 'vm',
				requiresAuthentication: true,
			});
	}])
	.run(function ($rootScope, $state, authenticationService) {
		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
			if (toState.requiresAuthentication && !authenticationService.isAuthenticated()) {
				event.preventDefault();
				$state.go('home.authentication');
			}
		});
	});
