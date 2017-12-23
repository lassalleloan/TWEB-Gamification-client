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
				controllerAs: 'vm'
			})
			.state('home.register', {
				url:'/register',
				templateUrl: 'app/modules/authentication/register.html',
				controller: 'AuthenticationCtrl',
				controllerAs: 'vm'
			})
			.state('home.authenHome', {
				url:'/authenHome',
				templateUrl: 'app/modules/authentication/authenHome.html',
				controller: 'AuthenticationCtrl',
				controllerAs: 'vm'
			});
	}]);
