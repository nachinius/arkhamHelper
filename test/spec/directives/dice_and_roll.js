'use strict';

describe('Directive: diceAndRoll', function () {

  // load the directive's module
  beforeEach(module('arkhamHelperApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dice-and-roll></dice-and-roll>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the diceAndRoll directive');
  }));
});
