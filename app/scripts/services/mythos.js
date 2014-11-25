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
	
			var mythosService = this;
			// all the cards of base game (no expansions)
			/**
			 * private
			 * @var deck Array of mythos Cards
			 */
			mythosService.deck = _.filter(mythosData, function(myth) {
				return (typeof myth.expansion === 'undefined');
			});
			
			/**
			 * Shuffle the deck
			 */
			mythosService.shuffle = function() {
				// shuffle the deck, 7 times as my grandmother says
				for (var i = 0; i < 7; i++) {
					Shuffler(mythosService.deck);
				}
			}
			
			mythosService.draw = function() {
				var card = mythosService.deck.shift();
				
				mythosService.old.unshift(mythosService.current);
				mythosService.current = card;
				
				if(card.type.substr(0,3) === 'Env') {
					mythosService.replaceEnvironment(card);
				}
				if(mythosService.rumor === null && card.type === 'Rumor') {
					mythosService.rumor = card;
				}
				return card;
			}
			
			mythosService.replaceEnvironment = function(newCard) {
				if(angular.isObject(mythosService.environment)) {
					if(mythosService.old.unshift[0] !== mythosService.environment) {
						mythosService.old.unshift(mythosService.environment);
					}
				}
				mythosService.environment = newCard;
			}
			
			mythosService.removeRumor = function() {
				mythosService.oldRumor.unshift(mythosService.rumor);
				mythosService.rumor = null;
			}
			
			mythosService.current = null;
			mythosService.environment = null;
			mythosService.rumor = null;
			mythosService.buffer = [];
			mythosService.old = [];
			mythosService.oldRumor = [];
			

		});
