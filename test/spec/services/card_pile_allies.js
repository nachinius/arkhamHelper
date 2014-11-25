'use strict';

describe('Service: cardPileAllies', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var cardPileAllies;
  beforeEach(inject(function (_cardPileAllies_) {
    cardPileAllies = _cardPileAllies_;
  }));

  it('should do something', function () {
    expect(!!cardPileAllies).toBe(true);
  });

});
