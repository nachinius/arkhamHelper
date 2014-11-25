'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.terrorLevel
 * @description
 * # terrorLevel
 * Service in the arkhamHelperApp.
 */
angular.module('arkhamHelperApp').service('terrorLevelService',
		function terrorLevelService(cardPileAllies) {
			// AngularJS will instantiate a singleton by calling "new" on this function

			var that = this;
			that.level = { value: 0};
			that.increase = function() {
				cardPileAllies.removeAny();
				that.level.value++;
			}

		});
