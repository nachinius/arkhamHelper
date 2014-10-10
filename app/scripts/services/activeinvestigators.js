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
      inv.commonCards = cardBucket('commonItems', cardPileCommonItems);
      inv.commonCards.draw();
      inv.commonCards.draw();
      
      // set spell cards on inv
      inv.spellCards = cardBucket('spellsCards', cardPileSpells);
      inv.spellCards.draw(); 
      inv.spellCards.draw();
      
      // set skills
      inv.skillsCards = cardBucket('skillsCards', cardPileSkills);
      inv.skillsCards.draw();
      inv.skillsCards.draw();
      
      // set skills
      inv.uniqueCards = cardBucket('uniqueCards', cardPileUnique);
      inv.uniqueCards.draw();
      inv.uniqueCards.draw();

      inv.inUse = true;
      this.list.push(inv);
    }
    
    this.add(investigatorsData[8]);
    this.add(investigatorsData[11]);
    
  });
