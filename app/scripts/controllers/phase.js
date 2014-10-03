'use strict';

/**
 * @ngdoc function
 * @name arkhamHelperApp.controller:PhaseCtrl
 * @description
 * # PhaseCtrl
 * Controller of the arkhamHelperApp
 */
angular.module('arkhamHelperApp')
  .controller('PhaseCtrl', function ($scope, phase) {
    $scope.phase = phase;
  });
