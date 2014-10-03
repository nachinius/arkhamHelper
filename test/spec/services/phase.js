'use strict';

describe('Service: phase', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var phase;
  beforeEach(inject(function (_phase_) {
    phase = _phase_;
  }));

  it('should do something', function () {
    expect(!!phase).toBe(true);
  });

});
