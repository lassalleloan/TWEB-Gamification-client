(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:leaderboardService
	 * @description
	 * # leaderboardService
	 * Service of the app
	 */

    angular.module('leaderboard')
		.factory('leaderboardService', leaderboardService);

	leaderboardService.$inject = ['$http'];

	function leaderboardService($http) {
		const reloadTime = 60000;

		let userList = [];
		let lastLoading = 0;

		return {
			getUserList: function() {
				return new Promise((resolve) => {
					let loading = new Date().getTime();

					if (userList.length === 0 || loading - lastLoading >= reloadTime) {
						$http.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
							.then(function(response) {
								userList = response.data;
								lastLoading = new Date().getTime();
								resolve(userList);
							});
					} else {
						resolve(userList);
					}
				});
			}
		};
	}

})();
