'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.mythos
 * @description
 * # mythos
 * Constant in the arkhamHelperApp.
 */
angular.module('arkhamHelperApp').service('mythos',
		function(mythosData, _, Shuffler) {
	
			var thisService = this;
			// all the cards of base game (no expansions)
			/**
			 * private
			 * @var deck Array of mythos Cards
			 */
			var deck = _.filter(mythosData, function(myth) {
				return (typeof myth.expansion === 'undefined');
			});
			
			this.currentHeadline;
			this.currentMystic;
			this.currentEnvironment;
			this.current;
			this.wastePile = [];
			this.lastDrawn;
			
			/**
			 * Shuffle the deck
			 */
			this.shuffle = function() {
				// shuffle the deck, 7 times as my grandmother says
				for (var i = 0; i < 7; i++) {
					Shuffler(deck);
				}
			}
			
			this.draw = function() {
				var card = deck.shift();
				
			}
			
			
			
			

		});
