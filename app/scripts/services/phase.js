'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.phase
 * @description 
 * # phase
 * Service in the arkhamHelperApp.
 */
angular.module('arkhamHelperApp')
  .service('phase', function phase() {
    this.phases =['Upkeep','Movement','Arkham Encounter','Other World Encounter','Mythos'];
    this.counter = 0;
    this.currentPhase = 4;
    this.getCurrentPhase = function() {
      this.currentPhase = (this.counter + 4) % 5;
      return this.phases[this.currentPhase];
    };
    this.nextPhase = function() {
      this.counter++;
      return this.getCurrentPhase();
    }
    
  });
