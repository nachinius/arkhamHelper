'use strict';

describe('Service: routeConfig', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var routeConfig;
  beforeEach(inject(function (_routeConfig_) {
    routeConfig = _routeConfig_;
  }));

  it('should do something', function () {
    expect(!!routeConfig).toBe(true);
  });

});
