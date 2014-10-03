'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.activeInvestigators
 * @description
 * # activeInvestigators
 * Service in the arkhamHelperApp.
 */
angular.module('arkhamHelperApp')
  .service('activeInvestigators', function activeInvestigators() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
    this.list = [];
    
  });
