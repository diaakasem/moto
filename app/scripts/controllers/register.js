'use strict';

/**
 * @ngdoc function
 * @name motoApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the motoApp
 */
angular.module('motoApp')
  .controller('RegisterCtrl', function ($resource, $location, $timeout) {
    if ($rootScope.user) {
      $location.path('/');
    }
    var that = this;
		this.model = {};
    this.onSubmit = function() {
      //debugger;
      var Auth = $resource('/api/auth/register');
      var newUser = new Auth(this.model)
      newUser.$save(this.model).then(function(result) {
        that.done = true;
        $timeout(function() {
          $location.path('/login');
        }, 5000);
      }, function(error) {
        console.error(error);
      });
    };
	});
