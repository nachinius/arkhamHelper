'use strict';

describe('Service: gatesData', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var gatesData;
  beforeEach(inject(function (_gatesData_) {
    gatesData = _gatesData_;
  }));

  it('should do something', function () {
    expect(!!gatesData).toBe(true);
  });

});
