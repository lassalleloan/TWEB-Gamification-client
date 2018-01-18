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

					if (userList.length === 0 || loading - lastLoading >= reloadTime) {
						$http.get('https://stormy-hamlet-80891.herokuapp.com/scoreboard')
							.then(function (response) {
								userList = response.data;
								lastLoading = new Date().getTime();
								resolve(userList);
							}, function(response) {
								console.log('ERROR', response);	
							});
					} else {
						resolve(userList);
					}
				});
			},

		};

	}

})();
