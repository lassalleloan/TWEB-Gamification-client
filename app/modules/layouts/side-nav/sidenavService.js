(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:menuService
	* @description
	* # menuService
	* Service of the app
	*/

	angular
		.module('gamification-client')
		.factory('MenuService', Menu);

	// Inject your dependencies as .$inject = ['$http', '$otherDependency'];
	// function Name ($http, $otherDependency) {...}

	Menu.$inject = ['$http'];

	function Menu($http) {
		// Sample code.

		var menu = [
			{
				link: 'leaderboard',
					name: 'Leaderboard'
			},
		];

		return {
			listMenu: function () {
				return menu;
			}
		};

	}

})();
