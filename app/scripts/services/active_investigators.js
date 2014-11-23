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
    
	  /**
	   * Array of Investigators
	   */
    this.list = [];
    this.lastId = 0;
    
    /**
     * Adds the investigators `inv` to the game
     */
    this.add = function(inv) {
            
      // put an id to each investigator
      this.lastId++;
      inv.id = this.lastId;
      
      // set cards buckets
      inv.commonItems = cardBucket('commonItems', cardPileCommonItems);
      inv.spells = cardBucket('spells', cardPileSpells);
      inv.skillsCards = cardBucket('skills', cardPileSkills);
      inv.uniqueItems = cardBucket('uniqueItems', cardPileUnique);
      
      // @TODO allies
      inv.availableFocus = inv.focus;

      inv.inUse = true;
      this.list.push(inv);
    }
    
    this.remove = function(inv) {
    	inv.inUse = false;
    	var that = this;
    	// find if previously active or inactive
        var index = _.indexOf(inv);
        if(index >= 0) {
        	that.list.splice(that.list.indexOf(inv),1);
        	inv.commonItems.discardAll();
        	inv.spells.discardAll();
        	inv.skillsCards.discardAll();
        	inv.uniqueItems.discardAll();
        }
    }
    
    this.setupAll = function(inv) {
    	var that = this;
    	this.list.forEach(that.setupInvestigator);
    }
    
    this.setupInvestigator = function(inv) {
    	var card;
    		inv.fixedPossesions.forEach(function(fixed) {
    			switch (fixed.type) {
    			case 'common':
    				card = inv.commonItems.drawByName(fixed.which);
    				if(!card) {
    					console.log('missing fixed common items',fixed.which, fixed);
    				}
    				break;
    			case 'unique':
    				card = inv.uniqueItems.drawByName(fixed.which);
    				if(!card) {
    					console.log('missing fixed unique items',fixed.which, fixed);
    				}
    				break;
    			case 'skill':
    				card = inv.skillsCards.drawByName(fixed.which);
    				if(!card) {
    					console.log('missing fixed unique items',fixed.which, fixed);
    				}
    				break;
    			case 'spell':
    				card = inv.spells.drawByName(fixed.which);
    				if(!card) {
    					console.log('missing fixed unique items',fixed.which, fixed);
    				}
    				break;
    			case 'retainer':
    				console.log('adding fixed retainer not implemented', fixed);
    				break;
    			case 'blessing':
    				console.log('adding fixed blessing not implemented', fixed);
    				break;
    			case 'ally':
    				console.log('adding fixed allies not implemented', fixed);
    				break;
    			default:
    				console.log('adding unknown fixed possesion', fixed);
    				break;
    			}
    		});
    		
    		inv.randomPossessions.forEach(function(random) {
    			switch (random.type) {
    			case 'common':
    				for(var i=random.quantity;i>0;i--) {
    					inv.commonItems.draw();
    				}
    				break;
    			case 'unique':
    				for(var i=random.quantity;i>0;i--) {
    					inv.uniqueItems.draw();
    				}
    				break;
    			case 'skill':
    				for(var i=random.quantity;i>0;i--) {
    					inv.skillsCards.draw();
    				}
    				break;
    			case 'spell':
    				for(var i=random.quantity;i>0;i--) {
    					card = inv.spells.draw();
    				}
    				break;
    			default:
    				console.log('adding unknown random possesion', random);
    				break;
    			}
    		});
    }
    
  });
