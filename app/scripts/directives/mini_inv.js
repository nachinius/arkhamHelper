'use strict';

/**
 * @ngdoc directive
 * @name arkhamHelperApp.directive:miniInv
 * @description
 * # miniInv
 */
angular.module('arkhamHelperApp')
  .directive('miniInv', function () {
    return {
      templateUrl: 'views/templates/miniInvDirective.html',
      restrict: 'E',
      scope: {
        object: "="
      },
      link: function postLink(scope, element, attrs) {
        element.text('this is the miniInv directive');
      }
    };
  });
