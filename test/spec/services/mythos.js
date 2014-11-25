'use strict';

describe(
		'Service: mythos',
		function() {

			// load the service's module
			beforeEach(module('arkhamHelperApp'));

			// instantiate service
			var mythos;
			beforeEach(inject(function(_mythos_) {
				mythos = _mythos_;
			}));

			it('should do something', function() {
				expect(!!mythos).toBe(true);
			});

			it('if draw a rumor, it should keep the old rumor in the rumor-slot if there were no rumor', function() {
				var rumorCards = _.filter(mythos.deck, function(card) {
					return card.type === 'Rumor';
				});
				var restCards = _.filter(mythos.deck, function(card) {
					return card.type !== 'Rumor';
				});
	
				mythos.deck.unshift(rumorCards[0]);
				mythos.deck.unshift(rumorCards[1]);
				
				var card1= mythos.draw();
				expect(mythos.rumor).toBe(card1);
				
				var card2 = mythos.draw();
				expect(mythos.rumor).toBe(card1);
			});
			
			
			it('if draw an environment, it should put the new environment in the environment-slot', function() {
				var environmentCards = _.filter(mythos.deck, function(card) {
					return card.type.substr(0,3) === 'Env';
				});
				mythos.deck.unshift(environmentCards[0]);
				mythos.deck.unshift(environmentCards[1]);
				
				// draw a first
				var card1 = mythos.draw();
				expect(card1).toBe(environmentCards[1]);
				expect(card1.type.substr(0,3)).toBe('Env');
				expect(mythos.environment).toBe(card1);
				
				// draw the second env
				var card2 = mythos.draw();
				expect(card2).not.toBe(card1);
				expect(card2.type.substr(0,3)).toBe('Env');
				
				// check if the environment has been updated
				expect(mythos.environment).toBe(card2);
			});
			
			if('if not drawing an environment, it should keep the environment', function() {
				var environmentCards = _.filter(mythos.deck, function(card) {
					return card.type.substr(0,3) === 'Env';
				});
				
				var headlines = _.filter(mythos.deck, 
						function(card) {
							return card.type === 'Headline';
						}
				);
				
				mythos.deck.unshift(headlines[0]);
				mythos.deck.unshift(environmentCards[0]);
				
				var card = mythos.draw();
				expect(mythos.current).toBe(environmentCards[0]);
				expect(mythos.environment).toBe(environmentCards[0]);
				
				var card2 = mythos.draw();
				expect(card2.type).toBe('Headline');
				expect(mythos.environment).toBe(environmentCards[0]);
			});

			it('should draw first card and keep it in current-slot', function() {
				expect(mythos.current).toBe(null);
				var card = mythos.draw();
				expect(mythos.current).toBe(card);
			});

			it('if draw any card, it should replace current-slot', function() {

				// prepare
				var firstCard = mythos.draw();
				expect(mythos.current).toBe(firstCard);
				
				// test
				var secondCard = mythos.draw();
				
				// check
				expect(mythos.current).toBe(secondCard);
			});

		});
