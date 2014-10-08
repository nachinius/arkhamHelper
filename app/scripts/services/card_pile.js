'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.cardPile
 * @description
 * # cardPile
 * Factory in the arkhamHelperApp.
 */
angular.module('arkhamHelperApp').factory('cardPile', function(Shuffler) {
  // Service logic
  // ...
  
  var list = [];
  
  // Public API here
  return {
    list : list,
    add : function(card) {
      list.push(card);
    },
    /**
     * find the first card given the 'name' and
     * remove from the deck
     */
    removeByName : function(name) {
      var found = _.find(list, function(card) {
        return card.name == name;
      });
      if (found) {
        list.splice(_.indexOf(list, found), 1);
        return true;
      }
    },
    /**
     * get one card from the top
     */
    draw : function() {
      return list.shift();
    },
    /**
     * put one card at the bottom of the pile
     */
    push: function(card) {
      list.push(card);
    },
    shuffle: function() {
      Shuffler(list);
    }
  };
});
