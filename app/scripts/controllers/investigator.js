'use strict';

/**
 * @ngdoc function
 * @name arkhamHelperApp.controller:InvestigatorCtrl
 * @description
 * # InvestigatorCtrl
 * Controller of the arkhamHelperApp
 */
angular.module('arkhamHelperApp').controller('InvestigatorCtrl',
    function($scope, activeInvestigators, phase) {

      $scope.investigators = activeInvestigators.list;
      $scope.phase = phase;
});
