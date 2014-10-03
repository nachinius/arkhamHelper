'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.activeInvestigators
 * @description Keep a list of active investigators
 * # activeInvestigators
 * Service in the arkhamHelperApp.
 */
angular.module('arkhamHelperApp')
  .service('activeInvestigators', function activeInvestigators(investigatorsData) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
    this.list = [];
    
    this.list.push(investigatorsData[8]);
    this.list.push(investigatorsData[11]);
    investigatorsData[8].inUse = true;
    investigatorsData[11].inUse = true;
    
  });
