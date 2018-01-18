/*!
* gamification-client - v0.0.1 - MIT LICENSE 2018-01-18. 
* @author Loan Lassalle
*/
(function() {
	'use strict';

	/**
	 * @ngdoc index
	 * @name app
	 * @description
	 * # app
	 *
	 * Main modules of the application.
	 */

	angular.module('gamification-client', [
		'ngResource',
		'ngAria',
		 'ui.bootstrap',
		 'ngMaterial',
		'ngMdIcons',
		'ngCookies',
		'ngAnimate',
		'ngSanitize',
		'ui.router',
		'home',
		'leaderboard',
		'passwordmeter',
	]);

})();

(function () {
	'use strict';

	/**
	 * @ngdoc configuration file
	 * @name app.config:config
	 * @description
	 * # Config and run block
	 * Configutation of the app
	 */

	angular.module('gamification-client')
		.config(configure)
		.run(runBlock);

	configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$mdThemingProvider'];

	function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $mdThemingProvider) {
		$locationProvider.hashPrefix('!');

		// This is required for Browser Sync to work poperly
		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

		$urlRouterProvider.otherwise('/dashboard');
		
		$mdThemingProvider.theme('input');
	}

	runBlock.$inject = ['$rootScope'];

	function runBlock($rootScope) {
		'use strict';

		console.log('AngularJS run() function...');
	}

})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:homeModule
	 * @description
	 * # homeModule
	 * Module of the app
	 */

	angular.module('home', []);
	
})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:leaderboardModule
	 * @description
	 * # leaderboardModule
	 * Module of the app
	 */

    angular.module('leaderboard', []);

})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:passwordmeterModule
	 * @description
	 * # passwordmeterModule
	 * Module of the app
	 */

  	angular.module('passwordmeter', []);

})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:strengthpasswordModule
	 * @description
	 * # strengthpasswordModule
	 * Module of the app
	 */

	angular.module('strengthpassword', []);

})();

'use strict';

/**
 * @ngdoc function
 * @name app.route:homeRoute
 * @description
 * # homeRoute
 * Route of the app
 */

angular.module('gamification-client')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider

			.state('home', {
				url: '',
				abstract: true,
				templateUrl: 'app/modules/home/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'vm'
			})
			.state('home.dashboard', {
				url:'/dashboard',
				templateUrl: 'app/modules/home/dashboard.html'
			});	
	}]);

'use strict';

/**
 * @ngdoc function
 * @name app.route:leaderboardRoute
 * @description
 * # leaderboardRoute
 * Route of the app
 */

angular.module('leaderboard')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
		
			.state('home.leaderboard', {
				url:'/leaderboard',
				templateUrl: 'app/modules/leaderboard/leaderboard.html',
				controller: 'LeaderboardCtrl',
				controllerAs: 'vm'
			});
	}]);

'use strict';

/**
 * @ngdoc function
 * @name app.route:passwordmeterRoute
 * @description
 * # passwordmeterRoute
 * Route of the app
 */

angular.module('passwordmeter')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider

			.state('home.passwordmeter', {
				url:'/passwordmeter',
				templateUrl: 'app/modules/passwordmeter/passwordmeter.html',
				controller: 'PasswordmeterCtrl',
				controllerAs: 'vm'
			});
	}]);

'use strict';

/**
 * @ngdoc function
 * @name app.route:strengthpasswordRoute
 * @description
 * # strengthpasswordRoute
 * Route of the app
 */

angular.module('strengthpassword')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider

			.state('home.strengthpassword', {
				url:'/strengthpassword',
				templateUrl: 'app/modules/strengthpassword/strengthpassword.html',
				controller: 'StrengthpasswordCtrl',
				controllerAs: 'vm'
			});
	}]);

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
		vm.summary = 'This is a template for a simple home screen website. Use it as a starting point to create something more unique.';
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
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper pulvinar ante in tempus. Etiam ultrices ultricies euismod. \
						Fusce congue sapien lacus, non sodales sem ullamcorper eu. Vivamus rhoncus ipsum id sem pulvinar, et ullamcorper enim iaculis. \
						Vivamus vitae arcu non tortor volutpat lacinia ac ut dui. Etiam id sodales lectus, ac eleifend nisi. \
						Vivamus eget consectetur sem. Ut viverra nisl quis ex euismod, nec posuere lorem semper. Duis a porttitor mi, sit amet lacinia nisi. \
						In ornare massa vel magna maximus, sed cursus diam interdum. Nunc in risus vel mauris dictum pulvinar. \
						Morbi iaculis, nibh pretium gravida malesuada, sem nibh congue mauris, eget commodo augue odio at ex. \
						Duis purus tortor, porttitor a interdum non, suscipit a eros. Etiam odio quam, mollis in ante sed, vestibulum fringilla nibh. \
						Suspendisse ut placerat risus, non sollicitudin velit.',
			},
		];
		
	}

})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:LayoutCtrl
	 * @description
	 * # LayoutCtrl
	 * Controller of the app
	 */

	angular.module('gamification-client')
		.controller('LayoutCtrl', Layout);

	Layout.$inject = ['$mdSidenav'];

	/**
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Layout($mdSidenav) {
		const vm = this;

		vm.toggleSidenav = function (menuId) {
			$mdSidenav(menuId).toggle();
		};
		
	}

})();

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

		vm.title = 'Leaderboard';
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

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:passwordmeterCtrl
	 * @description
	 * # passwordmeterCtrl
	 * Controller of the app
	 */

  	angular.module('passwordmeter')
		.controller('PasswordmeterCtrl', Passwordmeter);

	Passwordmeter.$inject = ['passwordmeterService'];

	/**
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Passwordmeter(passwordmeterService) {
		const vm = this;

		vm.title = 'Password Meter App';
		vm.summary = 'This is a template for a simple home screen website. Use it as a starting point to create something more unique.';
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
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper pulvinar ante in tempus. Etiam ultrices ultricies euismod. \
						Fusce congue sapien lacus, non sodales sem ullamcorper eu. Vivamus rhoncus ipsum id sem pulvinar, et ullamcorper enim iaculis. \
						Vivamus vitae arcu non tortor volutpat lacinia ac ut dui. Etiam id sodales lectus, ac eleifend nisi. \
						Vivamus eget consectetur sem. Ut viverra nisl quis ex euismod, nec posuere lorem semper. Duis a porttitor mi, sit amet lacinia nisi. \
						In ornare massa vel magna maximus, sed cursus diam interdum. Nunc in risus vel mauris dictum pulvinar. \
						Morbi iaculis, nibh pretium gravida malesuada, sem nibh congue mauris, eget commodo augue odio at ex. \
						Duis purus tortor, porttitor a interdum non, suscipit a eros. Etiam odio quam, mollis in ante sed, vestibulum fringilla nibh. \
						Suspendisse ut placerat risus, non sollicitudin velit.',
				link: 'http://localhost/wechat/index.php',
			},
		];

	}

})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:strengthpasswordCtrl
	 * @description
	 * # strengthpasswordCtrl
	 * Controller of the app
	 */

	 angular.module('strengthpassword')
		.controller('StrengthpasswordCtrl', Strengthpassword);

	Strengthpassword.$inject = ['strengthpasswordService'];

	/**
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Strengthpassword(strengthpasswordService) {
		const vm = this;

		vm.title = 'Strength Password App';
		vm.summary = 'This is a template for a simple home screen website. Use it as a starting point to create something more unique.';
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
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper pulvinar ante in tempus. Etiam ultrices ultricies euismod. \
						Fusce congue sapien lacus, non sodales sem ullamcorper eu. Vivamus rhoncus ipsum id sem pulvinar, et ullamcorper enim iaculis. \
						Vivamus vitae arcu non tortor volutpat lacinia ac ut dui. Etiam id sodales lectus, ac eleifend nisi. \
						Vivamus eget consectetur sem. Ut viverra nisl quis ex euismod, nec posuere lorem semper. Duis a porttitor mi, sit amet lacinia nisi. \
						In ornare massa vel magna maximus, sed cursus diam interdum. Nunc in risus vel mauris dictum pulvinar. \
						Morbi iaculis, nibh pretium gravida malesuada, sem nibh congue mauris, eget commodo augue odio at ex. \
						Duis purus tortor, porttitor a interdum non, suscipit a eros. Etiam odio quam, mollis in ante sed, vestibulum fringilla nibh. \
						Suspendisse ut placerat risus, non sollicitudin velit.',
				link: 'https://github.com/lassalleloan/WeChat/tree/tweb-gamification-strengthpassword',
			},
		];
		
	}

})();


(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:homeService
	 * @description
	 * # homeService
	 * Service of the app
	 */

	angular.module('gamification-client')
		.factory('homeService', HomeService);

	HomeService.$inject = [];

	function HomeService() {
		
		return {

		};

	}

})();

(function() {
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
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {

			var menu = [
				
					{
						link: 'leaderboard',
							name: 'Leaderboard'
					},
			    
					{
						link: 'passwordmeter',
							name: 'Passwordmeter'
					},
			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	}

		}

})();

(function() {
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
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {

			var menu = [
				
					{
						link: 'leaderboard',
							name: 'Leaderboard'
					},
			    
					{
						link: 'passwordmeter',
							name: 'Passwordmeter'
					},
			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	}

		}

})();

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

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:passwordmeterService
	 * @description
	 * # passwordmeterService
	 * Service of the app
	 */

  	angular.module('passwordmeter')
		.factory('passwordmeterService', Passwordmeter);

	Passwordmeter.$inject = [];

	function Passwordmeter () {
		
		return {

		};

	}

})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:strengthpasswordService
	 * @description
	 * # strengthpasswordService
	 * Service of the app
	 */

	angular.module('strengthpassword')
		.factory('strengthpasswordService', Strengthpassword);

	Strengthpassword.$inject = [];

	function Strengthpassword () {
		
		return {

		};

	}

})();
