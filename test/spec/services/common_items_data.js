'use strict';

describe('Service: commonItemsData', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var commonItemsData;
  beforeEach(inject(function (_commonItemsData_) {
    commonItemsData = _commonItemsData_;
  }));

  it('should do something', function () {
    expect(!!commonItemsData).toBe(true);
  });

});
