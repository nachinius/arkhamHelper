'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.cardPile
 * @description
 * # cardPile
 * Factory in the arkhamHelperApp.
 */
angular.module('arkhamHelperApp').factory('cardPile', function() {
  // Service logic
  // ...
  
  var list = [];
  
  // Public API here
  return {
    list : list,
    add : function(ele) {
      list.push(ele);
    },
    removeByName : function(name) {
      var found = _.find(list, function(card) {
        return card.name == name;
      });
      if (found) {
        list.splice(_.indexOf(list, found), 1);
        return true;
      }
    }
  };
});
