'use strict';

describe('Service: locations', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var locations;
  beforeEach(inject(function (_locations_) {
    locations = _locations_;
  }));

  it('should do something', function () {
    expect(!!locations).toBe(true);
  });

});
