'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.terrorLevel
 * @description
 * # terrorLevel
 * Service in the arkhamHelperApp.
 */
angular.module('arkhamHelperApp').service('terrorLevel',
		function terrorLevel(cardPileAllies) {
			// AngularJS will instantiate a singleton by calling "new" on this function

			var that = this;
			that.level = { value: 0};
			that.increase = function() {
				cardPileAllies.removeAny();
				that.level.value++;
			}

		});
