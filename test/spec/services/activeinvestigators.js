'use strict';

describe('Service: activeInvestigators', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var activeInvestigators;
  beforeEach(inject(function (_activeInvestigators_) {
    activeInvestigators = _activeInvestigators_;
  }));

  it('should do something', function () {
    expect(!!activeInvestigators).toBe(true);
  });

});
