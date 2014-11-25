'use strict';

describe('Service: data/alliesData', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var data/alliesData;
  beforeEach(inject(function (_data/alliesData_) {
    data/alliesData = _data/alliesData_;
  }));

  it('should do something', function () {
    expect(!!data/alliesData).toBe(true);
  });

});
