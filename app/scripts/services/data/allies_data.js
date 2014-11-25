'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.data/alliesData
 * @description
 * # data/alliesData
 * Constant in the arkhamHelperApp.
 */
angular
		.module('arkhamHelperApp')
		.constant(
				'alliesData',
				[
						{
							"name" : "Ammi Pierce",
							"expansion" : "Dunwich Horror",
							"info" : [ "+1 Luck", "+1 Will" ],
							"text" : "Any Phase: Exhaust instead of losing 1 Sanity.  Discard Ammi Pierce if the Ancient One awakens."
						},
						{
							"name" : "Anna Kaslow",
							"info" : [ "+2 Luck" ],
							"text" : "Gain 2 Clue tokens when Anna Kaslow joins you."
						},
						{
							"name" : "Asenath Waite",
							"expansion" : "Kingsport Horror",
							"info" : [ "+1 Sneak", "+1 Speed" ],
							"text" : "Gain $10 when Asenath Waite joins you."
						},
						{
							"name" : "Basil Elton", 
							"expansion" : "Kingsport Horror",
							"info" : [ "+1 Fight", "+1 Will" ],
							"text" : "Discard to cancel the Ancient One's entire attack for one turn."
						},
						{
							"name" : "Calvin Wright (Chapter 1)",
							"expansion" : "Arkham League Session 2",
							"info" : [ "+1 Sneak", "+1 Speed" ],
							"text" : "Reduce all Sanity loss by 1. Calvin may not be sacrificed for any reason."
						},
						{
							"name" : "Calvin Wright (Chapter 6)",
							"expansion" : "Arkham League Session 2",
							"info" : [ "-2 Maximum Sanity",
									"-2 Maximum Stamina",
									"+2 All Skill Checks", "+1 Focus" ],
							"text" : "Notes"
						},
						{
							"name" : "Charles Dexter Ward",
							"expansion" : "Kingsport Horror",
							"info" : [ "+1 Lore", "+1 Speed" ],
							"text" : "Increase your Combat check bonuses from Spells by +1."
						},
						{
							"name" : "Corinna Jones",
							"expansion" : "Dunwich Horror",
							"info" : [ "+1 Focus" ],
							"text" : "Draw 1 Skill when Corinna Jones joins you."
						},
						{
							"name" : "David Packard",
							"expansion" : "Curse of the Dark Pharaoh",
							"info" : [ "+2 Combat", "+2 Evade" ],
							"text" : "Draw 1 Skill card when David Packard joins you."
						},
						{
							"name" : "David Packard (Revised)",
							"expansion" : "Curse of the Dark Pharaoh (Revised Edition)",
							"info" : [ "+1 Fight", "+1 Sneak" ],
							"text" : "Draw 1 Skill card when David Packard joins you."
						},
						{
							"name" : "Dr. Ali Kafour",
							"expansion" : "Curse of the Dark Pharaoh",
							"info" : [ "+2 Horror", "+2 Spell" ],
							"text" : "Search the Unique item deck, taking the first tome you find."
						},
						{
							"name" : "Dr. Ali Kafour (Revised)",
							"expansion" : "Curse of the Dark Pharaoh (Revised Edition)",
							"info" : [ "+1 Will", "+1 Lore" ],
							"text" : "Search the Unique item deck, taking the first tome you find."
						},
						{
							"name" : "Dr. Herbert West",
							"expansion" : "Kingsport Horror",
							"info" : [ "+1 Speed", "+1 Will" ],
							"text" : "Upkeep: Pay 1 Focus and exhaust to gain 1 Stamina."
						},
						{
							"name" : "Duke",
							"info" : [ "+1 Maximum Sanity" ],
							"text" : "Discard to immediately restore your Sanity to its maximum."
						},
						{
							"name" : "Earl Sawyer",
							"expansion" : "Dunwich Horror",
							"info" : [ "+1 Fight", "+1 Sneak" ],
							"text" : "Any Phase: Exhaust instead of losing 1 Stamina.  Discard Earl Sawyer if the Ancient One awakens."
						},
						{
							"name" : "Eric Colt",
							"info" : [ "+2 Speed" ],
							"text" : "You take no Sanity loss from the Nightmarish ability."
						},
						{
							"name" : "Erica Carlyle",
							"expansion" : "Curse of the Dark Pharaoh",
							"info" : [ "+2 Combat", "+2 Spell" ],
							"text" : "Gain a Retainer card when Erica Carlyle joins you."
						},
						{
							"name" : "Erica Carlyle (Revised)",
							"expansion" : "Curse of the Dark Pharaoh (Revised Edition)",
							"info" : [ "+2 Spell" ],
							"text" : "Gain a Retainer card when Erica Carlyle joins you."
						},
						{
							"name" : "Erich Weiss",
							"expansion" : "Curse of the Dark Pharaoh",
							"info" : [ "+2 Evade", "+2 Spell" ],
							"text" : "You cannot be delayed."
						},
						{
							"name" : "Erich Weiss (Revised)",
							"expansion" : "Curse of the Dark Pharaoh (Revised Edition)",
							"info" : [ "+2 Evade" ],
							"text" : "You cannot be delayed."
						},
						{
							"name" : "Father Iwanicki",
							"expansion" : "Curse of the Dark Pharaoh",
							"info" : [ "+2 Evade", "+2 Horror" ],
							"text" : "You cannot be cursed."
						},
						{
							"name" : "Father Iwanicki (Revised)",
							"expansion" : "Curse of the Dark Pharaoh (Revised Edition)",
							"info" : [ "+2 Horror" ],
							"text" : "You cannot be cursed."
						},
						{
							"name" : "Foolishness",
							"expansion" : "Kingsport Horror",
							"info" : [ "+1 Fight", "+1 Luck", "+1 Sneak" ],
							"text" : "Discard if you gain Young Zoog as an Ally."
						},
						{
							"name" : "Granny Orne",
							"expansion" : "Kingsport Horror",
							"info" : [ "+1 Lore", "+1 Sneak" ],
							"text" : "Any Phase: Exhaust instead of spending 1 Clue token."
						},
						{
							"name" : "John Legrasse",
							"info" : [ "+2 Will" ],
							"text" : "You can claim monsters with the Endless ability as trophies."
						},
						{
							"name" : "Oliver Grayson",
							"expansion" : "Promotional offer",
							"info" : [ "+1 Luck", "+1 Speed" ],
							"text" : "When you fail an Evade check, monsters do not deal combat damage to you."
						},
						{
							"name" : "Professor Armitage",
							"info" : [ "+2 Lore" ],
							"text" : "Your attacks are not affected by Magical Resistance."
						},
						{
							"name" : "Professor Morgan",
							"expansion" : "Kingsport Horror",
							"info" : [ "+1 Speed", "+1 Fight" ],
							"text" : "Increase your Combat check bonuses from Weapons by +1."
						},
						{
							"name" : "Professor Rice",
							"expansion" : "Dunwich Horror",
							"info" : [ "+1 Lore", "+1 Luck" ],
							"text" : "Place 1 Clue token on each unstable location without an open gate when Professor Rice joins you."
						},
						{
							"name" : "Richard Upton Pickman",
							"info" : [ "+1 Luck", "+1 Speed" ],
							"text" : "Your attacks are not affected by Physical Resistance."
						},
						{
							"name" : "Ruby Standish",
							"info" : [ "+2 Sneak" ],
							"text" : "Draw 1 Unique item when Ruby Standish joins you."
						},
						{
							"name" : "Ryan Dean",
							"info" : [ "+1 Sneak", "+1 Will" ],
							"text" : "Draw 1 Common item when Ryan Dean joins you."
						},
						{
							"name" : "Sarah Danforth",
							"expansion" : "Curse of the Dark Pharaoh",
							"info" : [ "+1 Focus" ],
							"text" : "Draw 1 Exhibit item when Sarah Danforth joins you."
						},
						{
							"name" : "Sarah Danforth",
							"expansion" : "Curse of the Dark Pharaoh (Revised Edition)",
							"info" : [ "+1 Focus" ],
							"text" : "Draw 1 Exhibit item when Sarah Danforth joins you."
						},
						{
							"name" : "Sir William Brinton",
							"info" : [ "+1 Maximum Stamina" ],
							"text" : "Discard to immediately restore your Stamina to its maximum."
						},
						{
							"name" : "Terrible Old Man",
							"expansion" : "Kingsport Horror",
							"info" : [ "+1 Fight", "+1 Luck" ],
							"text" : "Upkeep: Pay 1 Focus and exhaust to gain 1 Sanity."
						},
						{
							"name" : "The Messenger",
							"expansion" : "Curse of the Dark Pharaoh",
							"info" : [ "+2 Combat", "+2 Horror" ],
							"text" : "Discard The Messenger to avoid being devoured."
						},
						{
							"name" : "The Messenger (Revised)",
							"expansion" : "Curse of the Dark Pharaoh (Revised Edition)",
							"info" : [ "-1 All Skill checks" ],
							"text" : "After being devoured, return this card to the box and remove two doom tokens from the doom track."
						},
						{
							"name" : "Thomas F. Malone",
							"info" : [ "+1 Fight", "+1 Lore" ],
							"text" : "Draw 1 Spell when Thomas F. Malone joins you."
						},
						{
							"name" : "Thomas Olney",
							"expansion" : "Kingsport Horror",
							"info" : [ "+1 Luck", "+1 Sneak" ],
							"text" : "You are Blessed when Thomas Olney joins you."
						},
						{
							"name" : "Tom \"Mountain\" Murphy",
							"info" : [ "+2 Fight" ],
							"text" : "You take no Stamina loss from the Overwhelming ability."
						},
						{
							"name" : "Walter Gilman (Chapter 1)",
							"expansion" : "Arkham Spanish League Session 1",
							"info" : [ "+1 Focus", "+1 Lore" ],
							"text" : "Investigators lose the game if Walter Gilman is discarded for any reason."
						},
						{
							"name" : "Walter Gilman (Chapter 2)",
							"expansion" : "Arkham Spanish League Session 1",
							"info" : [ "+1 Focus", "+1 Lore" ],
							"text" : "If Yig awakens, the investigator that has Walter Gilman as an ally is devoured."
						},
						{
							"name" : "Walter Gilman (Chapter 3)",
							"expansion" : "Arkham Spanish League Session 1",
							"info" : [ "+1 Focus", "+1 Lore" ],
							"text" : "The investigator that has Walter Gilman as an ally can't have more than one monster trophy at a time."
						},
						{
							"name" : "Walter Gilman (Chapter 4)",
							"expansion" : "Arkham Spanish League Session 1",
							"info" : [ "+1 Focus", "+1 Lore" ],
							"text" : "The investigator that has Walter Gilman can't get rid of his Curse, but is not affected by The Dark Pharaoh - Blood Will Boil ability"
						},
						{
							"name" : "Walter Gilman (Chapter 5)",
							"expansion" : "Arkham Spanish League Session 1",
							"info" : [ "+1 Focus", "+1 Lore" ],
							"text" : "The Investigator that has Walter Gilman as an ally cannot gain clue tokens in any way."
						},
						{
							"name" : "Walter Gilman (Chapter 6)",
							"expansion" : "Arkham Spanish League Session 1",
							"info" : [ "+1 Focus", "+1 Lore" ],
							"text" : "The Investigator that has Walter Gilman as an ally receives one additional Madness card each time he/she needs to draw one."
						},
						{
							"name" : "Walter Gilman (Chapter 7)",
							"expansion" : "Arkham Spanish League Session 1",
							"info" : [ "+1 Focus", "+1 Lore" ],
							"text" : "Each time a Weather card is discarded, the investigator that has Gilman as an ally loses 1 Stamina."
						},
						{
							"name" : "Walter Gilman (Chapter 8)",
							"expansion" : "Arkham Spanish League Session 1",
							"info" : [ "-1 Focus", "+2 Lore", "-1 Speed" ],
							"text" : "You must have Gilman as an ally in order to win the game."
						},
						{
							"name" : "William Bain",
							"expansion" : "Kingsport Horror",
							"info" : [ "+1 Luck", "+1 Speed" ],
							"text" : "Remove 1 doom token from the doom track when William Bain joins you."
						},
						{
							"name" : "Young Zoog",
							"expansion" : "Kingsport Horror",
							"info" : [ "+1 Lore", "+1 Speed", "+1 Will" ],
							"text" : "Discard if you gain Foolishness as an Ally."
						},
						{
							"name" : "Zebulon Whateley",
							"expansion" : "Dunwich Horror",
							"info" : [ "+1 Lore", "+1 Will" ],
							"text" : "Any Phase: Exhaust to refresh 1 of your Spells."
						} ]);
