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

    var cardBucket = function() {
      cardBucket.list = [];
      return cardBucket;
    };
    
    // Public API here
    return cardBucket;
  });
