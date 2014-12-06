'use strict';

describe('Service: otherWorldData', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var otherWorldData;
  beforeEach(inject(function (_otherWorldData_) {
    otherWorldData = _otherWorldData_;
  }));

  it('should do something', function () {
    expect(!!otherWorldData).toBe(true);
  });

});
