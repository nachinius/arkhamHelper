'use strict';

describe('Controller: PhaseCtrl', function () {

  // load the controller's module
  beforeEach(module('arkhamHelperApp'));

  var PhaseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhaseCtrl = $controller('PhaseCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
