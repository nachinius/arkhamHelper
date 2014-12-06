'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.locations
 * @description # locations Service in the arkhamHelperApp.
 */
angular.module('arkhamHelperApp').service(
    'locationsService',
    function(neighborhoodsData, locationsData, gatesData, cardPileMonsters,
        cardPileGates, cardPile, cardBucket) {

      // AngularJS will instantiate a singleton by calling
      // "new" on this function
      
      var that = this;
      that.list = {};
      that.lists = {};
      
      that.NEIGHBORHOOD = 'neighborhood';
      that.lists[that.NEIGHBORHOOD] = {};
      that.ARKHAM_LOCATION = 'arkham location';
      that.lists[that.ARKHAM_LOCATION] = {};
      that.OTHER_WORLD = 'other world';
      that.lists[that.OTHER_WORLD] = {};
      
      // get the arkham neighborhoods
      angular.forEach(neighborhoodsData, function(value, key) {

        // only no expansion locations
        if (angular.isDefined(value.expansion) && value.expansion !== '') {
          return;
        }
        
        var location = angular.copy(value);
        location.type = that.NEIGHBORHOOD;
        location.cards = {};
        location.cards.monsters = cardBucket('monsters', cardPileMonsters);
        location.cards.inv = cardPile();
        
        that.list[key] = location;
        that.lists[that.NEIGHBORHOOD][key] = location;
        
      });
      
      // get the arkham locations
      angular.forEach(locationsData, function(value, key) {

        // only no-expansions
        if (angular.isDefined(value.expansion) && value.expansion != '') {
          return;
        }
        
        var location = angular.copy(value);
        location.type = that.ARKHAM_LOCATION;
        location.cards = {};
        location.cards.monsters = cardBucket('monsters', cardPileMonsters);
        location.cards.gates = cardBucket('gates', cardPileGates);
        location.cards.inv = cardPile();
        if (value.stability === "Unstable Location") {
          location.cards.clues = 1;
        } else {
          location.cards.clues = 0;
        }
        
        if (angular.isDefined(that.list[key])) {
          console.log('repeated key for place when inserting location', key,
              that.list);
        }
        that.list[key] = location;
        that.lists[that.ARKHAM_LOCATION][location.location] = location;
      });
      
      // other worlds came from gates available
      angular.forEach(gatesData, function(value, key) {

        if (angular.isDefined(value.expansion) && value.expansion != '') {
          return;
        }
        
        var location = angular.copy(value);
        location.type = that.OTHER_WORLD;
        location.cards = {};
        location.cards.left = cardPile();
        location.cards.right = cardPile();
        
        that.list[key] = location;
        that.lists[that.OTHER_WORLD][key] = location;
      });
      
      return that;
    });
