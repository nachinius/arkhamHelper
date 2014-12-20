'use strict';

/**
 * @ngdoc directive
 * @name arkhamHelperApp.directive:matIcon
 * @description
 * # matIcon
 */
angular.module('arkhamHelperApp')
  .directive('matIcon', function () {
    return {
      restrict: 'E',
      transclude: true,
      template: '<div class="md-icon" style="width:24px;height:24px;"><ng-transclude></ng-transclude></div>',
      compile: function(element, attr) {
        console.log(element);
        var object = angular.element(element[0].children[0]);
        if(angular.isDefined(attr.icon)) {
          object.addClass('svg-ic_'+attr.icon+'_24px');
        }
      }
    };
  });
