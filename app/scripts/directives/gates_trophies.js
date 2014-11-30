'use strict';

/**
 * @ngdoc directive
 * @name arkhamHelperApp.directive:gatesTrophies
 * @description # gatesTrophies
 */
angular.module('arkhamHelperApp').directive('gatesTrophies', function() {

  return {
    templateUrl : 'views/templates/gatesTrophiesDirective.html',
    restrict : 'E',
    scope : {
      inv : '='
    },
    controller: function($scope, $element, $attrs, $transclude) {
      $scope.selecting = function(gate) {
        $scope.inv.cards.gates.drawByName(gate.name);
      }
    },
    link : function postLink(scope, element, attrs) {

    }
  };
});
