'use strict';

describe('Service: cardPileCommonItems', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var cardPileCommonItems;
  beforeEach(inject(function (_cardPileCommonItems_) {
    cardPileCommonItems = _cardPileCommonItems_;
  }));

  it('should do something', function () {
    expect(!!cardPileCommonItems).toBe(true);
  });

});
