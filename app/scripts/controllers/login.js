'use strict';

/**
 * @ngdoc function
 * @name motoApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the motoApp
 */
angular.module('motoApp')
  .controller('LoginCtrl', function ($rootScope, $resource, $location, $timeout) {
    if ($rootScope.user) {
      $location.path('/');
    }
    var that = this;
		this.model = {};
    this.onSubmit = function() {
      var Auth = $resource('/api/auth/login');
      var newUser = new Auth(this.model)
      newUser.$save(this.model).then(function(result) {
        $rootScope.user = result;
        localStorage.setItem('sessionKey', result.sessionKey);
        that.done = true;
        $timeout(function() {
          $location.path('/');
        }, 2000);
      }, function(error) {
        console.error(error);
      });
    };
  });
