'use strict';

/**
 * @ngdoc directive
 * @name arkhamHelperApp.directive:monster
 * @description
 * # monster
 */
angular.module('arkhamHelperApp')
  .directive('monster', function () {
    return {
      templateUrl: 'views/templates/monsterDirective.html',
      restrict: 'E',
      scope: {
        object: "="
      },
      link: function postLink(scope, element, attrs) {
        element.text('this is the monster directive');
      }
    };
  });
