'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.routeConfig
 * @description # routeConfig Constant in the
 *              arkhamHelperApp.
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
} ]);
