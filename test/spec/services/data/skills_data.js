'use strict';

describe('Service: skillsData', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var skillsData;
  beforeEach(inject(function (_skillsData_) {
    skillsData = _skillsData_;
  }));

  it('should do something', function () {
    expect(!!skillsData).toBe(true);
  });

});
