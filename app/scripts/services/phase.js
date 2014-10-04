'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.phase
 * @description 
 * # phase
 * Service in the arkhamHelperApp.
 */
angular.module('arkhamHelperApp')
  .service('phase', function phase(activeInvestigators) {
    
    var MYTHOS = 'Mythos';
    var UPKEEP = 'Upkeep';
    /**
     * The available phase
     */
    this.phases =[UPKEEP,'Movement','Arkham Encounter','Other World Encounter', MYTHOS];
    this.lastPhase = MYTHOS;
    this.firstPhase = UPKEEP;
    
    /**
     * @var Count the phases passed
     */
    this.counter = 0;
    
    /**
     * @var In which phase we are
     */
    this.currentPhase = 4;
   
    
    /**
     * Which is current phase name
     */
    this.getCurrentPhase = function() {
      this.currentPhase = (this.counter + 4) % 5;
      return this.phases[this.currentPhase];
    };
    
    /**
     * Advance phase, and return new phase name
     */
    this.nextPhase = function() {
      this.counter++;
      return this.getCurrentPhase();
    }
    
    // shortcut
    var activeList = activeInvestigators.list;
    
    this.getActivePlayers = function() {
      return activeList.length;
    }
    
    /**
     * @var
     */
    this.firstInvestigator = null;
    
    /**
     * @var
     */
    this.currentInvestigator = null;
    
    this.nextInvestigatorOrPhase = function() {
      // at the beginning of the game, select fill
      // first and current Inv
      if(this.firstInvestigator === null) {
        this.firstInvestigator = activeList[0];
        this.currentInvestigator = this.firstInvestigator;
        this.nextPhase();
        return;
      }
      
      var firstIndex = activeList.indexOf(this.firstInvestigator);
      var currentIndex = activeList.indexOf(this.currentInvestigator);
      var totalInv = activeList.length;
      
      // Mythos does not need each investigator in turn, and also
      // changes who is first
      if(this.getCurrentPhase() === MYTHOS) {
        this.nextPhase();
        // first investigator moves to the left
        this.firstInvestigator = activeList[(--firstIndex+totalInv) % totalInv];
        // and the turn will start on this new one first
        this.currentInvestigator = this.firstInvestigator;
        return;
      }
      
      // change current investigator
      currentIndex = (currentIndex + 1) % totalInv;
      this.currentInvestigator = activeList[currentIndex];
      
      // we end with the investigators: next phase
      if(currentIndex == firstIndex) {
        this.nextPhase();
      }
    }
    
  });
