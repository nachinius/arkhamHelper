'use strict';

/**
 * @ngdoc function
 * @name arkhamHelperApp.controller:AppctrlCtrl
 * @description
 * # AppctrlCtrl
 * Controller of the arkhamHelperApp
 */
angular.module('arkhamHelperApp')
  .controller('AppCtrl', function ($scope, menuService, routeConfig) {
    $scope.routeConfig = routeConfig;
    $scope.menuSrv = menuService;
  });
