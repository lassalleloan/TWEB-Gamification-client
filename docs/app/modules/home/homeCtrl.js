(function () {
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
		const vm = this;

		vm.title = 'Hello, gamification-client!';
		vm.summary = 'This is a client application for Gamification. This will display the user\'s scores.';
		vm.authors = [
			{
				name: 'Galahad',
				link: 'https://github.com/galahad1',
			},
			{
				name: 'AvendoBlack',
				link: 'https://github.com/lassalleloan',
			},
		];
		vm.sections = [
			{
				title: 'Description', 
				/*jshint multistr: true */
				text: 'With the addition of third-party application, it is easy to allow users to increase their score. For example, Password Meter application allows you to obtain additional points when you change your password.',
			},
		];
		
	}

})();
