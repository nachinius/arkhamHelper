'use strict';

/**
 * @ngdoc directive
 * @name arkhamHelperApp.directive:invSpecialCardsList
 * @description
 * # invSpecialCardsList
 */
angular.module('arkhamHelperApp')
  .directive('invSpecialCardsList', function () {
    return {
      templateUrl: 'views/templates/invSpecialCardsList.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
