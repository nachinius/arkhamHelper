'use strict';

describe('Service: spellItemsData', function () {

  // load the service's module
  beforeEach(module('arkhamHelperApp'));

  // instantiate service
  var spellItemsData;
  beforeEach(inject(function (_spellItemsData_) {
    spellItemsData = _spellItemsData_;
  }));

  it('should do something', function () {
    expect(!!spellItemsData).toBe(true);
  });

  it('each spell should match structure', function() {

    angular.forEach(spellItemsData, function(spell) {
      expect(spell.name).toBeDefined();
      expect(spell.casting).toBeDefined();
      expect(spell.sanity).toBeDefined();
      expect(spell.quantity).toBeDefined();
      expect(spell.hands).toBeDefined();
      expect(spell.quantity).toBeDefined();
    });

  });

});
