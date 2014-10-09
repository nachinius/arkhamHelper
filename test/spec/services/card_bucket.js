'use strict';

describe('Service: cardBucket', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var cardBucket;
  beforeEach(inject(function (_cardBucket_,_cardPileCommonItems_) {
    cardBucket = _cardBucket_('',_cardPileCommonItems_);
  }));
  
  function countBucket() {
    return cardBucket.list.length;
  }
  function countPile() {
    return cardBucket.pile.list.length;
  }

  it('should do something', function () {
    expect(!!cardBucket).toBe(true);
  });

  it('.getCardFromGamePile() should move 1 card from the pile to the bucket', function() {
    var n0 = countBucket();
    var n1 = countPile();
    
    var card = cardBucket.getCardFromGamePile();
    
    // constant the totals
    expect(countBucket()+countPile()).toBe(n0+n1);
    
    expect(countBucket()).toBe(n0+1);
    expect(countPile()).toBe(n1-1);
    
    // @TODO
    expect('the card draw').toBe('missing in pile, but present in bucket');
  });
  
  
  
});
