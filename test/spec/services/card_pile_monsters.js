'use strict';

describe('Service: cardPileMonsters', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var cardPileMonsters;
  beforeEach(inject(function (_cardPileMonsters_) {
    cardPileMonsters = _cardPileMonsters_;
  }));

  it('should do something', function () {
    expect(!!cardPileMonsters).toBe(true);
  });

});
