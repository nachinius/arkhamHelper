'use strict';

/**
 * @ngdoc directive
 * @name arkhamHelperApp.directive:investigator
 * @description
 * # investigator
 */
angular.module('arkhamHelperApp')
  .directive('investigator', function () {
    return {
      templateUrl: 'views/templates/investigatorDirective.html',
      restrict: 'E',
      scope: { inv: 'inv'}
    };
  });
