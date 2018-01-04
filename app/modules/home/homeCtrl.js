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
			{
				title: 'Authentication', 
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
