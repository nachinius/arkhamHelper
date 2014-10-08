'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.cardBucket
 * @description
 * # cardBucket
 * Factory in the arkhamHelperApp.
 */
angular.module('arkhamHelperApp')
  .factory('cardBucket', function () {
    // Service logic

    var cardBucket = function(type) {
      this.list = [];
      this.type = type;
      return this;
    };
    
    // Public API here
    return function Factory(type) {
      return new cardBucket(type);
    }
  });
