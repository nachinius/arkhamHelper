'use strict';

describe('Service: cardPile', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var cardPile;
  beforeEach(inject(function (_cardPile_) {
    cardPile = _cardPile_;
  }));
  
  // static card data
  var card = [ { name: 'myName'},{ name: 'mySecondCard'}];

  it('should do something', function () {
    expect(!!cardPile).toBe(true);
  });

  it('.add(ele): should add a card', function() {
    cardPile.add(card[0]);
    
    expect(cardPile.list).toContain(card[0]);
  });
  
  it('.add(ele) should accept two cards that are equal', function() {
    cardPile.add(card[0]);
    cardPile.add(card[0]);
    
    expect(cardPile.list.length).toBe(2);
  })
  
  
  it('.removeByName(name) should remove a card from the list', function() {
    
    // prepare
    cardPile.add(card[0]);
    cardPile.add(card[1]);
    
    // test
    cardPile.removeByName(card[0].name);
    
    // verify
    expect(cardPile.list).not.toContain(card[0]);
    expect(cardPile.list).toContain(card[1]);
  });
  
  it('.removeByName(name) should remove a single card from the list when there are two matching ones', function() {
    
    // prepare
    cardPile.add(card[0]);
    cardPile.add(card[0]); // same as first
    
    // test
    cardPile.removeByName(card[0].name);
    
    // verify
    expect(cardPile.list.length).toBe(1);
  }); 
  
  
});
