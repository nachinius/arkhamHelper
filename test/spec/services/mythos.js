'use strict';

describe('Service: mythos', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var mythos;
  beforeEach(inject(function (_mythos_) {
    mythos = _mythos_;
  }));

  it('should do something', function () {
    expect(!!mythos).toBe(true);
  });

});
