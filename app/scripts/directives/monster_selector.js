'use strict';

/**
 * @ngdoc directive
 * @name arkhamHelperApp.directive:monsterSelector
 * @description
 * # monsterSelector
 */
angular.module('arkhamHelperApp')
  .directive('monsterSelector', function () {
    return {
      templateUrl: 'views/templates/monsterSelectorDirective.html',
      restrict: 'E',
      scope: {
        monsters: '='
      },
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
