'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.locationsData
 * @description # locationsData Constant in the arkhamHelperApp.
 */
angular.module('arkhamHelperApp').constant('locationsEncounterData',
[
 {
  "name": "Administration Building",
  "neighborhood": "Miskatonic University",
  "encounters": [
   {
    "text": "A student mistakes you for the bursar. If you want to carry on the deception, make a Will (-2) check. If you pass, gain $8 in ill-gotten tuition money. If you fail, you're arrested and taken to the Police Station."
   },
   {
    "text": "Discuss the opportunity to sell a monograph with the President of the University. Pass a Lore (-1) check to make the sale and gain $5."
   },
   {
    "text": "Discuss the opportunity to sell a monograph with the President of the University. Pass a Lore (-1) check to make the sale and gain $5."
   },
   {
    "text": "Pass a Will (-1) check to get the Dean to offer you a retainer to write a manuscript for the college. Gain a Retainer card."
   },
   {
    "text": "The Dean introduces you to an anthropology professor who gives you some insight into your investigation. Gain 1 Clue token."
   },
   {
    "text": "You may choose to help an anthropology professor and his students decipher an ancient stone tablet. If so, make a Lore (-2) check. If you pass, you correctly interpret it, draw 1 Spell. If you fail, you mispronounce a word and are Cursed."
   },
   {
    "text": "Your discussions on the Mythos lead campus security to conclude that you are off your rocker, and they escort you off campus. Move to Arkham Asylum and immediately have an encounter there."
   }
  ],
  "special_encounter": "Classes: Instead of having an encounter here, you may pay $8 to draw 2 Skills. Keep one of them and discard the other."
 },
 {
  "name": "Arkham Asylum",
  "neighborhood": "Downtown",
  "encounters": [
   {
    "text": "In the Doctor's study, you find a book of helpful notes gathered from inmate interviews.  Make a Lore (+0) check and consult the following chart:Successes:\n\n\n0) Their stories fill you with horror even as you learn a few bits of knowledge.  Lose 1 Sanity and gain 1 Clue token.\n\n1-2) You find several pieces of useful information.  Gain 2 Clue tokens.\n\n3+) One of the interviews contains vital information.  Gain 3 Clue tokens."
   },
   {
    "text": "Nurse Heather accidentally injects you with a sleeping draught. You may make a Fight (-2) check to resist.  If you fail or choose not to resist, lose your next turn and gain 2 Sanity from the prolonged rest.  If you pass, nothing happens."
   },
   {
    "text": "Nurse Heather is coming!  Make a Speed (-1) check to hide in time.  If you pass you see her drop something as she walks by.  Draw 1 Unique Item.  If you fail, she throws you out.  Move to the street."
   },
   {
    "text": "The guards of the sanitarium are aware that there is an intruder.  Make a Sneak (-1) check to escape.  If you pass, move to the street.  If you fail, you are arrested and taken to the Police Station."
   },
   {
    "text": "You are mistaken for an inmate.  Doctor Mintz has the guards subdue you and conducts an experiment.  Make a Will (-1) [2] check to discover the results.  If you pass, the injections seem to increase your capacity for learning.  Draw 1 Skill.  If you fail, his memory drug fails miserably, resulting in lost knowledge.  You must discard one of the following (your choice), if able: 4 Clue tokens, or 2 Spells, or 1 Skill."
   },
   {
    "text": "You find some strange medicine labeled \"Dream Enhancers\" in a dusty cabinet.  If you choose to take it, make a Lore (-1) check.  If you pass, your visions show you how to perform a ritual.  Draw 1 Spell.  Otherwise, nothing happens."
   },
   {
    "text": "You hear screaming.  When you open a heavy cell door to investigate, a dark shape leaps out at you!  It's an insane man in a straightjacket babbling about invisible horrors.  Make a Lore (-2) check to glean some useful information from him.  If you pass, gain 2 Clue tokens.  If you fail, lose 1 Stamina as he attacks you."
   }
  ],
  "special_encounter": "Psychiatric Care: Instead of having an encounter here, you may recover Sanity by receiving psychiatric care. You may either regain 1 Sanity for free, or pay $2 to restore your Sanity to its maximum value."
 },
 {
  "name": "Bank of Arkham",
  "neighborhood": "Downtown",
  "encounters": [
   {
    "text": "\"This is a stick-up, see? Nobody move!\" Three men armed with tommy guns rob the bank while you're standing in line. Make a Combat (-1) check. If you pass, you drive them off. Nothing happens. If you fail, lose all of your money."
   },
   {
    "text": "A little old lady stands in front of you in line counting out a bag of pennies to deposit. Lose 1 Sanity."
   },
   {
    "text": "A man wearing dirty and tattered clothing is loitering outside the bank. He offers to sell you his last possession to get some food money for him and his family. If you accept, pay $2 and make a Luck (-1) check. If you pass, draw 1 Unique Item. If you fail, draw 1 Common Item."
   },
   {
    "text": "A teller you've never seen before insists she just saw you come in and make a deposit the day before. She proves it by showing you your signature. Gain $5, but lose 1 Sanity."
   },
   {
    "text": "One of the other customers in the bank recognizes you and offers you a lift. Move to any location or street area in Arkham. If you move to a location, immediately have an encounter there."
   },
   {
    "text": "You find a penny with a strange sigil carved into it. Amused, you flip it in the air, then gasp as you feel the sudden gathering of magical forces around you. Make a Luck (-2) check. If you pass, the penny comes up heads. You are Blessed. If you fail, it comes up tails. You are Cursed."
   },
   {
    "text": "You see a richly dressed man making a large withdrawal. On the way out, he lights his cigar with a piece of green paper which he then drops on the ground. Pass a Speed (-1) check to stub it out with your toe before it burns up. You discover it to be a slightly singed two dollar bill. Gain $2."
   }
  ],
  "special_encounter": "Bank Loan: Instead of having an encounter here, you may take out a Bank Loan if you don't have one yet."
 },
 {
  "name": "Black Cave",
  "neighborhood": "Rivertown",
  "encounters": [
   {
    "text": "A monster appears!"
   },
   {
    "text": "Bats! Hundreds of them! Pass a Speed (-1) check to get out of the cave safely. If you fail, lose 1 Stamina."
   },
   {
    "text": "In the darkness you happen upon the remains of a previous spelunker. Make a Luck (+0) check and consult the chart below:\nSuccesses:\n\n\n0) The body begins to bloat and splits open, releasing the horror within. Lose 1 Sanity and a monster appears!\n\n1) The body has been ripped apart as if shredded by a powerful monster. Lose 1 Sanity.\n\n2+) Searching the body you find something intersting. Draw 1 Common Item."
   },
   {
    "text": "The moaning winds in the cave whisper your name. Lose 1 Sanity."
   },
   {
    "text": "You are attacked by a shadowy being, but a large man leaps out of the darkness and drives it off. He introduces himself as Tom \"Mountain\" Murphy. Make a Luck (-2) check, or discard a Whiskey card to pass it automatically. If you pass, he joins your investigation. Take his Ally card if it's available, otherwise he gives you something to protect yourself with. Search the Common Item deck and take the first Weapon you find. If you fail, nothing happens."
   },
   {
    "text": "You are in a maze of twisty passages, all alike. Pass a Lore (-2) check or become lost. If you fail, lose 1 Stamina and stay here next turn."
   },
   {
    "text": "You find an old book. If you read it, make a Lore (+0) check and consult the chart below:\nSuccesses:\n\n\n0) Evil forces assault you. Lose 1 Sanity and 1 Stamina.\n\n1) You find the diary of a lost soul who died in the caves long ago. Lose 1 Sanity and gain 1 Clue token as you read his horrible tale.\n\n2+) The book is a spellbook.  Take the first Tome from the Unique Item deck."
   }
  ]
 },
 {
  "name": "Curiositie Shoppe",
  "neighborhood": "Northside",
  "encounters": [
   {
    "text": "A pulsing void gapes behind a bookshelf, sending out waves of heat. Pass a Fight (-1) check or it sucks you in, hurling you into the Abyss. Have one encounter there, then immediately return."
   },
   {
    "text": "A sale takes place. All players may participate. Turn over the top 3 Common Item cards and the top Unique Item card. Any player may buy one or more of these cards for their list price. If there is a disagreement over who gets to buy a certain card, you decide. Any items not sold are discarded."
   },
   {
    "text": "As you wander into the back of the shop, you hear a noise. Pass a Speed (-1) check or you look up just in time to see a descending club. Everything goes black. When you awaken, you are somewhere else. Draw a mythos card and move to the gate location shown on it, then immediately have an encounter there."
   },
   {
    "text": "Jackpot! You find just what you've been looking for. Search either the Common or Unique Item deck and purchase any one item of your choice at list price."
   },
   {
    "text": "Pass a Luck (-1) check or you accidentally drop an item. Discard 1 item of your choice. If you have no items to drop, then draw again for a different encounter."
   },
   {
    "text": "You examine an obscene statue. Pass a Luck (-2) check or else you feel a cold dread spread through your body as you hold it. You are Cursed."
   },
   {
    "text": "You weed through piles of junk looking for something useful. Make a Luck (-1) check to see what you find. If you pass, your search has resulted in success. You may look at the top cards of both the Common and Unique Item decks. You may purchase one, both, or neither at list price.  If you fail, there is little of interest here, but you may look at the top card of the Common Item deck and purchase it for its list price."
   }
  ],
  "special_encounter": "Shop: Instead of having an encounter here, you may draw 3 Unique Items and purchase one of them for its list price. Discard the other two items."
 },
 {
  "name": "General Store",
  "neighborhood": "Rivertown",
  "encounters": [
   {
    "text": "\"Hey, you dropped this!\" A young street urchin hands you an item and then scampers off. You don't recognize the item, but the boy is already gone. Draw 1 Common Item."
   },
   {
    "text": "A jar on the counter bears a sign proclaiming, \"Guess how many marbles are in the jar and win a prize! $1 entry fee.\" If you want, you may pay $1 to make a Lore (-2) check. If you pass, you gain $5. If you fail, nothing happens."
   },
   {
    "text": "Make a Will (-2) check. If you pass, you gain the ear of the shopkeeper. Seeing your valiant cause, he takes you into the back room and offers some special equipment. Draw 3 Common Items. You may take 1 of them for free as a gift to help thwart the evil in Arkham! Discard the other 2. If you fail, nothing happens"
   },
   {
    "text": "Noticing a glint on the floor, you discover a silver dollar someone must have dropped. Gain $1."
   },
   {
    "text": "The shopkeeper notices one of the items you're carrying and his face lights up. \"Say, I've been looking for one of those. You wouldn't mind parting with it, would ya? I can pay well.\" You may sell any of your Common Items for twice its listed price."
   },
   {
    "text": "You notice that some of the locals have an odd, fish-like quality that sets your teeth on edge. The shopkeeper notices your gaze and nods. \"Marsh stock, from over in Innsmouth. Watch yourself around them.\" Shivering, you lose 1 Sanity."
   },
   {
    "text": "You try talking to the elderly locals gathered around the potbellied stove playing checkers, but you gain nothing but stares and few befuddled grunts for your trouble. Apparently they don't like outsiders. No encounter."
   }
  ],
  "special_encounter": "Shop: Instead of having an encounter here, you may draw 3 Common Items and purchase one of them for its list price. Discard the other two items."
 },
 {
  "name": "Graveyard",
  "neighborhood": "Rivertown",
  "encounters": [
   {
    "text": "\"Testifying\" Cooter Falwell latches onto you and rambles on about his spiritual beliefs. Make a Lore (-1) check. If you pass, then somewhere in Cooter's words you find a clue to the Mythos threat. Gain 1 Clue token, but lose 1 Sanity. If you fail, move to the street while you listen to Cooter ramble on about pure nonsense."
   },
   {
    "text": "A monster appears!"
   },
   {
    "text": "Descending into a dark mausoleum, you discover a vampire rising to feed. You quickly find yourself fighting for your life. Make a Combat (-2) check. If you pass, you defeat the vampire, gaining 1 Clue token and drawing 1 Unique Item. If you fail, roll a die and lose that much Stamina."
   },
   {
    "text": "Entering a stone crypt, you are surprised to find a beautiful fresco and some inspirational words upon the wall. There is an almost magical peace within the chamber. Gain 2 Sanity."
   },
   {
    "text": "Pass a Luck (-2) check to find a valuable clue within your tombstone rubbings. Gain 2 Clue tokens and you may move to any location or street area in Arkham. If you move to a location, immediately have an encounter there."
   },
   {
    "text": "You find a half-buried corpse of a strange being. Draw a monster from the cup and take it as a monster trophy, even if it has the Endless ability."
   },
   {
    "text": "You find a man painting a picture on one of the horrible gargoyles lining the walls of the graveyard. Seeing you, he introduces himself as Richard Upton Pickman, a painter visiting from Boston. If you spend monster trophies that have a total of 5 toughness, Pickman takes a liking to you. Take his Ally card. If it is not available, he teaches you an incantation instead. Draw 1 Spell."
   }
  ]
 },
 {
  "name": "Hibb's Roadhouse",
  "neighborhood": "Easttown",
  "encounters": [
   {
    "text": "\"So, what's your story, friend?\" A smiling man inquires about your adventures over a glass of gin. You tell him your story. If you spend 3 Clue Tokens, he introduces himself as Ryan Dean and asks to join you. Take his Ally card. If it's not available, he gives you some useful items instead. Draw 2 Common Items."
   },
   {
    "text": "A horrible monster appears!"
   },
   {
    "text": "A stranger buys you a drink. You may search the Common Item deck for a Whiskey card and take it."
   },
   {
    "text": "Joey \"The Rat\" Vigil slips into an empty chair at your table and whispers, \"Pssst! Wanna buy something?\" Look at the top 3 cards of the Common Item deck. You may purchase any or all of them for $1 above the list price. \"Hey, I've got overhead!\" the Rat explains"
   },
   {
    "text": "Pass a Luck (-1) check or a pickpocket cleans you out! Lose all your money."
   },
   {
    "text": "Prohibition failed to influence the proprietor of Hibb's. You drink heavily while quizzing the locals about the strange goings-on in Arkham. Make a Will (-1) check. If you pass, you hold your liquor and learn something. Gain 2 Clue tokens. If you fail, you pass out. Move to the street and either have 1 item (your choice) or all of your money stolen."
   },
   {
    "text": "You enter a \"friendly\" card game. Make a Luck (-1) check. If you pass, you win $5. If you fail, you lose $3. If you lose and can't pay, the boys rough you up and throw you outside. Lose 1 Stamina and move to the street."
   }
  ]
 },
 {
  "name": "Historical Society",
  "neighborhood": "Southside",
  "encounters": [
   {
    "text": "Pass a Luck (-1) [2] check to gain insight into a skill while studying the old volumes of books. Draw 1 Skill, but stay here next turn."
   },
   {
    "text": "Pay  $3 fee to gain access to the private library. If you refuse, move to the street. If you pay, make a Luck (-1) check. If you pass, you learn an ancient spell from a dusty ledger. Draw 1 Spell. If you fail, you doze off and enter The Dreamlands. Have an encounter there, then immediately return here."
   },
   {
    "text": "Perusing the county records, you discover something horrifying about your family tree. Lose 1 Sanity."
   },
   {
    "text": "The Society members are bird watching in the woods. The janitor offers you a ride there. If you accept, move to the Woods and draw 2 cards, encountering one card of your choice and discarding the other."
   },
   {
    "text": "You encounter a friendly old professor from Miskatonic University. If you spend 1 gate trophy, he introduces himself as Professor Armitage and offers to join forces with you. Take his Ally card if it is available, otherwise draw 1 Unique Item."
   },
   {
    "text": "You meet Cindy Fleming, a young geology professor at the University. She offers to show you some interesting formations at the Black Cave. If you accept, move to the Black Cave and draw 2 cards, encountering one card of your choice and discarding the other."
   },
   {
    "text": "You notice a creepy man watching you as you peruse the books. With a feeling of dread you try to slip out without being followed. Make a Sneak (-1) check. If you pass, you lose the man. If you fail, you are accosted in the street. He is a wizard and he casts a dark spell on you as you flee. Lose 2 Stamina, move to the street, and you are Cursed."
   }
  ]
 },
 {
  "name": "Independence Square",
  "neighborhood": "Downtown",
  "encounters": [
   {
    "text": "A pair of friendly picnickers share their lunch with you. Gain 1 Stamina."
   },
   {
    "text": "A shadow falls across you from no apparent source and you shiver with more than just cold. Pass a Will (-1) check or lose 1 Stamina and 1 Sanity."
   },
   {
    "text": "Make a Will (-1) check. If you pass it, Anna Kaslow the fortune teller offers her help in your investigation. Take her Ally card if it is still available. Otherwise, gain 2 Clue tokens. If you fail, nothing happens."
   },
   {
    "text": "Pass a Fight (-1) check to intimidate a policeman or he rousts you from the park. Move to the street."
   },
   {
    "text": "There are gypsies camped in the park. Make a Luck (-1) check if you wish to interact with them. If you pass, an old man has spread several items on a blanket for sale. Draw 1 Unique Item and you may buy it for $1 less than the list price. If you fail, a hag comes up to you and tells you that death shadows you. You scoff at her and she cuts the side of your face with her fingernail, drawing blood. Lose 1 Stamina and you are Cursed."
   },
   {
    "text": "There are gypsies camped out in the park. They are master thieves and you are their target. Pass a Luck (-2) check or lose 1 item of your choice."
   },
   {
    "text": "You touch Founder's Rock. Make a Luck (-1) check. If you pass, there is an electrifying shock that opens your mind to the elder things of eons past. Lose 1 Stamina, but gain 2 Clue tokens and draw 1 Spell. If you fail, you find a strange carving. As you finger the grooves, a gate opens here and you are drawn through it."
   }
  ]
 },
 {
  "name": "Inner Sanctum",
  "neighborhood": "French Hill",
  "encounters": [
   {
    "text": "Carl Sanford does not trust you and at the climax of the monthly ceremony spits a spell at you. Pass a Luck (-2) check or you are Cursed."
   },
   {
    "text": "Participating in the monthly ceremony, you witness great power and great evil. Lose up to 3 Sanity and gain that many Clue tokens."
   },
   {
    "text": "Pay your monthly dues of $3 or lose 2 Sanity from strange dreams sent to you by Carl Sanford when he kicks you out of the Order. If you are kicked out, lose your Silver Twilight Lodge Membership."
   },
   {
    "text": "The Order of the Silver Twilight casts a banishment spell in their monthly ceremony. Spend 1 Sanity to make a Luck (-1) check. If you pass, claim any one monster on the board as a trophy. If you fail, nothing happens."
   },
   {
    "text": "You are allowed into the vault of Silver Secrets. Pass a Luck (-2) check to steal a very unusual item. Search the Unique Item deck and take any one Unique Item you want."
   },
   {
    "text": "You attend a ceremony in which the order opens a gate and a monster bursts out of it before the gate closes once more. A monster appears!"
   },
   {
    "text": "You're invited to take part in a Gating ceremony. If you agree, spend 2 Clue tokens and 1 Sanity to make a Lore (-2) check. If you pass, close one gate of your choice. If you fail, nothing happens."
   }
  ]
 },
 {
  "name": "Library",
  "neighborhood": "Miskatonic University",
  "encounters": [
   {
    "text": "A book in a shadowy corner of the library begins to whisper terrible things to you. Lose 1 Sanity."
   },
   {
    "text": "Make a Will (+0) check and consult the chart below:Successes:\n\n\n0) Abigail tosses you out. Move to the street.\n\n1) Abigail lets you into a private section of the library where you find an ancient tome. Draw 2 Spells and keep whichever one of them you want.\n\n2+) Abigail loans you one of the strange items in the library's display case. Draw 1 Unique Item."
   },
   {
    "text": "Overdue book fines of $4. Pay up, or move to the street!"
   },
   {
    "text": "Pass a Luck (-2) check to find $5 someone was using as a bookmark."
   },
   {
    "text": "You doze off and enter the Dreamlands. Have an encounter there, then immediately return here."
   },
   {
    "text": "You find an unusual book that radiates evil at the touch. You begin to read and are drawn to it. Make a Lore (-2) check. If you pass, you obtain vast knowledge of the eldritch threat. Roll a die and gain that many Clue tokens. If you fail, the book consumes you-- mind and soul-- lose 2 Sanity and 2 Stamina."
   },
   {
    "text": "You look up to see Abigail Foreman leaning over you with hands on hips and a frustrated look on her face. Make a Will (-1) check. If you pass, she helps you find the book you were looking for. Take the first Tome from the Unique Item deck. If you fail, you've made too much noise. She escorts you out of the Library. Move to the street."
   }
  ]
 },
 {
  "name": "Ma's Boarding House",
  "neighborhood": "Southside",
  "encounters": [
   {
    "text": "After supper while sitting on the porch you strike up a conversation with another guest: Ryan Dean, a traveling salesman. You may make a Will (+0) check. If you pass, Ryan has a deal for you. You may draw either 1 Common Item or 1 Unique Item and purchase it at list price. If you fail, stay here next turn listening to bawdy stories and tall tales."
   },
   {
    "text": "Chanting neighbors keep you up all night. Pass a Luck (-1) check or lose your choice of 1 Stamina or 1 Sanity"
   },
   {
    "text": "Ma Mathison serves her special soup at supper. Roll a die and gain that much Stamina"
   },
   {
    "text": "Ma Mathison tells you that the best room on the house is available for the night. If you want, pay $3 to spend the night there. Gain 4 points split between Sanity and Stamina however you choose."
   },
   {
    "text": "Staring at a painting in one of the rooms, you find yourself drawn into it. Make a Luck (+0) check. If you pass, move to The Dreamlands. Have one encounter there and immediately return here. If you fail, move to the Abyss. Have one encounter there and immediately return here."
   },
   {
    "text": "The last guest to stay in your room had to leave in a hurry and left something behind. Draw 1 Common Item."
   },
   {
    "text": "You find a poorly boarded-up passage in the basement that opens into a winding tunnel. If you venture into it, you exit in the Silver Twilight Lodge. Draw 2 cards and encounter one card of your choice, discarding the other."
   }
  ],
  "special_encounter": "Recruit: Instead of having an encounter here, you may spend 10 toughness worth of monster trophies, 2 gate trophies, or 5 toughness worth of monster trophies and 1 gate trophy to take 1 Ally of your choice from the Ally deck."
 },
 {
  "name": "Newspaper",
  "neighborhood": "Northside",
  "encounters": [
   {
    "text": "Earn $5 for a story."
   },
   {
    "text": "Editor Doyle Jefferies offers you a Retainer in return for your fascinating stories. Take a Retainer card."
   },
   {
    "text": "Editor Doyle Jefferies offers you a Retainer in return for your fascinating stories. Take a Retainer card."
   },
   {
    "text": "Flipping through the early edition, you are surprised to see that one of the classified ads begins with your name. Reading it, you realize that it contains several coded clues to the nature of the threat that faces Arkham. Pass a Lore (-1) check to gain 3 Clue tokens."
   },
   {
    "text": "Pass a Luck (-1) check to find an article that a local citizen told you would shed light on the recent strange activities. Gain 1 Clue token."
   },
   {
    "text": "You accidentally tip over a bottle of ink and are aghast at the pattern the ink forms on the newsroom floor. Lose 1 Sanity."
   },
   {
    "text": "You earn a hefty fee for a story and get a ride with Doyle Jefferies, the editior. Gain $2 and move to any location or street area in Arkham. If you move to a location, immediately have an encounter there."
   }
  ]
 },
 {
  "name": "Police Station",
  "neighborhood": "Easttown",
  "encounters": [
   {
    "text": "Deputy Dingby accidently drops a case file as he makes his way past you. Pass a Sneak (+0) check to search the Common Item deck for a Research Materials card and take it."
   },
   {
    "text": "Deputy Dingby, excitedly cleaning his gun, fires a bullet from the chamber in your direction. Pass a  Luck (-1) check to avoid getting shot. If you fail, lose 2 Stamina."
   },
   {
    "text": "If you succeed at a Luck (-1) check, then Deputy Dingby absentmindedly leaves you holding his gun. You may search the Common Item deck for a .45 Revolver (errata: should read .38 Revolver) card and take it."
   },
   {
    "text": "One of the men in the holding cells tries to intimidate you with stories about the things he's seen. Make a Will (-1) check. If you pass, gain 1 Clue Token. If you fail, move to the street and lose 1 Sanity as the man laughs at your retreating back."
   },
   {
    "text": "Pass a Will (-1) check to convince Deputy Dingby to share some files with you that are very interesting. Gain 2 Clue Tokens."
   },
   {
    "text": "Sheriff Engle notes that you're carrying an awful lot of weapons. Either pay him $5 or discard all of your Weapons."
   },
   {
    "text": "Sheriff Engle trusts you and asks you to step into his office to discuss the recent strange events. Pass a Luck (-2) check to convince him to take you into his confidence and give you something to help you out. Draw 1 Unique Item."
   }
  ],
  "special_encounter": "Deputized: Instead of having an encounter here, you may spend 10 toughness worth of monster trophies, 2 gate trophies, or 5 toughness worth of monster trophies and 1 gate trophy to become the Deputy of Arkham. Take the Deputy of Arkham card."
 },
 {
  "name": "River Docks",
  "neighborhood": "Merchant District",
  "encounters": [
   {
    "text": "A horrific stench draws your attention to the body of some bizarre marine creature, rotting on the edge of the docks. As you move towards it, an uneasy feeling grows in the pit of your stomach, as though you are meddling with something best left alone. Make a Will (-1) check. If you pass, lose 1 Sanity. If you fail, lose 2 Sanity. In either event, if you are not reduced to 0 Sanity, you find something clutched in its webbed hands. Draw 1 Unique Item."
   },
   {
    "text": "As you look out across the waves, you feel strangely compelled to throw yourself into the ocean's watery embrace. Pass a Will (+1) check or you are Lost in time and space."
   },
   {
    "text": "The dock workers are short-handed and offer you a job as a stevedore for the day. Make a Fight (+0) check. If you pass, gain $3 for every success you rolled. If you fail, the boss gets tired of your lollygagging and throws you out. Lose 1 Stamina and move to the street."
   },
   {
    "text": "Walking along the dock you see something floating in the water near the edge of the dock. You reach for it - make a Luck (-1) check. If you pass, you dredge up something useful. Draw 1 Common Item. If you fail, you pull to the surface the tentacle that immediately wraps around your neck and drags you under the water and out to sea. Lose 1 Sanity and 3 Stamina before you break free."
   },
   {
    "text": "You bump into Abner Weems, the local drunk. You help him find a place to sleep for the night, and he mumbles something to you over and over. Make a Luck (-1) check. If you pass, his mumbling is a magical chant. Draw 1 Spell. If you fail, it's gibberish. Nothing happens."
   },
   {
    "text": "You notice a piece of wood floating in the water; carved into it is the name of a ship long since sunk. As you touch it, visions of the drowning passengers' last moments of life flood through your mind. Pass a Speed (-1) check to hurl it away from you. If you fail, you fall to the ground with a cry. Lose 1 Sanity."
   },
   {
    "text": "You open some crates on the dock. Inside you find some useful things. Draw 2 Common Items. Next, make a Luck (-1) check. If you pass, you get away without being seen. If you fail, you are arrested and taken to the Police Station."
   }
  ],
  "special_encounter": "Shady Character: Instead of having an encounter here, you may spend 5 toughness worth of monster trophies or 1 gate trophy to gain $5."
 },
 {
  "name": "Science Building",
  "neighborhood": "Miskatonic University",
  "encounters": [
   {
    "text": "A chemical brew bubbles on a nearby Bunsen burner. It smells delicious. If you drink it, make a  Luck (+0) check. If you pass, the strange liquid fortifies you. Roll a die and gain that many points, split between your Stamina and Sanity however you like. If you fail, the liquid turns out to be coffee. Gain 1 Stamina."
   },
   {
    "text": "A professor of the occult asks you to hold a hideous statue that he believes to have strange powers while he reads a scroll. Energy shoots through your body. Make a  Luck (-1) check. If you pass, your spirit rises from your body and you feel that you have the power to switch bodies with another investigator. You may choose another investigator from the pile of unused investigators and bring it into play as a new character, discarding your current investigator (along with all of his items, skills, trophies, etc.). If you fail, nothing happens."
   },
   {
    "text": "An archaeology professor shows you an item he recovered in an Egyptian pyramid. If you have 2 or fewer Spells, it glows in your hands and you find yourself outside, still holding it. Not wanting to confront the professor again, you decide to keep it. Gain 1 Unique Item and move to the street. If you have more than 2 Spells, nothing happens."
   },
   {
    "text": "As you enter the Department of Alchemy, a professor looks up in horror. He grabs an ancient artifact from a locked drawer in his desk and holds it up before your face, chanting and making symbolic motions with the item. If you are Cursed, discard the Curse. If you are not Cursed, then you are Blessed."
   },
   {
    "text": "Assisting a professor in his research, you find a valuable Spell. Draw 1 Spell. However, you must make a  Fight (-1) check or some sticky-fingered student steals one of your items. Lose 1 Item of your choice."
   },
   {
    "text": "You find a muscular, bored-looking man who challenges you to an arm wrestling match. Lose 2 Stamina if you accept. If this does not knock you unconscious, Sir William Brinton laughs and slaps your shoulder, offering to join your investigation. Take his Ally card. If it is not available, gain $5 instead."
   },
   {
    "text": "You find a student pounding on a strange device that he has hooked up to massive machinery. He states that it is a dimensional beam machine. If you offer to help him, make a  Lore (-2) check. If you pass, beams shoot out in all directions, disrupting the gates open throughout the board. Roll a die for each open gate one at a time. On a success the gate is closed. However, you may not take it as a trophy, but instead return it to the pile of gate markers. If you fail, the machinery overheats and explodes. Roll a die and lose that much Stamina, then move to St. Mary's Hospital."
   }
  ],
  "special_encounter": "Dissection: Instead of having an encounter here, you may spend 5 toughness worth of monster trophies or 1 gate trophy to gain 2 Clue tokens."
 },
 {
  "name": "Silver Twilight Lodge",
  "neighborhood": "French Hill",
  "encounters": [
   {
    "text": "\"Care to join the Order?\" Carl Sanford and several of his henchmen ask. If you accept, pay $3 and take a Silver Twilight Membership. If you decline, pass a Will (-1) check or lose 3 Stamina as the henchmen assist you out the door. Whether you pass or not, move to the street."
   },
   {
    "text": "\"Care to join the Order?\" Carl Sanford and several of his henchmen ask. If you accept, pay $3 and take a Silver Twilight Membership. If you decline, pass a Will (-1) check or lose 3 Stamina as the henchmen assist you out the door. Whether you pass or not, move to the street."
   },
   {
    "text": "Brushing up against a strange object in the hall, you feel stretched and thin, like your skin is too tight. Pass a Luck (-1) check or you are Cursed."
   },
   {
    "text": "Carl Sanford draws you into the study to talk and you feel the cold creep of dread listening to him. Make a Lore (-1) check. If you pass, your willpower stands up to the test of the ancient wizard and you even learn something of value. Gain 3 Clue tokens. If you fail, his hypnotic tones lull you into a trance. The conversation seems short, but when you leave the study, much time has passed and your thoughts are confused. Lose all of your Clue tokens and move to the street."
   },
   {
    "text": "Make a Sneak (-2) check. If you pass, you slip into the temple area of the Lodge and find 2 items of interest. Roll a die for each item. On a success, draw a Unique Item, otherwise draw a Common Item."
   },
   {
    "text": "You find an old parchment in the study. Pass a Lore (-1) check to draw 2 Spells and keep one of your choice."
   },
   {
    "text": "You hear the quiet sounds of an intruder. If you investigate, you find a woman dressed in black. She attacks you as soon as she sees you. Pass a Fight (-1) check to subdue her long enough to explain your investigation. You find out that her name is Ruby Standish and that she was robbing the Lodge. However, upon hearing your tale, she agrees to join you. Take her Ally card. If it is not available, draw a Unique Item instead."
   }
  ]
 },
 {
  "name": "South Church",
  "neighborhood": "Southside",
  "encounters": [
   {
    "text": "Father Michael convinces you that there are members of his congregation in greater need than you. Donate either half your money (rounded up) or half your items (your choice, rounded up) to the poor."
   },
   {
    "text": "Knowing that you are engaged in God's work, Father Michael Blesses you."
   },
   {
    "text": "Noticing you eying the holy water, Father Michael tells you, \"Take what you need, my child.\" You may search the Unique Item deck for a Holy Water card and take it."
   },
   {
    "text": "Upon entering the church, you are attacked by Father Michael with a giant cross, who for some reason believes you to be in league with the devil. Make a Speed (-1) check. If you pass, you escape. If you fail, lose 2 Stamina. In either case, move to the street."
   },
   {
    "text": "You could swear a drain pipe gargoyle moved. Lose 1 Sanity."
   },
   {
    "text": "You enter the confessional. \"Bless me, Father, for I have sinned.\" Make a Luck (+0) check and consult the chart below:Successes:\n\n\n0) \"Father? Are you there?\" You hear a scream in the next compartment! Lose 3 Sanity and move to the street.\n\n1) \"Father?\" There is no answer. Sighing, you leave. Move to the street.\n\n2+) \"I don't remember my last confession.\" Raise your Sanity to its maximum value."
   },
   {
    "text": "You join in the morning mass. Spend 1 Clue token to ask for heavenly aid. If you do so, roll a die. On a success, your prayers are answered. Remove 1 doom token from the Ancient One's doom track."
   }
  ],
  "special_encounter": "Blessing: Instead of having an encounter here, you may spend 5 toughness worth of monster trophies or 1 gate trophy to have any investigator you choose be Blessed."
 },
 {
  "name": "St. Mary's Hospital",
  "neighborhood": "Uptown",
  "encounters": [
   {
    "text": "Make a Luck (-1) check. If you pass, you realize that Dr. Mortimore is sneaking up behind you with a hypodermic needle filled with a phosphorescent gel. You avoid his experiment and subdue the mad doctor. The city awards you $3 and you gain 2 Sanity in the process. If you fail, lose 2 Sanity, then you are dumped in the street."
   },
   {
    "text": "Nurse Sharon slips something into your hand when the doctor isn't looking. Pass a Sneak (-1) check to keep anyone else from noticing. If you do, you later examine the object and find it to be an old parchment with a spell scratched on it. Draw 1 Spell. If you fail, an orderly takes it away from you and you gain nothing."
   },
   {
    "text": "One of the staff physicians talks some sense into you. You are disabused of certain crazy but accurate notions. Lose 1 Clue token."
   },
   {
    "text": "The corpse you are examining isn't quite dead yet. It reaches out and grabs you by the throat. Lose 1 Sanity. Then, you must fight the corpse. If you pass a Combat (-1) check, you defeat it and gain 1 Clue token. Otherwise, move to the street."
   },
   {
    "text": "The Doctor escorts you behind a curtain where the body of some other unfortunate investigator has been laid. The corpse has been torn to shreds. Pass a Will (-1) check or lose 1 Sanity. If you pass, you may also search the body and find a helpful item. Draw 1 Unique Item. If you fail, you run away screaming. Move to the street."
   },
   {
    "text": "You agree to undergo an experimental treatment. Roll a die. On a 1-3, gain that many Stamina. On a 4-6, nothing happens."
   },
   {
    "text": "You sneak a peek at the medical records for a recent admission who was involved in a cult ritual. Pass a Lore (+0) check to learn something about the cult's methods Gain 1 Clue token."
   }
  ],
  "special_encounter": "Medical Care: Instead of having an encounter here, you may recover Stamina by receiving medical care. You may either regain 1 Stamina for free, or pay $2 to restore your Stamina to its maximum value."
 },
 {
  "name": "The Unnamable",
  "neighborhood": "Merchant District",
  "encounters": [
   {
    "text": "A monster and a gate appear!"
   },
   {
    "text": "In a dusty and decaying roll-top desk, you find a mysterious manuscript. If you read it, make a Lore (-1) check. If you pass, draw 1 Spell. If you fail, the manuscript is nothing but the insane babbling of a previous renter. Stay here next turn reading it, but gain 2 Clue tokens."
   },
   {
    "text": "Pass a Luck (-1) check to find a hidden cache concealed in the wall of an upstairs bedroom. Draw 1 Unique Item."
   },
   {
    "text": "The ceiling beam suddenly buckles. Make a Speed (-1) check. If you pass, move to the street. If you fail, lose 2 Stamina."
   },
   {
    "text": "You bump into Eric Colt. He tells you a horrible tale of the Mythos to test your nerve. If you listen, lose 2 Sanity. If this doesn't drive you insane, take his Ally card if it is available. If it is not available, you may pump him for information instead. Gain 3 Clue tokens."
   },
   {
    "text": "You hear scurrying and squeaking of a horde of rats from inside the walls. Abruptly, you realize that they are moving to surround you. Pass a Speed (-1) check to make it to the front door first. If you fail, you are lost in time and space."
   },
   {
    "text": "You notice a glint of light in a crevice. If you reach in, make a Luck (-1) check. If you pass, draw 1 Unique Item. If you fail, you feel a sharp pain as teeth clamp down on your hand. You manage to pull free, but you lose 2 Stamina and 1 Sanity."
   }
  ]
 },
 {
  "name": "The Witch House",
  "neighborhood": "French Hill",
  "encounters": [
   {
    "text": "\"Excuse me, stranger, but have you ever seen this symbol before?\" A man standing near the house holds up an occult symbol. Make a Lore (-1) check. If you pass, the man introduces himself as Thomas F. Malone, a police detective visiting Arkham on a case. He's impressed with you and offers to join you. Take his Ally card. If it's not available, he tells you some valuable information instead. Gain 2 Clue tokens. If you fail, nothing happens."
   },
   {
    "text": "A gate and a monster appear!"
   },
   {
    "text": "In an old journal you learn some horrible eldritch secrets. Roll a die. Lose that much Sanity and gain that many Clue tokens."
   },
   {
    "text": "Pass a Luck (-1) check to find an odd-looking item in an old dusty display case. Draw 1 Unique Item."
   },
   {
    "text": "You are overcome by the echoing chants of the long-gone witches who have lived and died here - you pass out. Make a Will (-2) check. If you pass, you learn an ancient spell in your dreams. Draw 1 Spell. If you fail, you are missing half your items when you wake up. Discard half of your items (your choice, round down)."
   },
   {
    "text": "You feel the house actually breathe and speak your name. Lose 1 Sanity."
   },
   {
    "text": "You find a banquet laid out in the dining room and feel compelled to sit down and eat. Make a Luck (+0) check and consult the following chart:Successes:\n\n\n0) You suddenly realize what you've been eating. Lose 3 Sanity.\n\n1) You gorge yourself, unable to stop eating. Stay here next turn.\n\n2) The food makes you feel sick. Lose 1 Stamina.\n\n3+) The meal refreshes you. Gain 3 Stamina."
   }
  ]
 },
 {
  "name": "Train Station",
  "neighborhood": "Northside",
  "encounters": [
   {
    "text": "A stranger in a turban steps off the Boston local train with a crazed look on his face. Make a Luck (-1) check. If you pass, the man pulls a strange object from beneath his cloak and gives it to you. Draw 1 Unique Item. If you fail, he pulls a poisoned blade out of his cloak and stabs you. Roll a die and lose that much Stamina."
   },
   {
    "text": "A well-dressed man is standing on the platform. He turns and greets you by name. Although he seems oddly familiar, you don't remember ever meeting him before. Then he steps off the platform into the path of a speeding train. Make a Speed (-1) check. If you pass, he vanishes as you leap right through him. On the ground, you find yourself clutching a scrap of paper. Gain 1 Spell. If you fail, he is obliterated before your eyes. Roll a die and lose that much Sanity."
   },
   {
    "text": "Bill Washington moves the last of the baggage from his cart onto a truck and offers you a ride as he opens the driver's door. If you accept, move to any location or street area in Arkham. If you move to a location, immediately have an encounter there."
   },
   {
    "text": "Joey \"the Rat\" is huddled in the shadows of the train station and motions for you to come over. He has an item for sale. Draw the top Common Item card and pay $1 more than list price if you wish to keep it."
   },
   {
    "text": "On the loading dock you investigate a large crate with strange markings. Make  Sneak (-1) check. If you pass, you find a very unusual item in the crate. Gain 1 Unique Item. If you fail, Deputy Dingby catches you breaking it open. You are arrested and taken to the Police Station."
   },
   {
    "text": "Pay $3 at the Railroad Office to claim an item left in Lost and Found. If you do so, make a Luck (-2) check. If you pass, draw a Unique Item. If you fail, draw a Common Item"
   },
   {
    "text": "The old train hand Bill Washington sits on the train platform playing his guitar as he awaits the next train. As you listen to his singing you feel yourself healing inside. Gain 2 points divided between Stamina and Sanity however you choose."
   }
  ]
 },
 {
  "name": "Unvisited Isle",
  "neighborhood": "Merchant District",
  "encounters": [
   {
    "text": "A group of hooded cultists are having a meeting among the standing stones on the island. Pass a Sneak (-1) check to overhear some of what they have to say. Gain 2 Clue tokens."
   },
   {
    "text": "A silent man brushes past you on the trail. Your arm goes numb with cold from the brief contact, and you whirl around to look at him, but he has disappeared. Lose 1 Stamina and pass a Will (-1) check or lose 1 Sanity as well."
   },
   {
    "text": "As you start to climb back into your canoe and row to shore, you see a huge, shadowy shape disturb the water near the island. Waves of intense dread grip you, and you must pass a Will (-1) check or be Cursed."
   },
   {
    "text": "Looking up at the night sky from the island, you see constellations that you've never seen before. The entire sky is different here! Lose 1 Sanity and gain 1 Clue token."
   },
   {
    "text": "The willows sway in a wind that you cannot hear or feel, and for a moment, the hatred of these ancient trees for the invader who has come to their island drives you to your knees. Pass a Will (-2) check or lose 3 Sanity."
   },
   {
    "text": "You come across a large pile of human bones under the boughs of one of the willows on the isle. Lose 1 Sanity, but find a scroll among the bones. Draw 1 Spell."
   },
   {
    "text": "You come across a man examining some old bones. Pass a Sneak (-1) check to get close enough to see what he's doing. He finally notices you and is impressed with your skills, introducing himself as John Legrasse. Take his Ally card if it's available, otherwise he shares a meal with you. Restore your Sanity and Stamina to their maximum value."
   }
  ]
 },
 {
  "name": "Velma's Diner",
  "neighborhood": "Easttown",
  "encounters": [
   {
    "text": "\"This must be where pies go when they die.\" If you want, pay $1 to enjoy a fine slice of cherry pie. If you do, gain 2 Stamina"
   },
   {
    "text": "\"What'll it be, hon?\" Velma takes your order. Pay up to $6 to gain that many points split between Sanity and Stamina however you like."
   },
   {
    "text": "Velma comments on how skinny you look and gives you a sandwich on the house. You may search the Common Item deck for a Food and take it."
   },
   {
    "text": "Velma reads the tea leaves left in your cup. Make a Luck (-1) check. If you pass, the formation of the leaves indicates hope, you are Blessed. If you fail, the future looks bleak, you are Cursed."
   },
   {
    "text": "You find some money on the floor under the back booth. If you take it, make a Sneak (-1) check. If you pass, roll a die and gain that much money. If you fail, Velma sees you pick up the money. She comes over and swipes it out of your hands screaming, \"Stealing my tips!\" so loudly that you flee the diner. Move to the street"
   },
   {
    "text": "You get food poisoning! Pass a Luck (-1) check or lose 2 Stamina."
   },
   {
    "text": "You spot a rat leaving the kitchen. Pass a Will (-2) check to convince Velma to bribe you $5 not to tell anyone."
   }
  ]
 },
 {
  "name": "Woods",
  "neighborhood": "Uptown",
  "encounters": [
   {
    "text": "A gate and a monster appear!"
   },
   {
    "text": "You are bushwhacked by the Sheldon Gang. Pass a Luck (-1) check to avoid their trap. If you fail, lose 2 items of your choice and 2 Stamina."
   },
   {
    "text": "You come across a cringing dog. Pass a Speed (-2) check to catch and calm him. If you have Food, you can discard that to automatically pass the check instead of rolling. You see by his collar that he is named Duke. Take his Ally card. If it isn't available, gain $3 as a reward for returning him to his owner, instead."
   },
   {
    "text": "You find a sleeping Sheldon Gang member near the still. Make a Sneak (-2) check to try to swipe the shotgun he has dropped on the ground. If you pass, take a Shotgun from the Common Item deck if there is one. If you fail, the guard awakens. You are caught and beaten, losing 2 Stamina, but you escape with your life. Move to the street."
   },
   {
    "text": "You have stumbled on a still owned by the Sheldon Gang. Make a Sneak (-1) check. If you pass, skulk away without being seen. If you fail, lose 2 Stamina as the Sheldon Gang works you over while escorting you from the woods. In either case, move to the street."
   },
   {
    "text": "You meet an old wise man in the grove who offers to share his wisdom with you. If you accept, lose your next turn and make a Lore (-2) check. If you pass, you may draw 1 Skill, or draw 2 Spells, or gain 4 Clue tokens. If you fail, nothing happens."
   },
   {
    "text": "You trip over an object which turns out to be a rusty lockbox. If you open it, make a Luck (+0) check and consult the following chart:Successes:\n\n\n0) A rotted human foot. Lose 1 Sanity.\n\n1) Draw 1 Common Item.\n\n2) Draw 1 Unique Item.\n\n3+) $10 in jewelry."
   }
  ]
 },
 {
  "name": "Ye Olde Magick Shoppe",
  "neighborhood": "Uptown",
  "encounters": [
   {
    "text": "Looking closely at a mummified head in the shop, you are horrified to find it looking back at you! Lose 1 Sanity."
   },
   {
    "text": "Looking into a glass ball, you receive a vision of things to come. Turn the top card of one location deck of your choice face up. The next investigator to have an encounter at that location draws that encounter card."
   },
   {
    "text": "Miriam Beecher talks to you for awhile, explaining some very interesting theories she has concerning the Mythos. Gain 1 Clue token."
   },
   {
    "text": "Miriam Beecher, the shopkeeper, peers closely at your face, then screams, \"They've marked you! Get out! Get out!\" and throws you out. Move to the street and lose 1 Sanity from this unsettling incident."
   },
   {
    "text": "Pass a Lore (-1) check to recognize an item that Miriam Beecher has underpriced. If you do so, draw 1 Unique Item. You may purchase it for half its list price (rounded up)."
   },
   {
    "text": "There is an old, locked trunk for sale for $5. If you buy it, make a Luck (+0) check and consult the chart below:Successes:\n\n\n0) Empty!\n\n1) Gold coins! Roll 2 dice, add them together, and gain that much money.\n\n2+) Jackpot! Draw 2 Unique Items!"
   },
   {
    "text": "You see an interesting book sitting open on Miriam Beecher's desk. Pass a Lore (-1) check or you peer closely at its pages only to realize too late that the book is Cursed... and now, so are you."
   }
  ],
  "special_encounter": "Magic Lessons: Instead of having an encounter here, you may pay $5 to draw 2 Spells. Keep one of them and discard the other."
 }
]);