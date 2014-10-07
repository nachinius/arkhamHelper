'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.cardPile
 * @description
 * # cardPile
 * Factory in the arkhamHelperApp.
 */
angular.module('arkhamHelperApp')
  .factory('cardPile', function () {
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
