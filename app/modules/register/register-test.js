(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:registerTest
	 * @description
	 * # registerTest
	 * Test of the app
	 */

	describe('registerCtrl', function () {
		let controller = null, $scope = null, $location;

		beforeEach(function () {
			module('register');
		});

		beforeEach(inject(function($controller, $rootScope, _$location_) {
			$scope = $rootScope.$new();
			$location = _$location_;

			controller = $controller('RegisterCtrl', {
				$scope: $scope
			});
		}));

		it('Should RegisterCtrl must be defined', function () {
			expect(controller).toBeDefined();
		});

		it('Should match the path Module name', function () {
			$location.path('/register');
			expect($location.path()).toBe('/register');
		});
	});
})();
