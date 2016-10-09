'use strict';

/**
 * @ngdoc directive
 * @name motoApp.directive:footer
 * @description
 * # footer
 */
angular.module('motoApp')
  .directive('footer', function () {
    return {
      templateUrl: 'views/directives/footer.html',
      restrict: 'E',
      scope: {
        team: '@'
      },
      controllerAs: 'ctrl',
      controller: function ($scope) {
        this.team = $scope.team;
      }
    };
  });
