'use strict';

describe('Service: locationAdministrationBuildingEncounter', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var locationAdministrationBuildingEncounter;
  beforeEach(inject(function (_locationAdministrationBuildingEncounter_) {
    locationAdministrationBuildingEncounter = _locationAdministrationBuildingEncounter_;
  }));

  it('should do something', function () {
    expect(!!locationAdministrationBuildingEncounter).toBe(true);
  });

});
