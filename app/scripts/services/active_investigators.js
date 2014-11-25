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
      cardPileUnique,
      cardPileAllies) {
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
      
      inv.cards = {}
      // set cards buckets
      inv.cards.commonItems = cardBucket('commonItems', cardPileCommonItems);
      inv.cards.spells = cardBucket('spells', cardPileSpells);
      inv.cards.skills = cardBucket('skills', cardPileSkills);
      inv.cards.uniqueItems = cardBucket('uniqueItems', cardPileUnique);
      inv.cards.allies = cardBucket('allies', cardPileAllies);
      
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
        	inv.cards.commonItems.discardAll();
        	inv.cards.spells.discardAll();
        	inv.cards.skills.discardAll();
        	inv.cards.uniqueItems.discardAll();
        }
        inv.setup = false;
    }
    
    this.setupAll = function(inv) {
    	var that = this;
    	this.list.forEach(that.setupInvestigator);
    }
    
    this.setupInvestigator = function(inv) {
    	var card;
    	if(inv.setup === true) {
    		console.log('Investigator '+inv.name+ ' is already set up!');
    		return;
    	}
    	inv.setup = true;
    		inv.fixedPossesions.forEach(function(fixed) {
    			switch (fixed.type) {
    			case 'common':
    				card = inv.cards.commonItems.drawByName(fixed.which);
    				if(!card) {
    					console.log('missing fixed common items',fixed.which, fixed);
    				}
    				break;
    			case 'unique':
    				card = inv.cards.uniqueItems.drawByName(fixed.which);
    				if(!card) {
    					console.log('missing fixed unique items',fixed.which, fixed);
    				}
    				break;
    			case 'skill':
    				card = inv.cards.skills.drawByName(fixed.which);
    				if(!card) {
    					console.log('missing fixed unique items',fixed.which, fixed);
    				}
    				break;
    			case 'spell':
    				card = inv.cards.spells.drawByName(fixed.which);
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
    				inv.cards.allies.drawByName(fixed.which);
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
    					inv.cards.commonItems.draw();
    				}
    				break;
    			case 'unique':
    				for(var i=random.quantity;i>0;i--) {
    					inv.cards.uniqueItems.draw();
    				}
    				break;
    			case 'skill':
    				for(var i=random.quantity;i>0;i--) {
    					inv.cards.skills.draw();
    				}
    				break;
    			case 'spell':
    				for(var i=random.quantity;i>0;i--) {
    					card = inv.cards.spells.draw();
    				}
    				break;
    			default:
    				console.log('adding unknown random possesion', random);
    				break;
    			}
    		});
    }
    
    this.add(investigatorsData[1]);
    this.add(investigatorsData[2]);
    this.setupAll();
  });
