(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:leaderboardService
	 * @description
	 * # leaderboardService
	 * Service of the app
	 */

    angular.module('leaderboard')
		.factory('leaderboardService', LeaderboardService);

	LeaderboardService.$inject = ['$http'];

	function LeaderboardService($http) {

		const reloadTime = 60000;

		let userList = [];
		let lastLoading = 0;

		return {
			
			listUser: function () {
				return new Promise((resolve) => {
					let loading = new Date().getTime();

					// TODO: Delete after tests
					resolve([
						{
							username: 'Galahad',
							recent: 34,
							alltime: 2094,
						},
						{
							username: 'AvendoBlack',
							recent: 54,
							alltime: 6324,
						},
						{
							username: 'Grem',
							recent: 94,
							alltime: 1203,
						},
						{
							username: 'CoolPolishGuy',
							recent: 342,
							alltime: 958,
						}
					]);

					// if (userList.length === 0 || loading - lastLoading >= reloadTime) {
					// 	$http.get("http://127.0.0.1:4000/")
					// 		.success(function (response) {
					// 			userList = response.data;
					// 			lastLoading = new Date().getTime();
					// 			resolve(userList);
					// 		});
					// } else {
					// 	resolve(userList);
					// }
				});
			},

		};

	}

})();
