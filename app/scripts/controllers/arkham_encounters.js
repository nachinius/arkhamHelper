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
    
	  /**
	   * Get the collection mapped with neighborhoods keys
	   */
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
	  
	  
	  $scope.clicked = { };
	  $scope.locationCards = {};
	  $scope.resetClicked = function(name, key) {
		  $scope.locationCards[name].push($scope.clicked[name].splice(key,1).pop());
	  }
	  var prepareLocation = function(location) {
		  var name = location.name;
		  $scope.clicked[name] = $scope.clicked[name] || [];
		  $scope.locationCards[name] = $scope.locationCards[name] || angular.copy(location.encounters);
	  }
	  $scope.drawEncounter = function(location) {
		  var name = location.name;
		  
		  prepareLocation(location);
		  
		  var length = $scope.locationCards[name].length;
		  if(length === 0) return;
		  var choosen = Math.floor(Math.random()*length);
		  
		  $scope.clicked[name].push($scope.locationCards[name].splice(choosen,1).pop());
		  
	  }
	  
	  
  });
