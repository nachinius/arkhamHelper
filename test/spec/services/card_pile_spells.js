'use strict';

describe('Service: cardPileSpells', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var cardPileSpells;
  beforeEach(inject(function (_cardPileSpells_) {
    cardPileSpells = _cardPileSpells_;
  }));

  it('should do something', function () {
    expect(!!cardPileSpells).toBe(true);
  });

});
