'use strict';

describe('Service: cardPileSpecials', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var cardPileSpecials;
  beforeEach(inject(function (_cardPileSpecials_) {
    cardPileSpecials = _cardPileSpecials_;
  }));

  it('should do something', function () {
    expect(!!cardPileSpecials).toBe(true);
  });

});
