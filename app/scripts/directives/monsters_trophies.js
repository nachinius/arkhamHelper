'use strict';

/**
 * @ngdoc directive
 * @name arkhamHelperApp.directive:monstersTrophies
 * @description
 * # monstersTrophies
 */
angular.module('arkhamHelperApp').directive('monstersTrophies', function() {

  return {
    templateUrl : 'views/templates/monstersTrophiesDirective.html',
    restrict : 'E',
    scope : {
      inv : '='
    },
    controller : function($scope, $element, $attrs, $transclude) {

    },
    link : function postLink(scope, element, attrs) {

    }
  };
});
