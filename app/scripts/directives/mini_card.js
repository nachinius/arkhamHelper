'use strict';

/**
 * @ngdoc directive
 * @name arkhamHelperApp.directive:miniCard
 * @description
 * # miniCard
 */
angular.module('arkhamHelperApp')
  .directive('miniCard', function ($location, $document) {
    return {
      templateUrl: 'views/templates/miniCardDirective.html',
      restrict: 'E',
      scope: {
        cards : '=',
        inv: '=',
        type: '@'
      },
      link: function postLink(scope, element, attrs) {
        
        
      }
    };
  });

