'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.uniqueItemsData
 * @description
 * # uniqueItemsData
 * Constant in the arkhamHelperApp.
 */
angular
    .module('arkhamHelperApp')
    .constant(
        'uniqueItemsData',
        [
          {
            name : "Alien Statue",
            price : "5",
            phase : "Movement",
            text : "Movement: Exhaust and spend 2 movement points and 1 Sanity to roll a die. If the die is a success, draw 1 Spell or gain 3 Clue tokens. If it is a failure, lose 2 Stamina.",
            quantity: 1
          },
          {
            name: "Ancient Tablet",
            price: 8,
            phase: "Movement",
            text: "Movement: Spend 3 movement points and discard Ancient Tablet to roll 2 dice. For every success rolled, draw 1 Spell. For every failure rolled, gain 2 Clue tokens.",
            quantity: 1
          },
          {
            name: "Blue Watcher of the Pyramid",
            price: 4,
            phase: "Any",
            text : "Any Phase: Lose 2 Stamina and discard Blue Watcher of the Pyramid to automatically succeed at a Combat check or a Fight check or Lore check made to close a gate. This cannot be used against an Ancient One.",
            quantity: 1
          },
          {
            name: "Book of Dzyan",
            price: 3,
            phase: "Movement",
            text: "Movement: Exhaust and spend 2 movement points to make a Lore (-1) check. If you pass, draw 1 Spell, lose 1 Sanity, and put 1 Stamina token from the bank on Book of Dzyan. If there are 2 Stamina tokens on it, discard Book of Dzyan. If you fail, nothing happens.",
            type: "tome",
            quantity: 1
          },
          {
            name: "Cabala of Saboth",
            price: 5,
            phase: "Movement",
            text: "Movement: Exhaust and spend 2 movement points to make a Lore (-2) check. If you pass, draw 1 Skill and discard Cabala of Saboth. If you fail, nothing happens.",
            type: "tome",
            quantity: 2
          },
          {
            name: "Cultes des Goules",
            price: 3,
            phase: "Movement",
            text: "Movement: Exhaust and spend 2 movement points to make a Lore (-2) check. If you pass, draw 1 Spell and gain 1 Clue token, but lose 2 Sanity and discard Cultes Des Goules. If you fail, nothing happens.",
            type: "tome",
            quantity: 2
          },
          
          {
            name: "Dragon's Eye",
            price: 6,
            phase: "Any",
            text: "Any phase: Exhaust and lose 1 Sanity after drawing a gate or location card to draw a new card in its place.",
            type: "",
            quantity: 1
          },
          
          {
            name: "Elder Sign",
            price: 5,
            phase: "Any",
            text: "Any Phase: When sealing a gate, lose 1 Stamina and 1 Sanity and return this card to the box. You do not need to make a skill check or spend any Clue tokens to seal the gate. In addition, remove one doom token from the Ancient One's doom track.",
            type: "one use",
            quantity: 4
          },
          
          {
            name: "Enchanted Blade",
            price: 6,
            phase: "",
            text: "Bonus: +4 Combat check",
            combat: "+4",
            hands: 1,
            type: "Magical Weapon",
            quantity: 2
          },
          {
            name: "Enchanted Jewelry",
            price: 3,
            text: "Any Phase: Put 1 Stamina token from the bank on Enchanted Jewelry to avoid losing 1 Stamina. If there are 3 Stamina tokens on it, discard Enchanted Jewelry.",
            phase: "Any",
            type: "",
            quantity: 1
          },
          {
            name: "Enchanted Knife",
            price: 5,
            phase: "",
            text: "Bonus: +3 Combat Check",
            type: "Magical Weapon",
            quantity: 2,
            combat: "+3",
            hands: 1
          },
          {
            name: "Flute of the Outer Gods",
            price: 8,
            phase: "Any",
            text: "Any Phase: Lose 3 Sanity and 3 Stamina and discard Flute of the Outer Gods before making a Combat check to defeat all monsters in your current area. This does not affect Ancient Ones. [You must pass a Horror Check before using the Flute. If there are more than one monster in your area, you only need to pass one Horror Check.]",
            type: "",
            quantity: 1
          },
          {
            name: "Gate Box",
            price: 4,
            phase: "Any",
            text: "Any Phase: When you return to Arkham from an Other World, you can return to any location with an open gate, not just those leading to the Other World you were in.",
            type: "",
            quantity: 1
          },
          {
            name: "Healing Stone",
            price: 8,
            phase: "Upkeep",
            text: "Upkeep: You may gain 1 Stamina or 1 Sanity.  Discard Healing Stone if the Ancient One awakens.",
            type: "",
            quantity: 1
          },

          {
            name: "Holy Water",
            price: 4,
            phase: "",
            text: "Bonus: +6 Combat check (Discard after use)",
            combat: { bonus: 1},
            hands: 2,
            discard: true,
            type: "Magical Weapon",
            quantity: 4
          },
          
          {
            name: "Lamp of Alhazred",
            price: 7,
            phase: "",
            text: "Bonus: +5 Combat check",
            hands: 2,
            combat: { bonus: 5},
            type: "Magical Weapon",
            quantity: 1
          },
          
          {
            name: "Nameless Cults",
            price: 3,
            phase: "Movement",
            text: "Movement: Exhaust and spend 1 movement point to make a Lore (-1) check. If you pass, draw 1 Spell, lose 1 Sanity, and discard Nameless Cults. If you fail, nothing happens.",
            type: "Tome",
            quantity: 2
          },
          
          {
            name: "Necronomicon",
            price: 6,
            phase: "Movement",
            text: "Movement: Exhaust and spend 2 movement points to make a Lore (-2) check. If you pass, draw 1 Spell and lose 2 Sanity. If you fail, nothing happens.",
            type: "Tome",
            quantity: 1
          },
          
          {
            name: "Obsidian Statue",
            price: 4,
            phase: "Any",
            text: "Any Phase: Discard Obsidian Statue to cancel all Stamina or Sanity loss being dealt to you from one source.",
            type: "",
            quantity: 1
          },
          
          {
            name: "Pallid Mask",
            price: 4,
            phase: "",
            evade: {bonus: 2},
            text: "Bonus: +2 Evade check",
            type: "",
            quantity: 1
          },
          
          {
            name: "Powder of Ibn-Ghazi",
            price: 6,
            phase: "",
            text: "Bonus: +9 Combat check. Discard After use and lose 1 sanity",
            combat: { bonus: 9},
            discard: true,
            cost: { sanity : 1},
            hands: 2,
            type: "Magical Weapon",
            quantity: 2
          },
          
          {
            name: "Ruby of R'lyeh",
            price: 8,
            phase: "Movement",
            text: "Movement: You get 3 extra movement points",
            type: "",
            quantity: 1
          },
          
          {
            name: "Silver Key",
            price: 4,
            phase: "",
            text: "Any Phase: Put 1 Stamina token from the bank on Silver Key before making an Evade check to automatically pass it. Discard Silver Key after using it if there are 3 Stamina tokens on it.",
            type: "",
            quantity: 1
          },
          
          {
            name: "Sword of Glory",
            price: 8,
            phase: "",
            text: "Bonus: +6 Combat check",
            hands: 2,
            combat: { bonus: 6},
            type: "Magical Weapon",
            quantity: 1
          },
          
          {
            name: "The King in Yellow",
            price: 2,
            phase: "Movement",
            text: "Movement: Exhaust and spend 2 movement points to make a Lore (-2) check. If you pass, gain 4 Clue tokens, lose 1 Sanity and discard The King in Yellow. If you fail nothing happens.",
            type: "Tome",
            quantity: 2
          },
          
          {
            name: "Warding Statue",
            price: 6,
            phase: "Any",
            text: "Any Phase: Discard Warding Statue after failing a Combat check to reduce the monster's combat damage to 0 Stamina. This can also be used to cancel an Ancient One's entire attack for 1 turn.",
            type: "",
            quantity: 1
          }
          
          ]);
