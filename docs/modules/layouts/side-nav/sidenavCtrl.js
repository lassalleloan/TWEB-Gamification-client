(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:SidenavCtrl
	 * @description
	 * # SidenavCtrl
	 * Controller of the app
	 */
	
	angular.module('gamification-client')
		.controller('SidenavCtrl', SidenavCtrl);

	// Injecting Denpendencies

	SidenavCtrl.$inject = ['$mdSidenav', '$state', 'MenuService', '$scope'];

	/**
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function SidenavCtrl($mdSidenav, $state, MenuService, $scope) {
		
		const vm = this;

		vm.toggleSidenav = function (menuId) {
			$mdSidenav(menuId).toggle();
		};

		vm.closeSidenav = function () {
			$mdSidenav('left').close();
		};

		// Close menu on small screen after click on menu item.
		// Only use $scope in controllerAs when necessary; for example, publishing and subscribing events using $emit, $broadcast, $on or $watch.
		$scope.$on('$stateChangeSuccess', vm.closeSidenav);

		vm.menu = MenuService.listMenu();

		vm.navigateTo = function (target) {
			const page = target;
			$state.go(page);
		};

	}

})();
