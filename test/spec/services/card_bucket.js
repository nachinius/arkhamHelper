'use strict';

describe('Service: cardBucket', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var cardBucket, cardPile;
  var cards = [{name: 'a'},{name: 'b'},{name: 'c'},{name: 'd'}];
  beforeEach(inject(function (_cardBucket_,_cardPile_) {
    cardPile = _cardPile_();
    cardBucket = _cardBucket_('',cardPile);
  }));
  
  function countBucket() {
    return cardBucket.list.length;
  }
  function countPile() {
    return cardPile.list.length;
  }

  it('should do something', function () {
    expect(!!cardBucket).toBe(true);
  });

  it('.draw() should move 1 card from the pile to the bucket', function() {

    angular.forEach(cards, function(card) {
      cardPile.add(angular.copy(card));
    });

    var n0 = countBucket();
    var n1 = countPile();
    
    var card = cardBucket.draw();
    
    // constant the totals
    expect(countBucket()+countPile()).toBe(n0+n1);
    
    expect(countBucket()).toBe(n0+1);
    expect(countPile()).toBe(n1-1);
    
    var foundInPile = cardPile.findByName(card.name);
    var foundInBucket = cardBucket.findByName(card.name);
    
    expect(foundInPile).toBeFalsy();
    expect(foundInBucket).toBeTruthy();
  });

  it('.draw() should not put any card when pile cards are empty', function() {
    
    // prepare
    while(cardPile.list.length > 0) {
      cardBucket.draw();
    }

    expect(countPile()).toBe(0);
    var n0 = countBucket();

    // test
    cardBucket.draw();

    expect(countBucket()).toBe(n0);
  });
  
  
  
});
