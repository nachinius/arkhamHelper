'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.investigatorsData
 * @description
 * # investigatorsData
 * Value in the arkhamHelperApp.
 */
angular
    .module('arkhamHelperApp')
    .value(
        'investigatorsData',
        [
            {
              image : 'JennyBarnesCard.jpg',
              name : 'Jenny Barnes',
              profession : 'the Dilettante',
              money : 10,
              curSanity : 6,
              maxSanity : 6,
              curStamina : 4,
              maxStamina : 4,
              home : 'Train Station',
              focus : 2,
              specialAbilityTitle : 'Trust Fund',
              specialAbilityDescription : 'Upkeep: Jenny gains $1',
              minSpeed : 0,
              minSneak : 1,
              minFight : 1,
              minWill : 2,
              minLore : 1,
              minLuck : 2,
              curSpeed : 1,
              curFight : 1,
              curLore : 1
            },
            {
              image : 'AmandaSharpeCard.png',
              name : 'Amanda Sharpe',
              profession : 'Student',
              money : 1,
              curSanity : 5,
              maxSanity : 5,
              curStamina : 5,
              maxStamina : 5,
              home : 'Bank of Arkham',
              focus : 3,
              specialAbilityTitle : 'Studious',
              specialAbilityDescription : 'Whenever Amanda draws one or more cards from the Skill deck, she draws one extra card and then discards one of the cards.',
              minSpeed : 1,
              minSneak : 1,
              minFight : 1,
              minWill : 1,
              minLore : 1,
              minLuck : 1,
              curSpeed : 1,
              curFight : 1,
              curLore : 1
            },
            {
              image : 'AshcanPeteCard.png',
              name : '"Ashcan" Pete',
              profession : 'the Drifter',
              money : 1,
              curSanity : 4,
              maxSanity : 4,
              curStamina : 6,
              maxStamina : 6,
              home : 'River Docks',
              focus : 1,
              specialAbilityTitle : 'Scrounge',
              specialAbilityDescription : 'When Pete draws from the Common item, Unique item, or Spell deck, he may draw from either the top or the bottom of that deck, his choice. Pete may look at the bottom card of those decks at any time.',
              minSpeed : 0,
              minSneak : 3,
              minFight : 2,
              minWill : 2,
              minLore : 0,
              minLuck : 0,
              curSpeed : 0,
              curFight : 2,
              curLore : 0,
              storySoFar: "When you've lived on the streets as long as Pete has, you see things. Things that would drive braver men screaming into the night. But you also learn to be quiet, to stay hidden, and to play stupid if all else fails. It also helps to have a good dog, like Duke, to scare away the meaner elements of the street. Unfortunately, this time, Pete can't hide, and there's nothing Duke can do to protect him. His nightmares have been growing steadily worse over the last month, driving him all the way here... to Arkham. Even the whiskey isn't helping much anymore. Soon, he won't be able to sleep at all. Still, there are always opportunities for a man who knows how to stay quiet... as long as he isn't too picky."
            }
        ]);
