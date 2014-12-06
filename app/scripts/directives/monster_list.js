'use strict';

/**
 * @ngdoc directive
 * @name arkhamHelperApp.directive:monsterList
 * @description
 * # monsterList
 */
angular.module('arkhamHelperApp')
  .directive('monsterList', function () {
    return {
      templateUrl: 'views/templates/monsterListDirective.html',
      restrict: 'E',
      scope : {
        monsters: '='
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
