'use strict';

/**
 * @ngdoc function
 * @name app.route:leaderboardRoute
 * @description
 * # leaderboardRoute
 * Route of the app
 */

angular.module('leaderboard')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
		
			.state('home.leaderboard', {
				url:'/leaderboard',
				templateUrl: 'app/modules/leaderboard/leaderboard.html',
				controller: 'LeaderboardCtrl',
				controllerAs: 'vm'
			});
	}]);
