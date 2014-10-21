'use strict';

describe('Service: uniqueItemsData', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var uniqueItemsData;
  beforeEach(inject(function (_uniqueItemsData_) {
    uniqueItemsData = _uniqueItemsData_;
  }));

  it('should do something', function () {
    expect(!!uniqueItemsData).toBe(true);
  });

});
