'use strict';

/**
 * @ngdoc function
 * @name arkhamHelperApp.controller:LocationsCtrl
 * @description
 * # LocationsCtrl
 * Controller of the arkhamHelperApp
 */
angular.module('arkhamHelperApp')
  .controller('LocationsCtrl', function ($scope, locationsService) {
    
    $scope.svc = locationsService;
    
  });
