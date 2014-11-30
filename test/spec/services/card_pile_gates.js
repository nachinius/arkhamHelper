'use strict';

describe('Service: cardPileGates', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var cardPileGates;
  beforeEach(inject(function (_cardPileGates_) {
    cardPileGates = _cardPileGates_;
  }));

  it('should do something', function () {
    expect(!!cardPileGates).toBe(true);
  });

});
