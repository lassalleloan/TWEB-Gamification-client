(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:leaderboardCtrl
	 * @description
	 * # leaderboardCtrl
	 * Controller of the app
	 */

    angular.module('leaderboard')
		.controller('LeaderboardCtrl', Leaderboard);

	Leaderboard.$inject = ['$scope', 'leaderboardService'];

	/**
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Leaderboard($scope, leaderboardService) {
		
		const vm = this;

		vm.title = "Leaderboard";
		vm.sortColumn = 'recent';
		vm.sortDescending = true;
		
		leaderboardService.listUser()
			.then((listUser) => {
				vm.users = listUser;
				$scope.$apply();
			});

		vm.sortBy = function(column) {
			vm.sortDescending = vm.sortColumn === column ? !vm.sortDescending : false;
			vm.sortColumn = column;
        };

		vm.getSortClass = function(column) {
			return vm.sortColumn === column ? 
				(vm.sortDescending ? 'fa-caret-up' : 'fa-caret-down') : '';
		};

	}

})();
