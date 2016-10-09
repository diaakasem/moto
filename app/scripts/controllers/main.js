'use strict';

/**
 * @ngdoc function
 * @name motoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the motoApp
 */
angular.module('motoApp')
  .controller('MainCtrl', function ($rootScope, $location, Topic) {
    if (!$rootScope.user) {
      $location.path('/login');
    }
    var that = this;
    var promise = Topic.listTopics();
    console.log(promise);
    promise.then(function(result) {
      that.topics = result;
    }, function(error) {
      console.error(error);
    });

    this.goToTopic = function(topic) {
      //debugger;
      $location.path('/topic/' + topic.id);
    };
  });
