'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.activeInvestigators
 * @description Keep a list of active investigators
 * # activeInvestigators
 * Service in the arkhamHelperApp.
 */
angular.module('arkhamHelperApp')
  .service('activeInvestigators', function activeInvestigators(investigatorsData, 
      cardBucket,
      commonItemsData) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
    this.list = [];

    this.add = function(inv) {
      // set card bucket list
      inv.commonCards = cardBucket();
      inv.commonCards.list.push(commonItemsData[0]);
      inv.commonCards.list.push(commonItemsData[1]);
      inv.inUse = true;
      this.list.push(inv);
    }
    
    this.add(investigatorsData[8]);
    this.add(investigatorsData[11]);
    
  });
