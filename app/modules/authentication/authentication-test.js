(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:authenticationTest
	 * @description
	 * # authenticationTest
	 * Test of the app
	 */

	describe('authenticationCtrl', function () {
		let controller = null, $scope = null, $location;

		beforeEach(function () {
			module('authentication');
		});

		beforeEach(inject(function($controller, $rootScope, _$location_) {
			$scope = $rootScope.$new();
			$location = _$location_;
			
			controller = $controller('AuthenticationCtrl', {
				$scope: $scope
			});
		}));

		it('Should AuthenticationCtrl must be defined', function () {
			expect(controller).toBeDefined();
		});

		it('Should match the path Module name', function () {
			$location.path('/authentication');
			expect($location.path()).toBe('/authentication');
		});
	});
})();
