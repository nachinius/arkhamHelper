'use strict';

describe('Service: neighborhoodsData.js', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var neighborhoodsData.js;
  beforeEach(inject(function (_neighborhoodsData.js_) {
    neighborhoodsData.js = _neighborhoodsData.js_;
  }));

  it('should do something', function () {
    expect(!!neighborhoodsData.js).toBe(true);
  });

});
