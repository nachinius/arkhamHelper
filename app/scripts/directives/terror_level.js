'use strict';

/**
 * @ngdoc directive
 * @name arkhamHelperApp.directive:terrorLevel
 * @description
 * # terrorLevel
 */
angular.module('arkhamHelperApp')
  .directive('terrorLevel', function (terrorLevelService) {
    return {
      templateUrl: '/views/templates/terrorLevel.html', 
      restrict: 'E',
      controller: function($scope, $element, $attrs, $transclude, terrorLevelService) {
    	  $scope.terrorLevel = terrorLevelService.level;
    	  $scope.increaseTerrorLevel = terrorLevelService.increase;
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
