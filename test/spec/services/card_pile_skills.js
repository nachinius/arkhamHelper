'use strict';

describe('Service: cardPileSkills', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var cardPileSkills;
  beforeEach(inject(function (_cardPileSkills_) {
    cardPileSkills = _cardPileSkills_;
  }));

  it('should do something', function () {
    expect(!!cardPileSkills).toBe(true);
  });

});
