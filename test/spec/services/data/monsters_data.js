'use strict';

describe('Service: monstersData', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var monstersData;
  beforeEach(inject(function (_monstersData_) {
    monstersData = _monstersData_;
  }));

  it('should do something', function () {
    expect(!!monstersData).toBe(true);
  });

});
