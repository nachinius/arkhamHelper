'use strict';

/**
 * @ngdoc function
 * @name arkhamHelperApp.controller:MythosCtrl
 * @description
 * # MythosCtrl
 * Controller of the arkhamHelperApp
 */
angular.module('arkhamHelperApp')
  .controller('MythosCtrl', function ($scope, mythos, terrorLevel) {
	  
	  $scope.mythos = mythos;
	  $scope.terrorLevel = terrorLevel.level;
	  $scope.increaseTerror = terrorLevel.increase;
	  
  });
