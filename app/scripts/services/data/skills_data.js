'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.skillsData
 * @description
 * # skillsData
 * Constant in the arkhamHelperApp.
 */
angular
    .module('arkhamHelperApp')
    .constant(
        'skillsData',
        [
            
            {
              "name" : "Bravery",
              "text" : "Any Phase: Exhaust to re-roll a Horror check.",
              "expansion" : "",
              "quantity" : 2,
              "horror" : "reroll"
            },
            
            {
              "name" : "Expert Occultist",
              "text" : "Any Phase: Exhaust to re-roll a Spell check.",
              "expansion" : "",
              "quantity" : 2,
              "spell" : "reroll"
            },
            {
              "name" : "Fight (skill)",
              "text" : "When you spend a Clue token to add to any Fight check, add one extra bonus die.",
              "fight" : {
                "bonus" : "+1"
              },
              "expansion" : "",
              "quantity" : 2,
            },
            {
              "name" : "Lore (skill)",
              "text" : "When you spend a Clue token to add to any Lore check, add one extra bonus die.",
              "luck" : {
                "bonus" : "+1"
              },
              "expansion" : "",
              "quantity" : 2
            
            },
            {
              "name" : "Luck (skill)",
              "text" : "When you spend a Clue token to add to any Luck check, add one extra bonus die.",
              "luck" : {
                "bonus" : "+1"
              },
              "expansion" : "",
              "quantity" : 2
            
            },
            {
              "name" : "Marksman",
              "text" : "Any Phase: Exhaust to re-roll a Combat check.",
              "expansion" : "",
              "quantity" : 2,
              "combat" : "reroll"
            },
            {
              "name" : "Sneak (skill)",
              "text" : "When you spend a Clue token to add to any Sneak check, add one extra bonus die.",
              "sneak" : {
                "bonus" : "+1"
              },
              "expansion" : "",
              "quantity" : 2
            
            },
            {
              "name" : "Speed (skill)",
              "text" : "When you spend a Clue token to add to any Speed check, add one extra bonus die.",
              "speed" : {
                "bonus" : "+1"
              },
              "expansion" : "",
              "quantity" : 2
            
            },
            {
              "name" : "Stealth",
              "text" : "Any Phase: Exhaust to re-roll an Evade check.",
              "expansion" : "",
              "quantity" : 2,
              "evade" : "reroll"
            
            },
            {
              "name" : "Will (skill)",
              "text" : "When you spend a Clue token to add to any Will check, add one extra bonus die.",
              "will" : {
                "bonus" : "+1"
              },
              "expansion" : "",
              "quantity" : 2
            },
            
            {
              "name" : "Ancient Language",
              "expansion" : "Kingsport Horror"
            },
            {
              "name" : "Camouflage",
              "expansion" : "Kingsport Horror"
            },
            {
              "name" : "Clairvoyant",
              "expansion" : "Miskatonic Horror: Lurker at the Threshold component"
            },
            {
              "name" : "Conceal",
              "expansion" : "Dunwich Horror"
            },
            {
              "name" : "Credit Rating",
              "expansion" : "Kingsport Horror"
            },
            {
              "name" : "Criminal",
              "expansion" : "Miskatonic Horror: Dunwich Horror component"
            },
            {
              "name" : "Disguise",
              "expansion" : "Kingsport Horror"
            },
            {
              "name" : "Dodge",
              "expansion" : "Dunwich Horror"
            },
            {
              "name" : "Egyptologist",
              "expansion" : "Miskatonic Horror: Curse of the Dark Pharaoh component"
            },
            {
              "name" : "Endurance",
              "expansion" : "Kingsport Horror"
            },
            
            {
              "name" : "Fisticuffs",
              "expansion" : "Dunwich Horror"
            },
            {
              "name" : "Grapple",
              "expansion" : "Dunwich Horror"
            },
            {
              "name" : "Hide",
              "expansion" : "Dunwich Horror"
            },
            {
              "name" : "Informant",
              "expansion" : "Miskatonic Horror: Innsmouth Horror component"
            },
            {
              "name" : "Initiate",
              "expansion" : "Miskatonic Horror: Black Goat of the Woods component"
            }, {
              "name" : "Library Use",
              "expansion" : "Dunwich Horror"
            }, {
              "name" : "Linguistics",
              "expansion" : "Kingsport Horror"
            }, {
              "name" : "Listen",
              "expansion" : "Kingsport Horror"
            }, {
              "name" : "Martial Arts",
              "expansion" : "Kingsport Horror"
            }, {
              "name" : "Mental Fortitude",
              "expansion" : "Kingsport Horror"
            }, {
              "name" : "Mystic Gift",
              "expansion" : "Dunwich Horror"
            }, {
              "name" : "Mythos Lore",
              "expansion" : "Dunwich Horror"
            }, {
              "name" : "Painter",
              "expansion" : "Miskatonic Horror: Kingsport Horror component"
            }, {
              "name" : "Performer",
              "expansion" : "Miskatonic Horror: King in Yellow component"
            }, {
              "name" : "Persuade",
              "expansion" : "Kingsport Horror"
            }, {
              "name" : "Psychology",
              "expansion" : "Dunwich Horror"
            }, {
              "name" : "Run",
              "expansion" : "Kingsport Horror"
            }, {
              "name" : "Spot Hidden",
              "expansion" : "Dunwich Horror"
            }, {
              "name" : "Strong Will",
              "expansion" : "Dunwich Horror"
            }, {
              "name" : "Wrestle",
              "expansion" : "Kingsport Horror"
            }
        ]);
