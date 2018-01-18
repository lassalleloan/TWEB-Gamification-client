'use strict';

/**
 * @ngdoc function
 * @name app.route:passwordmeterRoute
 * @description
 * # passwordmeterRoute
 * Route of the app
 */

angular.module('passwordmeter')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider

			.state('home.passwordmeter', {
				url:'/passwordmeter',
				templateUrl: 'app/modules/passwordmeter/passwordmeter.html',
				controller: 'PasswordmeterCtrl',
				controllerAs: 'vm'
			});
	}]);
