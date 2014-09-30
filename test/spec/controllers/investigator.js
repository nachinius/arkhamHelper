'use strict';

describe('Controller: InvestigatorCtrl', function () {

  // load the controller's module
  beforeEach(module('arkhamHelperApp'));

  var InvestigatorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InvestigatorCtrl = $controller('InvestigatorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
