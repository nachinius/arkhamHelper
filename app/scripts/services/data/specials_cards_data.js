'use strict';

/**
 * @ngdoc constant
 * @name arkhamHelperApp.specialsCardsData.js
 * @description
 * # specialsCardsData.js
 * Constant in the arkhamHelperApp.
 */
angular
    .module('arkhamHelperApp')
    .constant(
        'specialsCardsData',
        [
            {
              name : 'Retainer',
              text : 'Upkeep: Gain $2, then roll a die. Discard this card on 1.',
              finite : false
            },
            {
              finite : false,
              name : 'Bank Loan',
              text : "Gain $10 when you take this card. [[Upkeep: Roll a die. On a 1-3, pay $1 or discard all of your items along with this card. You cannot get another Bank Loan this game.]] {{Any Phase: Pay $10 to pay off your Bank Loan and discard this card. You may choose to take out a new Bank Loan later on during this game.}}",
            },
            {
              finite : false,
              name : 'Silver Twilight Lodge Membership',
              text : "Any Phase: Whenever you have an encounter at Inner Sanctum instead."
            },
            {
              finite : false,
              name : 'Blessing',
              text : "[[Upkeep: Roll a die and discard this card on a 1]] When rolling dice, you score success on a 4,5 or 6. If you are `Cursed`, discard this card instead of gaining a Curse card."
            },
            {
              finite : false,
              name : 'Cursed',
              text : "[[Upkeep: Roll a die and discard this card on a 1]] When rolling dice, you score success on a 6. If you are `Blessed`, discard this card instead of gaining a Blessing card."
            },
            {
              finite : true,
              name : 'Deputy of Arkham',
              text : "[[Upkeep: Gain $1]] When you gain this card, take the Deputy's Revolver and the Patrol Wagon as well."
            },
            {
              finite : true,
              name : "Deputy's Revolver",
              text : "[[Physical Weapon]], [[+3 Combat Checks]], Deputy's Revolver cannot be lost or stolen unless you choose to allow it."
            },
            {
              finite : true,
              name : 'Patrol of Wagon',
              text : "Movement: If you are in Arkham, you may move to any street area or location in Arkham instead of your normal movement. Roll a die each Combat and whenever you return to Arkham from an Other World. On a 1, return this card to the box."
            } ]);
