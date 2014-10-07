'use strict';

describe('Service: cardBucket', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var cardBucket;
  beforeEach(inject(function (_cardBucket_) {
    cardBucket = _cardBucket_;
  }));

  it('should do something', function () {
    expect(!!cardBucket).toBe(true);
  });

});
