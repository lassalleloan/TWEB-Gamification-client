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
		vm.summary = 'This is a WebMail with a password meter when an user change her password.';
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
				text: 'You need to deploy this application on your local machine.',
				linkRepository: 'https://github.com/lassalleloan/WeChat/tree/tweb-gamification-strengthpassword?files=1',
				linkApp: 'http://localhost/wechat/index.php',
			},
		];

	}

})();
