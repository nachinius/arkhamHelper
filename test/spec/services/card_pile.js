'use strict';

describe('Service: cardPile', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var cardPile;
  beforeEach(inject(function (_cardPile_) {
    cardPile = _cardPile_;
  }));

  it('should do something', function () {
    expect(!!cardPile).toBe(true);
  });

  it('should add a card', function() {
    var card = {
        name: 'myName',
    }
    cardPile.add(card);
    
    expect(cardPile.list).toContain(card);
  })
});
