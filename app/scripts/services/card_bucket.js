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
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
