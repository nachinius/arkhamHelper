'use strict';

/**
 * @ngdoc directive
 * @name arkhamHelperApp.directive:turnAndPhaseCtrl
 * @description
 * # turnAndPhaseCtrl
 */
angular.module('arkhamHelperApp')
  .directive('turnAndPhaseCtrl', function () {
    return {
      templateUrl: 'views/templates/turnAndPhaseCtrlDirective.html',
      restrict: 'E',
      controller: function($scope, $element, $attrs, $transclude, phase) {
        $scope.phase = phase;
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
