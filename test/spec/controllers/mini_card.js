'use strict';

describe('Controller: MiniCardCtrl', function () {

  // load the controller's module
  beforeEach(module('arkhamHelperApp'));

  var MiniCardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MiniCardCtrl = $controller('MiniCardCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope' );
});
