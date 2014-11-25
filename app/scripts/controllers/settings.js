'use strict';

/**
 * @ngdoc function
 * @name arkhamHelperApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the arkhamHelperApp
 */
angular.module('arkhamHelperApp')
  .controller('SettingsCtrl', function ($scope, investigatorsData, activeInvestigators, _) {

    // link to services
      $scope.investigatorsData = investigatorsData;
      $scope.activeList = activeInvestigators.list;
      
      /**
       * Toggle Investigator active/inactive
       */
      $scope.toggle = function(inv) {
        // find if previously active or inactive
        var index = _($scope.activeList).find(inv);
        // flag it inside the inv object
        inv.inUse = !inv.inUse;
        // remove if new state is inactive
        if(typeof index !== 'undefined') {
          activeInvestigators.remove(inv);
        } else {
          // add to last element if now is active
          activeInvestigators.add(inv);
        }
      };
      
      $scope.setupInv = function(inv) {
    	  activeInvestigators.setupInvestigator(inv);
      }
      
      $scope.setupAll = function() {
    	  activeInvestigators.setupAll();
      }
      
      
  });
