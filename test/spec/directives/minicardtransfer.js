'use strict';

describe('Directive: miniCardTransfer', function () {

  // load the directive's module
  beforeEach(module('arkhamHelperApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mini-card-transfer></mini-card-transfer>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the miniCardTransfer directive');
  }));
});
