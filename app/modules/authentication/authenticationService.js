(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:authenticationService
	 * @description
	 * # authenticationService
	 * Service of the app
	 */

    angular.module('authentication')
		.factory('authenticationService', authenticationService);

	authenticationService.$inject = ['$http', 'User'];

	function authenticationService($http, User) {

        var service = {
            login: login,
            logout: logout,
            register: register,
            isAuthenticated: isAuthenticated,
            getCurrentUser: getCurrentUser
        };
        return service;

        function login(email, password) {
            return User
                .login({ email: email, password: password })
                .$promise;
        }

        function logout() {
            return User
                .logout()
                .$promise;
        }

        function register(email, password) {
            return User
                .create({
                    email: email,
                    password: password
                })
                .$promise;
        }

        function isAuthenticated() {
            return User.isAuthenticated();
        }

        function getCurrentUser() {
            return User.getCurrent();
        }

	}

})();
