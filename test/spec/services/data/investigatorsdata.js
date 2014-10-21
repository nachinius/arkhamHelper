'use strict';

describe('Service: investigatorsData', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var investigatorsData;
  beforeEach(inject(function (_investigatorsData_) {
    investigatorsData = _investigatorsData_;
  }));

  it('should do something', function () {
    expect(!!investigatorsData).toBe(true);
  });

});
