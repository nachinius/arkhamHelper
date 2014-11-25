'use strict';

describe('Service: terrorLevel', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var terrorLevel;
  beforeEach(inject(function (_terrorLevel_) {
    terrorLevel = _terrorLevel_;
  }));

  it('should do something', function () {
    expect(!!terrorLevel).toBe(true);
  });

});
