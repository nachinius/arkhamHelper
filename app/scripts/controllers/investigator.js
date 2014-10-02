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
          profession : 'the Dilettante',
          money: 10,
          curSanity : 6,
          maxSanity : 6,
          curStamina : 4,
          maxStamina : 4,
          home : 'Train Station',
          focus : 2,
          specialAbilityTitle : 'Trust Fund',
          specialAbilityDescription : 'Upkeep: Jenny gains $1',
          minSpeed : 0,
          minSneak : 1,
          minFight : 1,
          minWill : 2,
          minLore : 1,
          minLuck : 2,
          curSpeed : 1,
          curFight : 1,
          curLore : 1
        },{
          image : 'AmandaSharpeCard.png',
          name : 'Amanda Sharpe',
          profession : 'Student',
          money: 1,
          curSanity : 5,
          maxSanity : 5,
          curStamina : 5,
          maxStamina : 5,
          home : 'Bank of Arkham',
          focus : 3,
          specialAbilityTitle : 'Studious',
          specialAbilityDescription : 'Whenever Amanda draws one or more cards from the Skill deck, she draws one extra card and then discards one of the cards.',
          minSpeed : 1,
          minSneak : 1,
          minFight : 1,
          minWill : 1,
          minLore : 1,
          minLuck : 1,
          curSpeed : 1,
          curFight : 1,
          curLore : 1
        }
      ]
    });
