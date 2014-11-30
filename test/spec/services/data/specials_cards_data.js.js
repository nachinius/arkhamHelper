'use strict';

describe('Service: specialsCardsData.js', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var specialsCardsData.js;
  beforeEach(inject(function (_specialsCardsData.js_) {
    specialsCardsData.js = _specialsCardsData.js_;
  }));

  it('should do something', function () {
    expect(!!specialsCardsData.js).toBe(true);
  });

});
