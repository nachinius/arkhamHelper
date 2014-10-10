'use strict';

describe('Service: cardPileUnique', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var cardPileUnique;
  beforeEach(inject(function (_cardPileUnique_) {
    cardPileUnique = _cardPileUnique_;
  }));

  it('should do something', function () {
    expect(!!cardPileUnique).toBe(true);
  });

});
