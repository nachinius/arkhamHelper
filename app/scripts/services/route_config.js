'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.routeConfig
 * @description # routeConfig is an array
 * of object whose key, values are used to configure
 * the menu service.
 * 
 * - location: string as accepted by $routeProvider.when
 * - templateUrl: string with the same meaning as $routeProvier
 * - controller: idem
 * - name: string used to display (if necessary)
 * - topMenuOrder: integer that indicates it's order in the menu
 * (useful for loops)
 *              
 * 
 */
angular.module('arkhamHelperApp').constant('routeConfig', [ {
  location : '/',
  templateUrl : 'views/main.html',
  controller : 'MainCtrl',
  name : 'Main',
  topMenuOrder: 1
}, {
  location : '/about',
  templateUrl : 'views/about.html',
  controller : 'AboutCtrl',
  name : 'About'
}, {
  location : '/settings',
  templateUrl : 'views/settings.html',
  controller : 'SettingsCtrl',
  name : 'Settings',
  topMenuOrder: 3
}, {
  location : '/investigator',
  templateUrl : 'views/investigator.html',
  controller : 'InvestigatorCtrl',
  name : 'Investigators',
  topMenuOrder: 5
}, {
  location : '/arkham_encounters',
  templateUrl : 'views/arkham_encounters.html',
  controller : 'ArkhamEncountersCtrl',
  name : 'Arkham Encounters',
  topMenuOrder: 6
}, {
  location : '/mythos',
  templateUrl : 'views/mythos.html',
  controller : 'MythosCtrl',
  name : 'Mythos',
  topMenuOrder: 4
}, {
  location : '/locations',
  templateUrl : 'views/locations.html',
  controller : 'LocationsCtrl',
  name : 'Board',
  topMenuOrder: 10
} ]).config(function($routeProvider, routeConfig) {
  (function setTopMenuOrder(routeConfig) {
    var orderedList = _.chain(routeConfig).filter(function(ele) {
       return angular.isDefined(ele.topMenuOrder);
     }).sortBy('topMenuOrder').value();
     var length = orderedList.length;
     angular.forEach(orderedList, function(ele, idx) {

       if (idx === 0) {
         ele.prev = orderedList[length - 1].location;
         ele.prevName = orderedList[length - 1].name;
       } else { 
         ele.prev = orderedList[idx - 1].location;
         ele.prevName = orderedList[idx-1].name;
       }
       if (idx === length - 1) {
         ele.next = orderedList[0].location;
         ele.nextName = orderedList[0].name;
       } else {
         ele.next = orderedList[idx + 1].location;
         ele.nextName = orderedList[idx + 1].name;
       }
     });
   })(routeConfig);
   
   // configure the routes
   angular.forEach(routeConfig, function(route) {
     $routeProvider.when(route.location, route)
   });
   $routeProvider.otherwise({
     redirect : '/'
   });
});
