'use strict';

/**
 * @ngdoc function
 * @name arkhamHelperApp.controller:MythosCtrl
 * @description
 * # MythosCtrl
 * Controller of the arkhamHelperApp
 */
angular.module('arkhamHelperApp')
  .controller('MythosCtrl', function ($scope, mythos) {
	  
	  $scope.mythos = mythos;
  });
