(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:leaderboardTest
	 * @description
	 * # leaderboardTest
	 * Test of the app
	 */

	describe('leaderboardCtrl', function () {
		let controller = null, $scope = null, $location;

		beforeEach(function () {
			module('leaderboard');
		});

		beforeEach(inject(function($controller, $rootScope, _$location_) {
			$scope = $rootScope.$new();
			$location = _$location_;

			controller = $controller('LeaderboardCtrl', {
				$scope: $scope
			});
		}));

		it('Should LeaderboardCtrl must be defined', function () {
			expect(controller).toBeDefined();
		});

		it('Should match the path Module name', function () {
			$location.path('/leaderboard');
			expect($location.path()).toBe('/leaderboard');
		});
		
	});

})();
