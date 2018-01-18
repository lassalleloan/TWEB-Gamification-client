(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:strengthpasswordTest
	 * @description
	 * # strengthpasswordTest
	 * Test of the app
	 */

	describe('strengthpasswordCtrl', function () {
		let controller = null, $scope = null, $location;

		beforeEach(function () {
			module('gamification-client');
		});

		beforeEach(inject(function ($controller, $rootScope, _$location_) {
			$scope = $rootScope.$new();
			$location = _$location_;

			controller = $controller('strengthpasswordCtrl', {
				$scope: $scope
			});
		}));

		it('Should StrengthpasswordCtrl must be defined', function () {
			expect(controller).toBeDefined();
		});

		it('Should match the path Module name', function () {
			$location.path('/strengthpassword');
			expect($location.path()).toBe('/strengthpassword');
		});

	});

})();
