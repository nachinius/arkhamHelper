'use strict';

describe('Directive: investigator', function () {

  // load the directive's module
  beforeEach(module('arkhamHelperApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

//  it('should make hidden element visible', inject(function ($compile) {
//    element = angular.element('<investigator></investigator>');
//    element = $compile(element)(scope);
//    expect(element.text()).toBe('this is the investigator directive');
//  }));
});
