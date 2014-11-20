'use strict';

/**
 * @ngdoc function
 * @name arkhamHelperApp.controller:ArkhamEncountersCtrl
 * @description
 * # ArkhamEncountersCtrl
 * Controller of the arkhamHelperApp
 */
angular.module('arkhamHelperApp')
  .controller('ArkhamEncountersCtrl', function ($scope, locationsEncounterData) {
    
	  function collectByNeighborhood(data) {
		  var result = {};
		  var neighbor;
		  angular.forEach(data, function(value, key) {
			  neighbor = value.neighborhood;
			  result[neighbor] = result[neighbor] || { list: []};
			  result[neighbor].list.push(value);
		  });
		  return result;
	  }
	  $scope.locationsNeighborhood = collectByNeighborhood(locationsEncounterData);  
	  $scope.neighborhoods = Object.keys($scope.locationsNeighborhood);
	  
	  $scope.clicked = { selected: {}};
	  $scope.choosen = {};
	  $scope.resetClicked = function(location) {
		  delete $scope.clicked.selected[location.name];
		  delete $scope.choosen[location.name];
	  }
	  $scope.drawEncounter = function(location) {
		  var length = location.encounters.length;
		  var choosen = Math.floor(Math.random()*length);
		  $scope.clicked.selected[location.name] = true;
		  $scope.choosen[location.name] = choosen;
	  }
	  console.log($scope.locationsNeighborhood);
  });
