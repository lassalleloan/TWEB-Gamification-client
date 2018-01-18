(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:passwordmeterTest
	 * @description
	 * # passwordmeterTest
	 * Test of the app
	 */

	describe('passwordmeterCtrl', function () {
		let controller = null, $scope = null, $location;

		beforeEach(function () {
			module('gamification-client');
		});

		beforeEach(inject(function ($controller, $rootScope, _$location_) {
			$scope = $rootScope.$new();
			$location = _$location_;

			controller = $controller('passwordmeterCtrl', {
				$scope: $scope
			});
		}));

		it('Should PasswordmeterCtrl must be defined', function () {
			expect(controller).toBeDefined();
		});

		it('Should match the path Module name', function () {
			$location.path('/passwordmeter');
			expect($location.path()).toBe('/passwordmeter');
		});

	});
	
})();
