'use strict';

describe('Directive: turnAndPhaseCtrl', function () {

  // load the directive's module
  beforeEach(module('arkhamHelperApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<turn-and-phase-ctrl></turn-and-phase-ctrl>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the turnAndPhaseCtrl directive');
  }));
});
