'use strict';

/**
 * @ngdoc function
 * @name app.route:strengthpasswordRoute
 * @description
 * # strengthpasswordRoute
 * Route of the app
 */

angular.module('strengthpassword')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider

			.state('home.strengthpassword', {
				url:'/strengthpassword',
				templateUrl: 'app/modules/strengthpassword/strengthpassword.html',
				controller: 'StrengthpasswordCtrl',
				controllerAs: 'vm'
			});
	}]);
