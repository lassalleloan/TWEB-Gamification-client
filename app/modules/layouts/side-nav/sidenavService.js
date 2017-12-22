(function () {
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
				link: 'login',
				name: 'Login'
			},
		];

		return {
			listMenu: function () {
				return menu;
			},
		}
	}
})();
