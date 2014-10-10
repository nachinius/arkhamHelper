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
          
          /*{
            name: "",
            price: ,
            phase: "",
            text: "",
            type: "",
            quantity: 2
          },
          
          {
            name: "",
            price: ,
            phase: "",
            text: "",
            type: "",
            quantity: 2
          },
          {
            name: "",
            price: ,
            phase: "",
            text: "",
            type: "",
            quantity: 2
          },
          {
            name: "",
            price: ,
            phase: "",
            text: "",
            type: "",
            quantity: 2
          },
          {
            name: "",
            price: ,
            phase: "",
            text: "",
            type: "",
            quantity: 2
          },
          {
            name: "",
            price: ,
            phase: "",
            text: "",
            type: "",
            quantity: 2
          },
          {
            name: "",
            price: ,
            phase: "",
            text: "",
            type: "",
            quantity: 2
          },
          {
            name: "",
            price: ,
            phase: "",
            text: "",
            type: "",
            quantity: 2
          },
          {
            name: "",
            price: ,
            phase: "",
            text: "",
            type: "",
            quantity: 2
          },*/
          
          
        
        ]);
