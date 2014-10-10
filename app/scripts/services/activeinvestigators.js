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
      cardPileCommonItems,
      cardPileSpells,
      cardPileSkills,
      cardPileUnique) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
    this.list = [];

    this.add = function(inv) {
      
      // @TODO check the inv starting sheet to add items
      
      // set common card on inv
      inv.commonItems = cardBucket('commonItems', cardPileCommonItems);
      inv.commonItems.draw();
      inv.commonItems.draw();
      
      // set spell cards on inv
      inv.spells = cardBucket('spells', cardPileSpells);
      inv.spells.draw(); 
      inv.spells.draw();
      
      // set skills
      inv.skillsCards = cardBucket('skills', cardPileSkills);
      inv.skillsCards.draw();
      inv.skillsCards.draw();
      
      // set skills
      inv.uniqueItems = cardBucket('uniqueItems', cardPileUnique);
      inv.uniqueItems.draw();
      inv.uniqueItems.draw();
      
      inv.availableFocus = inv.focus;

      inv.inUse = true;
      this.list.push(inv);
    }
    
    this.add(investigatorsData[8]);
    this.add(investigatorsData[11]);
    
  });
