(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:loginTest
	 * @description
	 * # loginTest
	 * Test of the app
	 */

	describe('loginCtrl', function () {
		let controller = null, $scope = null, $location;

		beforeEach(function () {
			module('login');
		});

		beforeEach(inject(function($controller, $rootScope, _$location_) {
			$scope = $rootScope.$new();
			$location = _$location_;

			controller = $controller('LoginCtrl', {
				$scope: $scope
			});
		}));

		it('Should LoginCtrl must be defined', function () {
			expect(controller).toBeDefined();
		});

		it('Should match the path Module name', function () {
			$location.path('/login');
			expect($location.path()).toBe('/login');
		});
	});
})();
