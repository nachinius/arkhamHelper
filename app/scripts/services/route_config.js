'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.routeConfig
 * @description # routeConfig Constant in the
 *              arkhamHelperApp.
 */
angular.module('arkhamHelperApp').constant('routeConfig', [ {
  location : '/',
  templateUrl : 'views/main.hmtl',
  controller : 'MainCtrl',
  name : 'Main'
}, {
  location : '/about',
  templateUrl : 'views/about.html',
  controller : 'AboutCtrl',
  name : 'About'
}, {
  location : '/settings',
  templateUrl : 'views/settings.html',
  controller : 'SettingsCtrl',
  name : 'Settings'
}, {
  location : '/investigator',
  templateUrl : 'views/investigator.html',
  controller : 'InvestigatorCtrl',
  name : 'Investigators'
}, {
  location : '/arkham_encounters',
  templateUrl : 'views/arkham_encounters.html',
  controller : 'ArkhamEncountersCtrl',
  name : 'Arkham Encounters'
}, {
  location : '/mythos',
  templateUrl : 'views/mythos.html',
  controller : 'MythosCtrl',
  name : 'Mythos'
}, {
  location : '/locations',
  templateUrl : 'views/locations.html',
  controller : 'LocationsCtrl',
  name : 'Board'
} ]);
