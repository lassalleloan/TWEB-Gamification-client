(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:LeaderboardCtrl
	 * @description
	 * # LeaderboardCtrl
	 * Controller of the app
	 */

  	angular.module('leaderboard')
		.controller('LeaderboardCtrl', Leaderboard);

	Leaderboard.$inject = ['leaderboardService'];

	/**
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Leaderboard(leaderboardService) {
		/*jshint validthis: true */
		let vm = this;

		vm.title = "Leaderboard";
		vm.userList = leaderboardService.getUserList();
		vm.sortColumn = 'recent';
		vm.sortDescending = true;

		vm.sortBy = function(column) {
			vm.sortDescending = vm.sortColumn === column ? !vm.sortDescending : false;
			vm.sortColumn = column;
		}

		vm.getSortClass = function(column) {
			return vm.sortColumn === column ? 
				(vm.sortDescending ? 'fa fa-caret-up' : 'fa fa-caret-down') : '';
		}

	}

})();
