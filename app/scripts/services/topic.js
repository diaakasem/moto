'use strict';

/**
 * @ngdoc service
 * @name motoApp.Topic
 * @description
 * # Topic
 * Service in the motoApp.
 */
angular.module('motoApp')
  .service('Topic', function ($resource) {
      this.topics = $resource('/api/topic/:topicId', {topicId:'@id'},{
          query: {method: 'GET', isArray: true, cancellable: true}
      });

    this.listTopics = function() {
      return this.topics.query().$promise;
    };

  });
