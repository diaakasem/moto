'use strict';

/**
 * @ngdoc directive
 * @name motoApp.directive:mainHeader
 * @description
 * # mainHeader
 */
angular.module('motoApp')
  .directive('mainHeader', function () {
    return {
      templateUrl: 'views/directives/main-header.html',
      restrict: 'E',
      controllerAs: 'mainHeader',
      controller: function ($location, $rootScope) {
        this.title = 'Bombo';
        this.isActive = function(route) {
          return route === $location.path();
        };
        this.logout = function() {
          delete $rootScope.user;
          localStorage.removeItem('sessionKey');
          $location.path('/login');
        };
      }
    };
  });
