(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:homeCtrl
	 * @description
	 * # homeCtrl
	 * Controller of the app
	 */

	angular.module('gamification-client')
		.controller('HomeCtrl', Home);

	Home.$inject = ['homeService'];

	/**
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Home(homeService) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Hello, gamification-client!";
		vm.version = "1.0.0";
		vm.listFeatures = homeService.getFeaturesList();

	}

})();
