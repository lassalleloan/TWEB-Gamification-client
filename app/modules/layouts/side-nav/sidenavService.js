(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:menuService
	 * @description
	 * # menuService
	 * Service of the app
	 */

    angular.module('gamification-client')
		.factory('MenuService', Menu);

	Menu.$inject = ['$http'];

	function Menu ($http) {
		
		const menu = [
			
				{
					link: 'leaderboard',
						name: 'Leaderboard'
				},
			
				{
					link: 'authentication',
						name: 'Authentication'
				},
			
		];

		return {
			
			listMenu: function () {
				return menu;
			},

		};

	}

})();
