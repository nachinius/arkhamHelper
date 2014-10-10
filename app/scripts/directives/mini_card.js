'use strict';

/**
 * @ngdoc directive
 * @name arkhamHelperApp.directive:miniCard
 * @description
 * # miniCard
 */
angular.module('arkhamHelperApp')
  .directive('miniCard', function () {
    return {
      templateUrl: 'views/templates/miniCardDirective.html',
      restrict: 'E',
      scope: {
        cards : '='
      },
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
