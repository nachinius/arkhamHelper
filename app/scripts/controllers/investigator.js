'use strict';

/**
 * @ngdoc function
 * @name arkhamHelperApp.controller:InvestigatorCtrl
 * @description
 * # InvestigatorCtrl
 * Controller of the arkhamHelperApp
 */
angular.module('arkhamHelperApp').controller('InvestigatorCtrl',
    function($scope) {
      $scope.awesomeThings = [
          'HTML5 Boilerplate', 'AngularJS', 'Karma'
      ];
      
      $scope.investigators = [
        {
          image : 'JennyBarnesCard.jpg',
          name : 'Jenny Barnes',
          profession : 'Killer',
          money: 0,
          curSanity : 5,
          maxSanity : 6,
          curStamina : 3,
          maxStamina : 4,
          home : 'Train Station',
          focus : 2,
          specialAbilityTitle : 'Heritage',
          specialAbilityDescription : 'Gains $1 per upkeep',
          minSpeed : 2,
          minSneak : 1,
          minFight : 0,
          minWill : 2,
          minLore : 1,
          minLuck : 0,
          curSpeed : 3,
          curFight : 2,
          curLore : 2
        }
      ]
    });
