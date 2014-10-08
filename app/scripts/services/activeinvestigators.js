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
      cardPileCommonItems) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
    this.list = [];

    this.add = function(inv) {
      // set card bucket list
      inv.commonCards = cardBucket('commonItems');
      
      var card = cardPileCommonItems.draw();
      inv.commonCards.list.push(card);
      
      var card = cardPileCommonItems.draw();
      inv.commonCards.list.push(card);
      
      inv.inUse = true;
      this.list.push(inv);
    }
    
    this.add(investigatorsData[8]);
    this.add(investigatorsData[11]);
    
  });
