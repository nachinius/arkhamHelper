'use strict';

describe('Service: cardPile', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var cardPile, cards;
  beforeEach(inject(function (_cardPile_) {
    cardPile = _cardPile_();
    cards = [
      {name: 'myName'},
      {name: 'mySecondCard'}, 
      {name: 'myThirdCard'}
    ];
  }));
  

  it('should do something', function () {
    expect(!!cardPile).toBe(true);
  });

  it('.add(ele): should add a card to the pile', function() {
    cardPile.add(cards[0]);
    
    expect(cardPile.list).toContain(cards[0]);
  });
  
  it('.add(ele) should accept two cards that are equal', function() {
    cardPile.add(cards[0]);
    cardPile.add(cards[0]);
    
    expect(cardPile.list.length).toBe(2);
  })
  
  
  it('.removeByName(name) should remove a card from the list', function() {
    
    // prepare
    cardPile.add(cards[0]);
    cardPile.add(cards[1]);
    
    // test
    cardPile.removeByName(cards[0].name);
    
    // verify
    expect(cardPile.list).not.toContain(cards[0]);
    expect(cardPile.list).toContain(cards[1]);
  });
  
  it('.removeByName(name) should remove a single card from the list when there are two matching ones', function() {
    
    // prepare
    cardPile.add(cards[0]);
    cardPile.add(cards[0]); // same as first
    
    // test
    cardPile.removeByName(cards[0].name);
    
    // verify
    expect(cardPile.list.length).toBe(1);
  }); 

  it('draw() should get the card at the top', function() {
    // prepare
    cardPile.add(cards[0]);
    cardPile.add(cards[1]);
    cardPile.add(cards[2]);

    var drawnCard = cardPile.draw();

    expect(drawnCard).toBe(cards[0]);
  });

  it('draw() should remove the drawn card from the pile', function() {

    cardPile.add(cards[0]);
    cardPile.add(cards[1]);
    cardPile.add(cards[2]);

    var drawnCard = cardPile.draw();

    expect(cardPile.list).not.toContain(cards[0]);
  });

  it('draw() should decrement the card count by 1', function() {

    cardPile.add(cards[0]);
    cardPile.add(cards[1]);
    cardPile.add(cards[2]);

    var originalLength = cardPile.list.length;

    var drawnCard = cardPile.draw();

    expect(cardPile.list.length).toBe(originalLength - 1);
  });

  it('push() should put the card at the bottom', function() {

    cardPile.add(cards[0]);
    cardPile.add(cards[1]);

    cardPile.push(cards[2]);

    expect(cardPile.list[cardPile.list.length-1]).toBe(cards[2]);
  });

  it('push() should incremente the card count by 1', function() {

    cardPile.add(cards[0]);
    cardPile.add(cards[1]);

    var origLength = cardPile.list.length;

    cardPile.push(cards[2]);

    expect(cardPile.list.length).toBe(origLength + 1);
  });

  it('shuffle() should keep the cards constants', function() {

    cardPile.add(cards[0]);
    cardPile.add(cards[1]);
    cardPile.add(cards[2]);

    var origLength = cardPile.list.length;

    cardPile.shuffle();

    expect(cardPile.list.length).toBe(origLength);
  });
  
  
});
