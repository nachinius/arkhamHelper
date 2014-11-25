'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.mythos
 * @description
 * # mythos
 * Constant in the arkhamHelperApp.
 */
angular
		.module('arkhamHelperApp')
		.constant(
				'mythosData',
				[
						{
							"name" : "A Dark Wind Covers Arkham",
							"type" : "Environment (Mystic)",
							"expansion" : "Curse of the Dark Pharaoh",
							"gates" : [ "Unvisited Isle" ],
							"clues" : [ "The Witch House" ],
							"text" : "Mythos Ability: The terror level increases by 1. The maximum Stamina of all investigators in Arkham is reduced by 1. Horror checks in Arkham are made at a -2 penalty.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							},
							"pass" : "Flavor Text: Inky clouds blow in from the east, bringing with them sickness and fear."
						},
						{
							"name" : "A New Dawn!",
							"type" : "Headline",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates",
							"gates" : [ "Esoteric Order of Dagon",
									"The Witch House" ],
							"clues" : [ "Devil Reef", "Black Cave" ],
							"text" : "Mythos Ability: Each investigator who is currently at 2 or less Sanity gains 1 Sanity. Each investigator who is currently at 2 or less Stamina gains 1 Stamina.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "A Sandstorm!?",
							"type" : "Environment (Weather)",
							"expansion" : "Curse of the Dark Pharaoh"
						},
						{
							"name" : "A Strange Plague",
							"type" : "Environment (Mystic)",
							"gates" : [ "Independence Square" ],
							"clues" : [ "The Unnamable" ],
							"text" : "Mythos Ability: Investigators cannot gain Stamina except by receiving medical care in St. Mary's Hospital (or from Vincent Lee).",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Aldeberan Ascendant",
							"type" : "Environment (Mystic)",
							"expansion" : "The King in Yellow",
							"gates" : [ "Unvisited Isle" ],
							"clues" : [ "Science Building" ],
							"text" : "Mythos Ability: Flying creatures do not move to the sky. Gates to Another Dimension cannot be closed or sealed.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Alien Technology",
							"type" : "Environment (Urban)",
							"gates" : [ "Unvisited Isle" ],
							"clues" : [ "Science Building" ],
							"text" : "Mythos Ability: Mi-Go have their toughness increased by 2. If an investigator passes a Combat check against a Mi-Go, he draws 1 extra Unique Item.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "All Quiet in Arkham!",
							"type" : "Headline",
							"gates" : [ "Woods" ],
							"clues" : [ "Historical Society" ],
							"text" : "Mythos Ability: Each player may pass a Luck (-1) check to be Blessed.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							},
							"pass" : ""
						},
						{
							"name" : "Along Came Jones",
							"type" : "Environment (Urban)",
							"expansion" : "Dunwich Horror",
							"gates" : [ "Devil's Hopyard" ],
							"clues" : [ "Wizard's Hill" ],
							"text" : "Mythos Ability: The first investigator who ends his movement in the Train Station draws 1 Ally, then discards this card from play.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Amnesiac Professor's Memory Returns!",
							"type" : "Headline",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates",
							"gates" : [ "Wizard's Hill", "Independence Square" ],
							"clues" : [ "Gardners' Place", "The Unnamable" ],
							"text" : "Mythos Ability: Place 2 Clue tokens in each location with an elder sign.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "An Evil Fog",
							"type" : "Environment (Weather)",
							"gates" : [ "Graveyard" ],
							"clues" : [ "Unvisited Isle" ],
							"text" : "Mythos Ability: Will checks in Arkham are made at a -1 penalty. Sneak checks in Arkham are made at a +1 bonus. Fliers do not move.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Angry Red Skies",
							"type" : "Environment (Weather)",
							"expansion" : "Dunwich Horror",
							"gates" : [ "Wizard's Hill" ],
							"clues" : [ "Gardner's Place" ],
							"text" : "Mythos Ability: Will checks in Arkham are made at a -1 penalty. Lore checks in Arkham are made at a +1 bonus. Fliers do not move to or from the Sky.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Another Time, Another Place!",
							"type" : "Headline",
							"expansion" : "Dunwich Horror",
							"special" : "Gate burst",
							"gates" : [ "Woods" ],
							"clues" : [ "Historical Society" ],
							"text" : "Mythos Ability: Every open gate leading to Another Dimension or Another Time releases one monster into its location.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Balmy",
							"type" : "Environment (Weather)",
							"expansion" : "Dunwich Horror",
							"gates" : [ "Wizard's Hill" ],
							"clues" : [ "Gardner's Place" ],
							"text" : "Mythos Ability: Sneak checks in Arkham are made at a -1 penalty. Fight checks in Arkham are made at a +1 bonus. When moving, stalkers move to investigators in street areas or unstable locations up to 2 spaces away.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Bank Foreclosure",
							"type" : "Headline",
							"expansion" : "Curse of the Dark Pharaoh",
							"gates" : [ "Woods" ],
							"clues" : [ "Independence Square" ],
							"text" : "Mythos Ability: Any investigators in Arkham with Bank Loans must pay them off immediately. You may sell items at half their list price (round down) if you do not have the $10; if you cannot or will not pay, you are arrested.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							},
							"pass" : "Flavor Text: An archaeological expedition to Egypt sponsored by the bank has disappeared without a trace ... which means no returns on the bank's investment. Concerned for their savings, townsfolk rush the bank to withdraw their funds."
						},
						{
							"name" : "Bank Targeted By Grifters",
							"type" : "Rumor",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates",
							"gates" : [ "Cold Spring Glen", "Hibb's Roadhouse" ],
							"clues" : [],
							"text" : "Mythos Ability: Ongoing Effect: Place 1 Clue token on this card at the end of every Mythos Phase (beginning the turn after it entered play).",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							},
							"pass" : "Pass: If an investigator who either is the Deputy of Arkham or has a Sheldon Gang Membership (from the Dunwich Horror expansion) discards 3 Clue tokens while at the Bank of Arkham, return this card to the box. Each investigator then gains $10.",
							"fail" : "Fail: If there are 6 Clue tokens on this card, return it to the box. Each investigator must discard all of his money and any Retainer cards."
						},
						{
							"name" : "Big Storm Sweeps Arkham!",
							"type" : "Headline",
							"gates" : [ "Independence Square" ],
							"clues" : [ "The Unnamable" ],
							"text" : "Mythos Ability: All monsters in the Sky and Outskirts are returned to the cup.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Bizarre Couriers",
							"type" : "Headline",
							"expansion" : "The King in Yellow",
							"gates" : [ "Graveyard" ],
							"clues" : [ "Unvisited Isle" ],
							"text" : "Mythos Ability: Investigators in Arkham may immediately trade items or money without being in the same location. However, each investigator involved in the transaction loses 1 Sanity per item given or received.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							},
							"pass" : "Flavor Text: They come bearing strange messages, wrapped in ragged cloaks and hiding their pale flesh. Those who receive packages from them shudder at the memory of them, saying that they have the appearance of \"plump, white grave worms.\""
						},
						{
							"name" : "Bizarre Dreams Plague Citizens!",
							"type" : "Headline",
							"gates" : [ "Science Building" ],
							"clues" : [ "The Witch House" ],
							"text" : "Mythos Ability: All Gugs and Nightgaunts in Arkham are returned to the cup. If at least one monster returns to the cup, raise the terror level by 1.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Black Sabbath!",
							"type" : "Headline",
							"expansion" : "Dunwich Horror",
							"special" : "Gate burst",
							"gates" : [ "Woods" ],
							"clues" : [ "Historical Society" ],
							"text" : "Mythos Ability: All Rat-things, Witches, and Warlocks in Arkham are returned to the cup. If at least one monster returns to the cup, raise the terror level by 1.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Blackest Night",
							"type" : "Environment (Mystic)",
							"gates" : [ "Black Cave" ],
							"clues" : [ "Hibb's Roadhouse" ],
							"text" : "Mythos Ability: Luck checks in Arkham are made at a -1 penalty. Sneak checks in Arkham are made at a +1 bonus.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Blood Magic",
							"type" : "Environment (Mystic)",
							"gates" : [ "Independence Square" ],
							"clues" : [ "The Unnamable" ],
							"text" : "Mythos Ability: Investigators who end their movement in Rivertown streets may choose to delve into dark mysteries using their life force. They roll dice equal to their current Stamina, and for every failed die, they lose 1 Stamina. If this reduces them to 0 Stamina, they are devoured and the player must start a new character. Otherwise, they gain 3 Clue tokens.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Blue Flu!",
							"type" : "Headline",
							"gates" : [ "The Unnamable" ],
							"clues" : [ "Woods" ],
							"text" : "Mythos Ability: All investigators in jail are released. No investigators may be arrested until the end of next turn. Leave this card in play until then to indicate this.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Blue Plate Special",
							"type" : "Environment (Urban)",
							"expansion" : "Dunwich Horror",
							"gates" : [ "Devil's Hopyard" ],
							"clues" : [ "Wizard's Hill" ],
							"text" : "Mythos Ability: Investigators who end their movement in Velma's Diner may spend up to $4 instead of having an Arkham encounter. They gain 1 Stamina and 1 Sanity for every $1 spent.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							}
						},
						{
							"name" : "Blue Skies",
							"type" : "Environment (Weather)",
							"expansion" : "The Lurker at the Threshold",
							"gates" : [ "The Witch House" ],
							"clues" : [ "Black Cave" ],
							"text" : "Mythos Ability: All Investigators receive -1 Sneak, +1 Speed.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Book Sale",
							"type" : "Environment (Urban)",
							"expansion" : "Dunwich Horror",
							"special" : "Gate burst",
							"gates" : [ "Wizard's Hill" ],
							"clues" : [ "Gardner's Place" ],
							"text" : "Mythos Ability: Investigators who end their movement in the Library may spend $2 instead of having an Arkham encounter. Any investigator that does so then takes the first Tome from the Unique Items deck.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Brawling in the Streets",
							"type" : "Environment (Urban)",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates",
							"gates" : [ "Devil Reef", "Independence Square" ],
							"clues" : [ "Esoteric Order of Dagon",
									"The Unnamable" ],
							"text" : "Mythos Ability: Any investigator in a street area at the end of the Mythos phase must make a Fight (+0) check. If he fails and the terror level is 3 or less, he loses 1 Stamina. If he fails the check and the terror level is 4 or higher, he loses 2 Stamina.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Break-In at Neil's",
							"type" : "Headline",
							"expansion" : "Kingsport Horror",
							"gates" : [ "Silver Twilight Lodge" ],
							"clues" : [ "Neil's Curiosity Shop" ],
							"text" : "Mythos Ability: The thieves carelessly break a dangerous artifact, releasing 2 monsters into the South Shore streets.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Brutal Accident!",
							"type" : "Headline",
							"expansion" : "Dunwich Horror",
							"gates" : [ "Wizard's Hill" ],
							"clues" : [ "Gardner's Place" ],
							"text" : "Mythos Ability: The first player must choose one investigator (even himself). That investigator loses 3 Stamina.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Campus Security Increased!",
							"type" : "Headline",
							"gates" : [ "Independence Square" ],
							"clues" : [ "The Unnamable" ],
							"text" : "Mythos Ability: All monsters in the Miskatonic U. Streets or Locations are returned to the cup.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Cash on the Hoof!",
							"type" : "Headline",
							"expansion" : "Innsmouth Horror",
							"gates" : [ "Esoteric Order of Dagon" ],
							"clues" : [ "Devil Reef" ],
							"text" : "Mythos Ability: The first player finds $2 lying on the ground.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							}
						},
						{
							"name" : "Charity Auction!",
							"type" : "Headline",
							"expansion" : "The Black Goat of the Woods",
							"gates" : [ "Hibb's Roadhouse" ],
							"clues" : [ "Woods" ],
							"text" : "Mythos Ability: Deal a number of cards from the top of the Common Item deck equal to the number of players. Each player may purchase one item at its listed cost plus $1. Discard any items not purchased.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Charity Case!",
							"type" : "Headline",
							"expansion" : "Innsmouth Horror",
							"special" : "Gate burst",
							"gates" : [ "Esoteric Order of Dagon" ],
							"clues" : [ "Devil Reef" ],
							"text" : "Mythos Ability: The investigator with the lowest Sanity (the first player breaks ties) may move to Arkham Asylum and be delayed to restore his Sanity to its maximum.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Checkered Cab Trials Begin!",
							"type" : "Headline",
							"expansion" : "The Black Goat of the Woods",
							"gates" : [ "The Witch House" ],
							"clues" : [ "Woods" ],
							"text" : "Mythos Ability: All investigators in Arkham may move directly to any street location in Arkham as their entire move (ignore all monsters between their current location and their destination).",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							},
							"pass" : "Flavor Text: Arkham experiments with mass transit."
						},
						{
							"name" : "Church Boycotts Exhibit",
							"type" : "Environment (Mystic)",
							"expansion" : "Curse of the Dark Pharaoh",
							"gates" : [ "Historical Society" ],
							"clues" : [ "Hibb's Roadhouse" ],
							"text" : "Mythos Ability: Lore checks in Arkham are made at a -2 penalty. Will checks in Arkham are made at a +2 bonus.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							},
							"pass" : "Flavor Text: Father Michael organizes his congregation against the \"Legacy of the Pharaohs\" museum exhibit, calling the displays \"ghastly and an affront against the Lord.\""
						},
						{
							"name" : "Church Group Reclaims Southside!",
							"type" : "Headline",
							"gates" : [ "Black Cave" ],
							"clues" : [ "Hibb's Roadhouse" ],
							"text" : "Mythos Ability: All monsters in the Southside streets or locations are returned to the cup.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Citizens Urged to Lock Doors",
							"type" : "Headline",
							"expansion" : "The Lurker at the Threshold",
							"special" : "Gate burst",
							"gates" : [ "Graveyard" ],
							"clues" : [ "Unvisited Isle" ],
							"text" : "Mythos Ability: Monsters appear in the Outskirts until the Outskirts limit is reached. If the Outskirts already contains the maximum number of monsters, return all of the monsters in the Outskirts to the monster cup and increase the terror level by 1.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							}
						},
						{
							"name" : "City Gripped by Blackouts!",
							"type" : "Headline",
							"gates" : [ "Unvisited Isle" ],
							"clues" : [ "Science Building" ],
							"text" : "Mythos Ability: The General Store, Curiositie Shoppe, and Ye Olde Magick Shoppe are closed until the end of next turn. Leave this card in play until then to indicate this.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Closed Mouths",
							"type" : "Environment (Urban)",
							"expansion" : "Innsmouth Horror",
							"gates" : [ "Y'ha-nthlei" ],
							"clues" : [],
							"text" : "Mythos Ability: While this card is in play, Clue tokens do not appear on the board when mythos cards are resolved.",
							"movement" : {
								"white" : [],
								"black" : []
							}
						},
						{
							"name" : "Clothing Drive",
							"type" : "Environment (Urban)",
							"expansion" : "Curse of the Dark Pharaoh",
							"gates" : [ "Graveyard" ],
							"clues" : [ "Black Cave" ],
							"text" : "Mythos Ability: While this card is in play, investigators without Exhibit Items must evade or fight a Mummy in each street location they enter. These Mummies have the same stats as Zombies except with a toughness of 2, and cannot be taken as trophies.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							},
							"pass" : "Flavor Text: Father Michael sends out a call for clothing. \"Have you seen our streets? The homeless have been reduced to wearing rags and dirty strips!\" In fact, the beings he has seen on the street are mummies, come to life and escaped from the visiting museum exhibit!"
						},
						{
							"name" : "Compass Needles Point South!",
							"type" : "Headline",
							"expansion" : "The Lurker at the Threshold",
							"gates" : [ "Graveyard" ],
							"clues" : [ "Unvisited Isle" ],
							"text" : "Mythos Ability: The first player chooses two investigators. Those investigators immediately exchange locations, ignoring all monsters and movement restrictions.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Construction Crew Conundrum!",
							"type" : "Headline",
							"expansion" : "The Black Goat of the Woods",
							"gates" : [ "Graveyard" ],
							"clues" : [ "Black Cave" ],
							"text" : "Mythos Ability: A monster appears at the Downtown streets and the Miskatonic U. streets.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							},
							"pass" : "Flavor Text: While digging, a work crew uncovers ancient artifacts ... and ancient monsters."
						},
						{
							"name" : "Contagion Kills Life in Blasted Heath!",
							"type" : "Headline",
							"expansion" : "Dunwich Horror",
							"special" : "Gate burst",
							"gates" : [ "The Witch House" ],
							"clues" : [ "Black Cave" ],
							"text" : "Mythos Ability: All monsters in the Blasted Heath streets or locations are returned to the cup.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Cops Sweep Kingsport!",
							"type" : "Headline",
							"expansion" : "Kingsport Horror",
							"special" : "Gate burst",
							"gates" : [ "Black Cave" ],
							"clues" : [ "Police Station" ],
							"text" : "Mythos Ability: All monsters in Kingsport street areas or locations are returned to the monster cup.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Corpse Garden",
							"type" : "Environment (Urban)",
							"expansion" : "Kingsport Horror",
							"special" : "Gate burst",
							"gates" : [ "Unvisited Isle" ],
							"clues" : [ "7th House on the Left" ],
							"text" : "Mythos Ability: Investigators who end their movement in the Central Hill streets gain 2 Clue tokens, then lose 1 Sanity and 1 Stamina.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Corpses Preserved",
							"type" : "Headline",
							"expansion" : "Curse of the Dark Pharaoh",
							"gates" : [ "Hibb's Roadhouse" ],
							"clues" : [ "Independence Square" ],
							"text" : "Mythos Ability: Monster trophies come to life! Each investigator in Arkham must randomly choose one of his collected monster trophies. That monster surprises him. If the investigator defeats the monster, he may draw cards from the Exhibit Item deck equal to its toughness, take one, and discard the rest. Only monsters that are defeated may be taken as trophies again; if the investigator flees or the monster defeats him, the monster is returned to the box.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							},
							"pass" : ""
						},
						{
							"name" : "Cosmic Upheaval!",
							"type" : "Headline",
							"expansion" : "Innsmouth Horror",
							"gates" : [ "Esoteric Order of Dagon" ],
							"clues" : [ "Devil Reef" ],
							"text" : "Mythos Ability: Investigators that are currently in Other Worlds must immediately pass a Luck (-1) check or be lost in time and space.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Couriers in Town!",
							"type" : "Headline",
							"expansion" : "Dunwich Horror",
							"gates" : [ "Wizard's Hill" ],
							"clues" : [ "Gardner's Place" ],
							"text" : "Mythos Ability: Until the end of next turn, investigators may trade Items with one another without being in the same space. Leave this card in place to signify this. Items may only be traded in this manner during Upkeep.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Cover-up",
							"type" : "Rumor",
							"expansion" : "Kingsport Horror",
							"special" : "Two doom tokens",
							"gates" : [],
							"clues" : [],
							"text" : "Mythos Ability: When this card enters play, place 3 Clue tokens per player on it. Any player may discard monster trophies while in the Downtown streets during the Arkham Encounters Phase to remove 1 Clue token from this card for each toughness worth of monsters discarded.",
							"movement" : {
								"white" : [ "Crescent", "Diamond", "Hexagon",
										"Square" ],
								"black" : [ "Circle", "Plus", "Slash", "Star",
										"Triangle" ]
							},
							"pass" : "Ongoing Effect: Place 1 Clue token per player on this card at the end of every Mythos Phase (beginning the turn after it entered play).",
							"fail" : "Pass: If there are no Clue tokens on this card, return it to the box. Each investigator is Blessed, and gains a Retainer."
						},
						{
							"name" : "Curfew Enforced",
							"type" : "Environment (Urban)",
							"gates" : [ "Unvisited Isle" ],
							"clues" : [ "Science Building" ],
							"text" : "Mythos Ability: Any investigator who ends his movement in the streets must pass a Will (+0) check or be arrested and taken to the Police Station.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							},
							"pass" : ""
						},
						{
							"name" : "Cursed Relics",
							"type" : "Rumor",
							"expansion" : "Curse of the Dark Pharaoh",
							"gates" : [ "Unvisited Isle" ],
							"clues" : [],
							"text" : "Mythos Ability: Place 5 doom tokens on this card when it comes into play.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							},
							"pass" : "Ongoing Effect: At the end of every Mythos Phase after the first, move 1 doom token from this card to the terror track and increase the terror level by 1. Any player may exhaust a ready Exhibit Item or discard a Unique Item to negate both effects.",
							"fail" : "Pass: If there are no doom tokens on the terror track after the last doom token is removed from this card, discard this card. Each player draws 1 Spell."
						},
						{
							"name" : "Dark Conjunction",
							"type" : "Environment (Mystic)",
							"expansion" : "Innsmouth Horror",
							"gates" : [ "Esoteric Order of Dagon" ],
							"clues" : [ "Devil Reef" ],
							"text" : "Mythos Ability: While this card is in play, all monsters gain Overwhelming 1. Any monster that already has Overwhelming has its Overwhelming rating increased by 1.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Dark Day!",
							"type" : "Headline",
							"expansion" : "Innsmouth Horror",
							"special" : "Gate burst",
							"gates" : [ "Devil Reef" ],
							"clues" : [ "Esoteric Order of Dagon" ],
							"text" : "Mythos Ability: Investigators cannot spend Clue tokens to add to skill checks until the end of next turn. Leave this card in play until then as a reminder.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Dark Shapes at Dusk!",
							"type" : "Headline",
							"expansion" : "Kingsport Horror",
							"special" : "Gate burst",
							"gates" : [ "The Unnamable" ],
							"clues" : [ "Woods" ],
							"text" : "Mythos Ability: All Ghasts, Leng Spiders, and Moon-beasts are returned to the cup. If at least one monster returns to the cup, raise the terror level by 1.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							}
						},
						{
							"name" : "Dark Skies",
							"type" : "Environment (Weather)",
							"expansion" : "Dunwich Horror",
							"gates" : [ "Whateley Farm" ],
							"clues" : [ "Devil's Hopyard" ],
							"text" : "Mythos Ability: Fight checks in Arkham are made at a -1 penalty. Sneak checks in Arkham are made at a +1 bonus. Stalkers move like normal monsters.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Darke's Carnival Arrives",
							"type" : "Environment (Urban)",
							"gates" : [ "The Unnamable" ],
							"clues" : [ "Woods" ],
							"text" : "Mythos Ability: Investigators who end their movement in the Northside streets gain 1 Clue token from the sinister wonders they witness, but must pass a Will (-1) check or lose 1 Sanity.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Deathly Still",
							"type" : "Environment (Weather)",
							"expansion" : "Dunwich Horror",
							"gates" : [ "Gardner's Place" ],
							"clues" : [ "Cold Spring Glen" ],
							"text" : "Mythos Ability: Will checks in Arkham are made at a -1 penalty. Fight checks in Arkham are made at a +1 bonus. Monsters that move normally are stalkers.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							}
						},
						{
							"name" : "Dire Portents Abound",
							"type" : "Environment (Mystic)",
							"expansion" : "The Lurker at the Threshold",
							"gates" : [ "Woods" ],
							"clues" : [ "Historical Society" ],
							"text" : "Mythos Ability: Investigators receive -1 to checks to close Gates.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Disturbing the Dead",
							"type" : "Rumor",
							"gates" : [ "Black Cave" ],
							"clues" : [],
							"text" : "Mythos Ability: Ongoing Effect: Roll a die at the end of every Mythos Phase while this card is in play (beginning the turn after it entered play). On a 1 or 2, increase the terror level by 1.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							},
							"pass" : "Pass: If a single player discards 2 gate trophies during the Arkham Encounter Phase while in the Rivertown streets, return this card to the box. Each player draws 1 Spell.",
							"fail" : "Fail: If the terror level reaches 10, return this card to the box. Every investigator is Cursed."
						},
						{
							"name" : "Double the Trouble",
							"type" : "Headline",
							"expansion" : "The Lurker at the Threshold",
							"gates" : [ "Unvisited Isle", "The Witch House" ],
							"clues" : [ "Black Cave" ],
							"text" : "Mythos Ability: Two Gates open this turn, but no doom tokens are added to the doom track.",
							"movement" : {
								"white" : [ "Crescent", "Diamond", "Hexagon",
										"Square" ],
								"black" : [ "Circle", "Plus", "Slash", "Star",
										"Triangle" ]
							}
						},
						{
							"name" : "Dreams of a Sunken City",
							"type" : "Environment (Mystic)",
							"gates" : [ "Independence Square" ],
							"clues" : [ "The Unnamable" ],
							"text" : "Mythos Ability: Investigators cannot gain Sanity except by receiving psychiatric care at Arkham Asylum (or from Carolyn Fern).",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Dunwich Villagers Drive Out Undesirables!",
							"type" : "Headline",
							"expansion" : "Dunwich Horror",
							"special" : "Gate burst",
							"gates" : [ "Independence Square" ],
							"clues" : [ "The Unnamable" ],
							"text" : "Mythos Ability: All monsters in the Village Commons streets or locations are returned to the cup.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Early Frost",
							"type" : "Environment (Weather)",
							"expansion" : "The Lurker at the Threshold",
							"gates" : [ "Independence Square" ],
							"clues" : [ "The Unnamable" ],
							"text" : "Mythos Ability: As they slip and fall on the ice, each investigator loses 1 Stamina for each movement point over 3 he spends each turn.\nReading Tomes does not count towards this total.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Eccentric Opens Doors",
							"type" : "Environment (Urban)",
							"expansion" : "The Lurker at the Threshold",
							"gates" : [ "Unvisited Isle" ],
							"clues" : [ "Science Building" ],
							"text" : "Mythos Ability: Investigators who end their movement in the French Hill streets may discard 1 Gate trophy to draw 1 Unique Item",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Eerie Coincidences",
							"type" : "Headline",
							"expansion" : "The Lurker at the Threshold",
							"gates" : [ "Independence Square",
									"The Witch House" ],
							"clues" : [ "The Unnamable" ],
							"text" : "Mythos Ability: Two Gates open this turn, but no doom tokens are added to the doom track.",
							"movement" : {
								"white" : [ "Circle", "Plus", "Slash", "Star",
										"Triangle" ],
								"black" : [ "Crescent", "Diamond", "Hexagon",
										"Square" ]
							}
						},
						{
							"name" : "Egyptian Exhibit Visits Miskatonic U.",
							"type" : "Environment (Urban)",
							"gates" : [ "The Witch House" ],
							"clues" : [ "Black Cave" ],
							"text" : "Mythos Ability: Any investigator who ends his movement in the Miskatonic U. streets may pass a Lore (-1) check to gain 1 Clue token by reading the strange hieroglyphics on the artifacts in the exhibit.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Endlessly Breeding",
							"type" : "Rumor",
							"expansion" : "The Black Goat of the Woods",
							"special" : "Two doom tokens",
							"gates" : [],
							"clues" : [],
							"text" : "Mythos Ability: Ongoing Effect: At the end of each Mythos phase, draw a second Mythos card and ignore everything on it except for its monster movement pattern. Each time an investigator is reduced to 0 Stamina or 0 Sanity, place a Clue token on this card.",
							"movement" : {
								"white" : [ "Crescent", "Diamond", "Hexagon",
										"Square" ],
								"black" : [ "Circle", "Plus", "Slash", "Star",
										"Triangle" ]
							},
							"pass" : "Pass: If a single investigator discards $10 while at the Riverside Docks, return this card to the box. Starting with the first player, each player chooses a monster in play and takes it as a monster trophy (ignoring Endless).",
							"fail" : "Fail: If there are ever 3 Clue tokens on this card, return it to the box. A monster surge occurs, then add a doom token to the doom track for each Hex monster in play."
						},
						{
							"name" : "Escape from Arkham Asylum!",
							"type" : "Headline",
							"expansion" : "Curse of the Dark Pharaoh",
							"gates" : [ "Woods" ],
							"clues" : [ "Independence Square" ],
							"text" : "Mythos Ability: Collect up to 3 Maniacs, drawing them first from the monster cup, then from the Outskirts, then from those claimed as trophies. Place them all in the Downtown streets.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							},
							"pass" : "Investigators who defeat all 3 Maniacs before the end of next turn may draw 1 Exhibit Item. Leave this card in play until then to indicate this.",
							"fail" : "Flavor Text: The inmates at the Asylum all begin chanting in an ancient language, and overpower the orderlies! \"Nephren-Ka! Nephren-Ka!\" The streets flood with the insane."
						},
						{
							"name" : "Estate Sale",
							"type" : "Environment (Urban)",
							"gates" : [ "The Witch House" ],
							"clues" : [ "Black Cave" ],
							"text" : "Mythos Ability: Investigators who end their movement in the Uptown streets may draw 2 Unique Items and purchase one, none, or both of them at list price, discarding any that are not purchased.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Evidence Destroyed!",
							"type" : "Headline",
							"expansion" : "Innsmouth Horror",
							"gates" : [ "Y'ha-nthlei" ],
							"clues" : [],
							"text" : "Mythos Ability: A massive conspiracy sets back the investigation. Discard all Clue tokens from the board.",
							"movement" : {
								"white" : [],
								"black" : []
							}
						},
						{
							"name" : "Family Found Butchered!",
							"type" : "Headline",
							"gates" : [ "Graveyard" ],
							"clues" : [ "Unvisited Isle" ],
							"text" : "Mythos Ability: The terror level increases by 1 in light of this tragic news.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Feds Raid Arkham!",
							"type" : "Headline",
							"gates" : [ "Black Cave" ],
							"clues" : [ "Hibb's Roadhouse" ],
							"text" : "Mythos Ability: All monsters in the streets are returned to the cup.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							},
							"pass" : ""
						},
						{
							"name" : "Fire at the Mill!",
							"type" : "Headline",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates, Gate burst",
							"gates" : [ "Gardners' Place", "The Witch House" ],
							"clues" : [ "Congregational Hospital" ],
							"text" : "Mythos Ability: Until the end of the next turn, any time an investigator draws 1 or more Common Items for any reason, he draws 1 fewer cards (to a minimum of 0). Leave this card in play to indicate this.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Fires in the Night",
							"type" : "Environment (Mystic)",
							"expansion" : "The Black Goat of the Woods",
							"special" : "Gate burst",
							"gates" : [ "Independence Square" ],
							"clues" : [ "Hibb's Roadhouse" ],
							"text" : "Mythos Ability: Monsters at the Woods do not move. Monsters in the Uptown streets who move move to the woods.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Footprints on Shore!",
							"type" : "Headline",
							"expansion" : "Innsmouth Horror",
							"gates" : [ "Devil Reef" ],
							"clues" : [ "Esoteric Order of Dagon" ],
							"text" : "Mythos Ability: It seems that 2 monsters have come ashore in the Innsmouth Shore streets.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Forgery!",
							"type" : "Headline",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates, Gate burst",
							"gates" : [ "Wizard's Hill", "Woods" ],
							"clues" : [ "607 Water St." ],
							"text" : "Mythos Ability: Until the end of next turn, any time an investigator draws 1 or more Unique Items for any reason, he draws 1 fewer cards (to a minimum of 0). Leave this card in play to indicate this.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Formal Dress Gala Announced!",
							"type" : "Headline",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates",
							"gates" : [ "Devil Reef", "Woods" ],
							"clues" : [ "Esoteric Order of Dagon",
									"Historical Society" ],
							"text" : "Mythos Ability: Each investigator may choose to immediately spend $5 to gain 2 Sanity and 2 Clue tokens.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Fourth of July Parade!",
							"type" : "Headline",
							"gates" : [ "The Witch House" ],
							"clues" : [ "Black Cave" ],
							"text" : "Mythos Ability: Investigators cannot move into or out of the Merchant Dist. streets until the end of next turn. Leave this card in play until then to indicate this.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Free Clinic!",
							"type" : "Headline",
							"expansion" : "Innsmouth Horror",
							"special" : "Gate burst",
							"gates" : [ "Devil Reef" ],
							"clues" : [ "Esoteric Order of Dagon" ],
							"text" : "Mythos Ability: The investigator with the lowest Stamina (the first player breaks ties) may move to St. Mary's Hospital and be delayed to restore his Stamina to its maximum.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Full Moon",
							"type" : "Environment (Weather)",
							"expansion" : "The Black Goat of the Woods",
							"special" : "Gate burst",
							"gates" : [ "Graveyard" ],
							"clues" : [ "Independence Square" ],
							"text" : "Mythos Ability: All monsters have their Sanity damage increased by 1.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Fund Drive for the Arts",
							"type" : "Headline",
							"expansion" : "The King in Yellow",
							"gates" : [ "The Unnamable" ],
							"clues" : [ "Woods" ],
							"text" : "Mythos Ability: Investigators in Arkham may immediately spend up to $1 for every Ally left in the Ally deck. For every $2 an investigator spends, he may draw one card from the Unique Item deck. He then takes one card from among those he has drawn and shuffles the rest back into the deck.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							},
							"pass" : "Flavor Text: The performance of the controversial \"The King in Yellow\" have increased local enthusiasm for the arts, and the Historical Society is taking advantage of it with a fundraising auction."
						},
						{
							"name" : "Funnel Clouds",
							"type" : "Environment (Weather)",
							"expansion" : "The Black Goat of the Woods",
							"gates" : [ "Historical Society" ],
							"clues" : [ "The Witch House" ],
							"text" : "Mythos Ability: Any investigator who ends his movement in the streets must pass a Luck (+1) check or be devoured.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							},
							"pass" : "All flying monsters are returned to the monster cup."
						},
						{
							"name" : "Gangs Clean Up Easttown!",
							"type" : "Headline",
							"gates" : [ "The Witch House" ],
							"clues" : [ "Black Cave" ],
							"text" : "Mythos Ability: All monsters in the Easttown streets or locations are returned to the cup.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Gathering Storm!",
							"type" : "Headline",
							"expansion" : "Innsmouth Horror",
							"gates" : [ "Devil Reef" ],
							"clues" : [ "Esoteric Order of Dagon" ],
							"text" : "Mythos Ability: The situation in Innsmouth continues to worsen. Add one uprising token to the Deep Ones Rising track.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Ghost Ship Docks by Itself!",
							"type" : "Headline",
							"gates" : [ "The Unnamable" ],
							"clues" : [ "Woods" ],
							"text" : "Mythos Ability: An ancient ghost ship arrives in Arkham, releasing 2 monsters into the Merchant Dist. streets.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Goat-like Creature Spotted in Woods!",
							"type" : "Headline",
							"gates" : [ "Independence Square" ],
							"clues" : [ "The Unnamable" ],
							"text" : "Mythos Ability: All Dark Young in Arkham are returned to the cup. If at least one monster returns to the cup, raise the terror level by 1.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Good Traveling Conditions",
							"type" : "Environment (Weather)",
							"expansion" : "Dunwich Horror",
							"gates" : [ "Gardner's Place" ],
							"clues" : [ "Cold Spring Glen" ],
							"text" : "Mythos Ability: Fight checks in Arkham are made at a -1 penalty. Speed checks in Arkham are made at a +1 bonus, and investigators receive 1 extra movement point. Monsters that move normally are fast.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Good Work Undone",
							"type" : "Rumor",
							"gates" : [ "Unvisited Isle" ],
							"clues" : [],
							"text" : "Mythos Ability: When this card enters play, place 6 Clue tokens on it. Any player may spend Clue tokens during the Arkham Encounter Phase while in the Easttown streets to discard Clue tokens from this card on a 1-for-1 basis.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							},
							"pass" : "Ongoing Effect: Roll two dice at the end of every Mythos Phase (beginning the turn after it entered play). For every 1 or 2 rolled, place one Clue token on this card.",
							"fail" : "Pass: If there are no Clue tokens on this card, return it to the box. Each player draws one unique item."
						},
						{
							"name" : "Gossip Runs Wild!",
							"type" : "Headline",
							"expansion" : "Dunwich Horror",
							"gates" : [ "Wizard's Hill" ],
							"clues" : [ "Gardner's Place" ],
							"text" : "Mythos Ability: If the Dunwich Horror is in play, increase the terror level by 2. Investigators can trade Clue tokens like other Items until the end of next turn. Leave this card in play until then to show this.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Graverobbers Strike!",
							"type" : "Headline",
							"expansion" : "Kingsport Horror",
							"gates" : [ "Historical Society" ],
							"clues" : [ "Congregational Hospital" ],
							"text" : "Mythos Ability: Unfortunately for them, they release 2 monsters into the Central Hill streets.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Gypsy Caravan",
							"type" : "Environment (Urban)",
							"expansion" : "The Black Goat of the Woods",
							"gates" : [ "The Unnamable" ],
							"clues" : [ "Black Cave" ],
							"text" : "Mythos Ability: Investigators who end their movement in the Southside Streets may roll a die. On a success, they gain $2. On a failure, they lose $1.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Hallelujah!",
							"type" : "Environment (Mystic)",
							"expansion" : "Kingsport Horror",
							"gates" : [ "Graveyard" ],
							"clues" : [ "Library" ],
							"text" : "Mythos Ability: The first investigator who ends his movement in South Church is Blessed, then discards this card from play.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Happy Days are Here Again",
							"type" : "Environment (Urban)",
							"gates" : [ "Woods" ],
							"clues" : [ "Historical Society" ],
							"text" : "Mythos Ability: Due to the renewed prosperity that has come to Arkham, the terror level cannot increase.",
							"movement" : {
								"white" : [ "Diamond", "Square", "Triangle" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Heat Wave",
							"type" : "Environment (Weather)",
							"gates" : [ "Woods" ],
							"clues" : [ "Independence Square" ],
							"text" : "Mythos Ability: Fight checks in Arkham are made at a -1 penalty. Lore checks in Arkham are made at a +1 bonus. Fire Vampires have their toughness increased by 1.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Hellene Sighted!",
							"type" : "Headline",
							"expansion" : "Kingsport Horror",
							"gates" : [ "Hibb's Roadhouse" ],
							"clues" : [ "St. Erasmus's Home" ],
							"text" : "Mythos Ability: The ancient ship briefly docks, releasing 2 monsters into the Harborside streets.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Help Wanted",
							"type" : "Environment (Urban)",
							"expansion" : "Dunwich Horror",
							"special" : "Gate burst",
							"gates" : [ "Wizard's Hill" ],
							"clues" : [ "Gardner's Place" ],
							"text" : "Mythos Ability: The first investigator without a Retainer who ends his movement at the Newspaper gains a Retainer, then discards this card from play.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "High Tides",
							"type" : "Headline",
							"expansion" : "The King in Yellow",
							"gates" : [ "Woods" ],
							"clues" : [ "Independence Square" ],
							"text" : "Mythos Ability: Investigators in Rivertown, Easttown, and Merchant District streets or locations must pass a Fight (-1) Check or be delayed.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							},
							"pass" : "Flavor Text: The tides seem to be defying the tidal charts, causing elevated water levels far upriver."
						},
						{
							"name" : "Horns of the Black Goat",
							"type" : "Environment (Mystic)",
							"expansion" : "The Black Goat of the Woods",
							"special" : "Gate burst",
							"gates" : [ "Unvisited Isle" ],
							"clues" : [ "The Unnamable" ],
							"text" : "Mythos Ability: Dark Young have their toughness increased by 1.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Horrifying Sight!",
							"type" : "Headline",
							"expansion" : "Dunwich Horror",
							"gates" : [ "Wizard's Hill" ],
							"clues" : [ "Gardner's Place" ],
							"text" : "Mythos Ability: The first player must choose one investigator (even himself). That investigator loses 3 Sanity.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Horror at Groundbreaking!",
							"type" : "Headline",
							"gates" : [ "Historical Society" ],
							"clues" : [ "Silver Twilight Lodge" ],
							"text" : "Mythos Ability: An ancient stone is disturbed by the construction, releasing 2 monsters into the Miskatonic U. streets.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Hospital Patients Disappear!",
							"type" : "Headline",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates",
							"gates" : [ "Wizard's Hill", "The Witch House" ],
							"clues" : [ "Gardners' Place", "Black Cave" ],
							"text" : "Mythos Ability: All investigators who have an Injury card (from the Dunwich Horror expansion) or whose Stamina is currently 2 or less move immediately to the first area of Another Dimension.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Icy Conditions",
							"type" : "Environment (Weather)",
							"gates" : [ "Historical Society" ],
							"clues" : [ "Silver Twilight Lodge" ],
							"text" : "Mythos Ability: Investigators receive 1 less movement point during the Movement Phase. Fast Monsters move like normal monsters.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Ill Wind Grips Arkham!",
							"type" : "Headline",
							"gates" : [ "Graveyard" ],
							"clues" : [ "Unvisited Isle" ],
							"text" : "Mythos Ability: The first player must pass a Luck (-1) check or be Cursed",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							},
							"pass" : ""
						},
						{
							"name" : "Impassable Streets",
							"type" : "Environment (Urban)",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates",
							"gates" : [ "Esoteric Order of Dagon",
									"Unvisited Isle" ],
							"clues" : [ "Devil Reef", "Science Building" ],
							"text" : "Mythos Ability: An investigator may not move to a street area if there is a black movement arrow leading to it from his present street area. This does not effect moving from a location to a street area or from a street area to a location.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Infestation of Rats",
							"type" : "Environment (Urban)",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates",
							"gates" : [ "Gardners' Place", "The Unnamable" ],
							"clues" : [ "Cold Spring Glen", "Woods" ],
							"text" : "Mythos Ability: Each investigator in Ma's Boarding House or Velma's Diner at the end of the Mythos Phase, as well as each investigator in First National Grocery, Gilman House Hotel, or Innsmouth Jail on the Innsmouth Horror expansion game board at the end of the Mythos Phase, loses 1 Sanity.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Innsmouth Invasion!",
							"type" : "Headline",
							"expansion" : "Innsmouth Horror",
							"gates" : [ "Esoteric Order of Dagon" ],
							"clues" : [ "Devil Reef" ],
							"text" : "Mythos Ability: The city of Innsmouth is suddenly crawling with monsters. A monster appears in the Church Green streets, the Innsmouth Shore streets, the Factory District streets, Sawbone Alley, and Devil Reef.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Innsmouth is Restless",
							"type" : "Environment (Urban)",
							"expansion" : "Innsmouth Horror",
							"gates" : [ "Devil Reef" ],
							"clues" : [ "Esoteric Order of Dagon" ],
							"text" : "Mythos Ability: While this card is in play, investigators who end their movement in Innsmouth receive a -1 penalty to their Evade check to avoid being arrested once martial law is declared in Innsmouth.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							}
						},
						{
							"name" : "Innsmouth Sleeps",
							"type" : "Environment (Urban)",
							"expansion" : "Innsmouth Horror",
							"gates" : [ "Marsh Refinery" ],
							"clues" : [ "Y'ha-nthlei" ],
							"text" : "Mythos Ability: While this card is in play, investigators who end their movement in Innsmouth do not need to make the usual Evade check to avoid being arrested once martial law is declared in Innsmouth.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Intermission",
							"type" : "Headline",
							"expansion" : "The King in Yellow",
							"special" : "Two terror level increases",
							"gates" : [ "-None- (page does not exist)" ],
							"clues" : [],
							"text" : "Mythos Ability: The town of Arkham collectively holds its breath as the terrible play \"The King in Yellow\" builds to a crescendo, preparing to reveal its darkest horrors.\nBut for the moment, nothing happens.  No gates open, but the terror level is increased by 2.",
							"movement" : {
								"white" : [],
								"black" : []
							}
						},
						{
							"name" : "Jail Break!",
							"type" : "Headline",
							"expansion" : "Innsmouth Horror",
							"gates" : [ "Marsh Refinery" ],
							"clues" : [ "Y'ha-nthlei" ],
							"text" : "Mythos Ability: However, it appears that whatever was being held in the jail wasn't quite human, so 2 monsters are released into the Church Green streets.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "King of Cards Cancels Show",
							"type" : "Headline",
							"expansion" : "Curse of the Dark Pharaoh",
							"gates" : [ "The Witch House" ],
							"clues" : [ "Unvisited Isle" ],
							"text" : "Mythos Ability: All Witches and Warlocks in Arkham are returned to the cup. If any investigator has Eric Weiss as an Ally, that investigator gains those monsters as trophies.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							},
							"pass" : "Flavor Text: Erich Weiss, a famous visiting escape artist and master of illusion, was scheduled to put on a show. However, when he was told that the \"Legacy of the Pharaohs\" museum exhibit was in town, he paled visibly and canceled the performance. \"There is a thing I must do\" was his only comment."
						},
						{
							"name" : "Kingsport Mists",
							"type" : "Environment (Weather)",
							"expansion" : "Kingsport Horror",
							"special" : "Gate burst",
							"gates" : [ "Independence Square" ],
							"clues" : [ "The Unnamable" ],
							"text" : "Mythos Ability: Sneak checks in Arkham are made at a +1 bonus. The Causeway, the Wireless Station, and the Strange High House in the Mists are closed while this card remains in play.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Lightning Storm",
							"type" : "Environment (Weather)",
							"expansion" : "Innsmouth Horror",
							"gates" : [ "Marsh Refinery" ],
							"clues" : [ "Y'ha-nthlei" ],
							"text" : "Mythos Ability: At the start of each Upkeep Phase while this card is in play, roll a die. On a 1 or 2, the first player must choose an investigator in a street area (if there are any). That investigator loses a die of Stamina and moves to St. Mary's Hospital.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Lightning Strikes Twice!",
							"type" : "Headline",
							"expansion" : "The Black Goat of the Woods",
							"gates" : [ "Unvisited Isle" ],
							"clues" : [ "The Witch House" ],
							"text" : "Mythos Ability: Two similar rocks are shattered by lightning strikes in different parts of Arkham, each releasing a monster. A monster appears at the French Hill streets and the Uptown streets.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Local Heiress Missing!",
							"type" : "Headline",
							"expansion" : "Kingsport Horror",
							"special" : "Gate burst",
							"gates" : [ "Graveyard" ],
							"clues" : [ "Unvisited Isle" ],
							"text" : "Mythos Ability: If any player has Asenath Waite as an Ally, she is returned to the box and a doom token is added to the Ancient One's doom track.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Lodge Member Held for Questioning!",
							"type" : "Headline",
							"gates" : [ "Black Cave" ],
							"clues" : [ "Hibb's Roadhouse" ],
							"text" : "Mythos Ability: A Silver Lodge ritual lets 2 monsters loose in the French Hill streets.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Lodge Members Watch the Night!",
							"type" : "Headline",
							"gates" : [ "Unvisited Isle" ],
							"clues" : [ "Science Building" ],
							"text" : "Mythos Ability: All monsters in the French Hill streets or locations are returned to the cup.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Lynch Mob!",
							"type" : "Headline",
							"expansion" : "Dunwich Horror",
							"gates" : [ "Wizard's Hill" ],
							"clues" : [ "Gardner's Place" ],
							"text" : "Mythos Ability: One Ally is randomly drawn from the Ally deck and returned to the box.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Mad Bomber",
							"type" : "Rumor",
							"expansion" : "Dunwich Horror",
							"gates" : [ "Gardner's Place" ],
							"clues" : [],
							"text" : "Mythos Ability: When this card enters play, place $4 per player on it. Any player may pay money while in the Merchant District streets during the Arkham Encounters Phase to remove money from this card on a 1-for-1 basis.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							},
							"pass" : "Ongoing Effect: Place $1 per player on this card at the end of every Mythos Phase (beginning the turn after it entered play).",
							"fail" : "Pass: If there is no money on this card, return it to the box. Each player gains 2 Clue tokens."
						},
						{
							"name" : "Manhunt in Arkham!",
							"type" : "Headline",
							"gates" : [ "Woods" ],
							"clues" : [ "Independence Square" ],
							"text" : "Mythos Ability: All monsters in locations are returned to the cup.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							}
						},
						{
							"name" : "Medical Supplies Contaminated",
							"type" : "Environment (Urban)",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates",
							"gates" : [ "Gardners' Place", "Graveyard" ],
							"clues" : [ "Cold Spring Glen", "Unvisited Isle" ],
							"text" : "Mythos Ability: When an investigator pays $2 to use the \"Medical Care\" ability at St. Mary's Hospital, he loses 1 Sanity. When an investigator pays $2 to use the \"Psychiatric Care\" ability at Arkham Asylum, he loses 1 Stamina.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Merchants March on Crime!",
							"type" : "Headline",
							"gates" : [ "Independence Square" ],
							"clues" : [ "The Unnamable" ],
							"text" : "Mythos Ability: All monsters in the Merchant Dist. streets or locations are returned to the cup.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Meteorite Spotted in Blasted Heath!",
							"type" : "Headline",
							"expansion" : "Dunwich Horror",
							"special" : "Gate burst",
							"gates" : [ "Unvisited Isle" ],
							"clues" : [ "Science Building" ],
							"text" : "Mythos Ability: A crashed meteorite releases 2 monsters into the Blasted Heath streets.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Mirages of Lakes",
							"type" : "Environment (Weather)",
							"expansion" : "The King in Yellow",
							"gates" : [ "Graveyard" ],
							"clues" : [ "Unvisited Isle" ],
							"text" : "Mythos Ability: When investigators move from one street to another, they may only move in the direction of the black arrows. Locations may be entered normally.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							},
							"pass" : "Flavor Text: It's called the \"Hali Effect.\" It is similar to seeing mirages in the desert, but it only occurs in urban environments. Entire cities claim to see vast lakes bordering their neighborhoods, where just the day before was dry land. Sometimes the mirage recedes as the viewer walks forward... sometimes it does not."
						},
						{
							"name" : "Miskatonic Arctic Expedition Returns!",
							"type" : "Headline",
							"gates" : [ "Hibb's Roadhouse" ],
							"clues" : [ "Independence Square" ],
							"text" : "Mythos Ability: Any Elder Things previously claimed as monster trophies by players return to life and are placed in the River Docks.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							},
							"pass" : ""
						},
						{
							"name" : "Miskatonic Launches New Research Ship!",
							"type" : "Headline",
							"expansion" : "Miskatonic Horror",
							"special" : "Two doom tokens",
							"gates" : [],
							"clues" : [],
							"text" : "Mythos Ability: Place 2 Clue tokens in the River Docks, Unvisited Isle, as well as all aquatic locations and all aquatic street areas on expansion game boards.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Miskatonic Scientists Research Anomalies!",
							"type" : "Headline",
							"expansion" : "Miskatonic Horror",
							"special" : "Two doom tokens",
							"gates" : [],
							"clues" : [],
							"text" : "Mythos Ability: Place 2 Clue tokens in the Science Building as well as all street areas and locations adjacent to a vortex.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Missing People Return!",
							"type" : "Headline",
							"gates" : [ "The Unnamable" ],
							"clues" : [ "Woods" ],
							"text" : "Mythos Ability: All investigators currently lost in time and space immediately return to Arkham, appearing in a street or location of their choice.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							}
						},
						{
							"name" : "Mistrust",
							"type" : "Rumor",
							"expansion" : "Kingsport Horror",
							"special" : "Two doom tokens",
							"gates" : [],
							"clues" : [],
							"text" : "Mythos Ability: When this card enters play, place 3 Clue tokens per player on it. Any player may discard Common or Unique Items while in the Southside streets during the Arkham Encounters Phase to remove 1 Clue token per Common or 2 per Unique Item discarded.",
							"movement" : {
								"white" : [ "Circle", "Plus", "Slash", "Star",
										"Triangle" ],
								"black" : [ "Crescent", "Diamond", "Hexagon",
										"Square" ]
							},
							"pass" : "Ongoing Effect: Place 1 Clue token per player on this card at the end of every Mythos Phase (beginning the turn after it entered play).",
							"fail" : "Pass: If there are no Clue tokens on this card, return it to the box. Each investigator gains an Ally."
						},
						{
							"name" : "Moon Creature Hoax",
							"type" : "Headline",
							"expansion" : "The Lurker at the Threshold",
							"special" : "Gate burst",
							"gates" : [ "Woods" ],
							"clues" : [ "Historical Society" ],
							"text" : "Mythos Ability: The first player draws a monster marker from the cup at random and places it in the Sky. Treat this monster as a flying monster until it moves to a street area. After that, the monster's movement is treated normally.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Mudslides",
							"type" : "Environment (Weather)",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates",
							"gates" : [ "Whateley Farm", "Science Building" ],
							"clues" : [ "7th House on the Left" ],
							"text" : "Mythos Ability: During the Mythos Phase, each player whose investigator is in a street area must roll a die. If the result is a 1, the investigator must move to the street area that is reached by following the white arrow from his current street area. If the white arrow leads to a vortex or an area with a gate, the investigator stays in his current street area instead.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Murder in the Museum",
							"type" : "Headline",
							"expansion" : "Curse of the Dark Pharaoh",
							"special" : "Two doom tokens",
							"gates" : [],
							"clues" : [],
							"text" : "Mythos Ability: Players in Arkham with gate trophies must make a Fight check or Lore check for each trophy they have, with a modifier equal to the modifier printed on the gate. If a check for a gate is failed, draw monsters from the cup until you draw a monster with a symbol that matches the one on the gate, and place that monster in the player's current location. If the check for a gate succeeds, the player may remove one monster with that gate's symbol from Arkham, the Outskirts, or the Sky.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							},
							"pass" : "Flavor Text: The victims of a ritual murder are found at the \"Legacy of the Pharaohs\" museum exhibit. The professors brought in from Miskatonic believe that it was an opening ritual."
						},
						{
							"name" : "Murderer at Large; Victims' Brains Missing",
							"type" : "Headline",
							"expansion" : "Curse of the Dark Pharaoh",
							"special" : "Two doom tokens",
							"gates" : [],
							"clues" : [ "Science Building" ],
							"text" : "Mythos Ability: The terror level increases by 1.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							},
							"pass" : "Flavor Text: Victims of a string of murders are left as desiccated corpses with their brains and internal organs removed."
						},
						{
							"name" : "Museum Artifacts Stolen",
							"type" : "Headline",
							"expansion" : "Curse of the Dark Pharaoh",
							"gates" : [ "Independence Square" ],
							"clues" : [ "Woods" ],
							"text" : "Mythos Ability: Investigators in Arkham may pay $5 in bribe fees to make a connection with the robbers. Those who do so may draw a number of Exhibit Items equal to their focus, choose one, and discard the rest.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Museum Haunted",
							"type" : "Headline",
							"expansion" : "Curse of the Dark Pharaoh",
							"gates" : [ "Science Building" ],
							"clues" : [ "Woods" ],
							"text" : "Mythos Ability: The ghosts of the pharaohs walk abroad! Collect up to 2 Ghosts, drawing them first from the monster cup, then from the Outskirts, then from those claimed as trophies. Place them in the Miskatonic U. streets. Investigators who destroy one of these Ghosts before the end of next turn may draw one Exhibit Item. Leave this card in play until then to indicate this. The terror level increases by 1.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Mysterious Crates Found Empty!",
							"type" : "Headline",
							"expansion" : "The Black Goat of the Woods",
							"gates" : [ "Woods" ],
							"clues" : [ "Independence Square" ],
							"text" : "Mythos Ability: But the monsters inside them have already escaped. A monster appears at the Riverside streets and the Northside streets.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Mysterious Lights Fade!",
							"type" : "Headline",
							"expansion" : "The Lurker at the Threshold",
							"special" : "Gate burst",
							"gates" : [ "Independence Square" ],
							"clues" : [ "The Unnamable" ],
							"text" : "Mythos Ability: The investigators may collectively spend 5 Clue tokens. If they do so, the first player may choose and close 1 open Gate in any Arkham location and reshuffle it into the stack of Gate markers (he does not gain a Gate trophy). The investigators may not do this if there is only 1 open Gate.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Neighborhood Sale",
							"type" : "Environment (Urban)",
							"expansion" : "Dunwich Horror",
							"special" : "Gate burst",
							"gates" : [ "Gardner's Place" ],
							"clues" : [ "Cold Spring Glen" ],
							"text" : "Mythos Ability: Investigators who end their movement in the Easttown streets may draw 2 Common Items and purchase one, none, or both of them at list price, discarding any that are not purchased.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							}
						},
						{
							"name" : "New Miskatonic U. Curriculum",
							"type" : "Environment (Urban)",
							"expansion" : "The King in Yellow",
							"gates" : [ "The Witch House" ],
							"clues" : [ "Black Cave" ],
							"text" : "Mythos Ability: If an investigator reads a Tome in the Library, he gains a +2 bonus to any Lore check made to do so.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							},
							"pass" : "Flavor Text: \"The King in Yellow\" has, amidst heavy controversy, been added to the library curriculum at the University. Its teaching has stirred up the students' interest in all written occult works."
						},
						{
							"name" : "New Moon",
							"type" : "Environment (Weather)",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates",
							"gates" : [ "Esoteric Order of Dagon", "Woods" ],
							"clues" : [ "Devil Reef", "Historical Society" ],
							"text" : "Mythos Ability: Investigators receive 1 less movement point (to a minimum of 0) during the Movement Phase. When an investigator is driven insane, he does not discard any of his Clue tokens.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Nightmare Pool",
							"type" : "Rumor",
							"expansion" : "Dunwich Horror",
							"gates" : [ "Wizard's Hill" ],
							"clues" : [],
							"text" : "Mythos Ability: When this card enters play, place 3 Sanity tokens per player on it. Any player may pay Sanity while in the Uptown streets during the Arkham Encounters Phase to remove Sanity tokens from this card on a one-for-one basis.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							},
							"pass" : "Ongoing Effect: Place 1 Sanity token per player on this card at the end of every Mythos Phase (beginning the turn after it entered play).",
							"fail" : "Pass: If there are no Sanity tokens on this card, return it to the box. Each player draws 1 Common Item."
						},
						{
							"name" : "No One Can Help You Now",
							"type" : "Environment (Mystic)",
							"gates" : [ "The Unnamable" ],
							"clues" : [ "Woods" ],
							"text" : "Mythos Ability: Gates cannot be sealed, although they can still be closed.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Noden's Favor",
							"type" : "Environment (Mystic)",
							"gates" : [ "The Witch House" ],
							"clues" : [ "Black Cave" ],
							"text" : "Mythos Ability: It costs 2 fewer Clue tokens to seal gates.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							}
						},
						{
							"name" : "Noted Author Dies",
							"type" : "Headline",
							"expansion" : "The Lurker at the Threshold",
							"gates" : [ "Historical Society" ],
							"clues" : [ "Silver Twilight Lodge" ],
							"text" : "Mythos Ability: All players must discard 1 Clue token.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Off Broadway",
							"type" : "Environment (Urban)",
							"expansion" : "The King in Yellow",
							"gates" : [ "Woods" ],
							"clues" : [ "Independence Square" ],
							"text" : "Mythos Ability: All purchases in Arkham cost $1 more than usual.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							},
							"pass" : "Flavor Text: The performances of the new play \"The King in Yellow\" are garnering rave reviews. Theater professors at Miskatonic University claim never to have heard of it, but nonetheless, the wealthy and influential from all around New England are flocking to see it. The shops have, of course, raised their prices to take advantage of this influx of money."
						},
						{
							"name" : "Old Building Collapses!",
							"type" : "Headline",
							"expansion" : "Innsmouth Horror",
							"gates" : [ "Esoteric Order of Dagon" ],
							"clues" : [ "Devil Reef" ],
							"text" : "Mythos Ability: Unfortunately, the building was containing 2 monsters, which have now been released into the Factory District streets.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Old Debts Come Due!",
							"type" : "Headline",
							"expansion" : "Dunwich Horror",
							"special" : "Gate burst",
							"gates" : [ "Black Cave" ],
							"clues" : [ "Hibb's Roadhouse" ],
							"text" : "Mythos Ability: Raise the terror level by 1. Any investigator who has previously made a deal with the Dark Man of Wizard's Hill is devoured. For every investigator devoured in this way, place 3 doom tokens on the doom track. All current debts to the Dark Man are now considered paid.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "One Thousand Young",
							"type" : "Rumor",
							"expansion" : "The Black Goat of the Woods",
							"special" : "Two doom tokens",
							"gates" : [],
							"clues" : [],
							"text" : "Mythos Ability: Ongoing Effect: When a monster enters Uptown Streets, place it on this card. Monsters on this card do not count against the monster limit.",
							"movement" : {
								"white" : [ "Circle", "Plus", "Slash", "Star",
										"Triangle" ],
								"black" : [ "Crescent", "Diamond", "Hexagon",
										"Square" ]
							},
							"pass" : "Pass: Investigators who end their movement in the Uptown Streets may make a Lore (-1) check to place a clue token on this card. If there are as many clue tokens on this card as there are investigators plus one, return it to the box (and all monsters on it to the cup) and each investigator gains a random monster trophy.",
							"fail" : "Fail: If there are as many monsters on this card as there are investigators plus one, return it to the box (and all monsters on it to the cup). All investigators are devoured."
						},
						{
							"name" : "Oppressive Atmosphere",
							"type" : "Environment (Mystic)",
							"expansion" : "Innsmouth Horror",
							"gates" : [ "Devil Reef" ],
							"clues" : [ "Esoteric Order of Dagon" ],
							"text" : "Mythos Ability: While this card is in play, all monsters gain Nightmarish 1. Any monster that already has Nightmarish has its Nightmarish rating increased by 1.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							}
						},
						{
							"name" : "Order of Dagon Suspected!",
							"type" : "Headline",
							"expansion" : "Innsmouth Horror",
							"gates" : [ "Marsh Refinery" ],
							"clues" : [ "Y'ha-nthlei" ],
							"text" : "Mythos Ability: Although no proof exists, it is suspected that the Esoteric Order of Dagon released 2 monsters into the Church Green streets.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Parazoologist Visits Miskatonic U.",
							"type" : "Environment (Urban)",
							"expansion" : "The Black Goat of the Woods",
							"special" : "Gate burst",
							"gates" : [ "Woods" ],
							"clues" : [ "Unvisited Isle" ],
							"text" : "Mythos Ability: Investigators who end their movement in the Miskatonic U. Streets may discard 5 Toughness worth of monster trophies to gain 1 Spell.",
							"movement" : {
								"white" : [ "Crescent", "Diamond", "Hexagon",
										"Square" ],
								"black" : [ "Circle", "Plus", "Slash", "Star",
										"Triangle" ]
							}
						},
						{
							"name" : "Patient Claims Madness Caused by Words!",
							"type" : "Headline",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates, Gate burst",
							"gates" : [ "Marsh Refinery", "Independence Square" ],
							"clues" : [ "The Hall School" ],
							"text" : "Mythos Ability: Each investigator with a Tome loses 2 Sanity. Each investigator who does not have a Tome, but does have 1 or more Spells, loses 1 Sanity.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Pets and Wildlife Mutilated!",
							"type" : "Headline",
							"expansion" : "The Black Goat of the Woods",
							"special" : "Gate burst",
							"gates" : [ "Black Cave" ],
							"clues" : [ "The Unnamable" ],
							"text" : "Mythos Ability: Monsters must be on the prowl.  A monster appears in the Merchant District streets and the Southside streets.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Pickpocket Ring at Large!",
							"type" : "Headline",
							"expansion" : "Kingsport Horror",
							"gates" : [ "Woods" ],
							"clues" : [ "Independence Square" ],
							"text" : "Mythos Ability: Each investigator must make a Luck (-1) check. Any investigator that fails must either discard his most expensive item or lose all of his money.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Picnickers Panic!",
							"type" : "Headline",
							"gates" : [ "Unvisited Isle" ],
							"clues" : [ "Science Building" ],
							"text" : "Mythos Ability: A careless picnicker unleashes 2 monsters on the Downtown streets.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Plague of Frogs",
							"type" : "Environment (Weather)",
							"expansion" : "Dunwich Horror",
							"gates" : [ "Gardner's Place" ],
							"clues" : [ "Cold Spring Glen" ],
							"text" : "Mythos Ability: Lore checks in Arkham are made at a -1 penalty. Will checks in Arkham are made at a +1 bonus. Witches and Warlocks move like stalkers.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Plague of Insects",
							"type" : "Environment (Weather)",
							"expansion" : "Curse of the Dark Pharaoh",
							"special" : "Two doom tokens",
							"gates" : [],
							"clues" : [ "The Witch House" ],
							"text" : "Mythos Ability: Investigators that end their turns in the street lose 1 Stamina and 1 Sanity. The terror level increases by 1.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							},
							"pass" : "Flavor Text: The strange locusts and beetles around town have reached a critical mass!  They crawl, fly and hop everywhere."
						},
						{
							"name" : "Planetary Alignment",
							"type" : "Environment (Mystic)",
							"gates" : [ "The Witch House" ],
							"clues" : [ "Black Cave" ],
							"text" : "Mythos Ability: Thanks to the mystic energy generated by the planetary alignment, all Spells have a Sanity cost of 0.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Plans in Motion",
							"type" : "Rumor",
							"expansion" : "Innsmouth Horror",
							"special" : "Two doom tokens",
							"gates" : [],
							"clues" : [],
							"text" : "Mythos Ability: Ongoing Effect: At the end of every Mythos Phase (beginning the turn after this card enters play), roll a die. On a 1 or 2, add one uprising token to the Deep Ones Rising track.\nPass: If the Feds Raid Innsmouth track is filled, resolve it, then return this card to the box.\nFail: If the Ancient One awakens, return this card to the box.",
							"movement" : {
								"white" : [ "Circle", "Plus", "Slash", "Star",
										"Triangle" ],
								"black" : [ "Crescent", "Diamond", "Hexagon",
										"Square" ]
							},
							"pass" : "Flavor Text: Strange schemes are afoot in the city of Innsmouth, preparing the way for the Ancient One's awakening."
						},
						{
							"name" : "Police Helpless to Displace Vagrants",
							"type" : "Environment (Urban)",
							"expansion" : "The Lurker at the Threshold",
							"gates" : [ "Black Cave" ],
							"clues" : [ "Hibb's Roadhouse" ],
							"text" : "Mythos Ability: Investigators who end their movement in the Downtown streets may spend $5 or 2 Clue tokens to draw the top 3 cards of the Spell deck, choose 1 Spell to keep, and discard the rest.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Police Offer Reward for Information!",
							"type" : "Headline",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates",
							"gates" : [ "Esoteric Order of Dagon",
									"The Witch House" ],
							"clues" : [ "Devil Reef", "Black Cave" ],
							"text" : "Mythos Ability: Each investigator may spend any number of his Clue tokens. For each Clue token he spends, he gains $2.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Police Proclaim Cult Crackdown",
							"type" : "Headline",
							"expansion" : "The King in Yellow",
							"gates" : [ "Unvisited Isle" ],
							"clues" : [ "Science Building" ],
							"text" : "Mythos Ability: All Cultists in Arkham are returned to the cup.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							},
							"pass" : "Flavor Text: The police say that the recent rise in cultist activity cannot be tolerated, and call on all citizens to report sightings of \"people in strange garb or performing rituals.\""
						},
						{
							"name" : "Police Step Up Patrols in Northside!",
							"type" : "Headline",
							"gates" : [ "Silver Twilight Lodge" ],
							"clues" : [ "Graveyard" ],
							"text" : "Mythos Ability: All monsters in the Northside streets or locations are returned to the cup.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Private Security Hired in Uptown!",
							"type" : "Headline",
							"gates" : [ "Woods" ],
							"clues" : [ "Historical Society" ],
							"text" : "Mythos Ability: All monsters in the Uptown streets or locations are returned to the cup.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Profane Relics Seized",
							"type" : "Rumor",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates",
							"gates" : [ "Devil's Hopyard", "Historical Society" ],
							"clues" : [],
							"text" : "Mythos Ability: Ongoing Effect: Place 1 Clue token on this card at the end of every Mythos Phase (beginning the turn after it entered play).",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							},
							"pass" : "Pass: If an investigator with either a Silver Twilight Lodge Membership or a \"One of the Thousand\" Cult Membership (from the The Black Goat of the Woods expansion) discards 3 Clue tokens while at the South Church, return this card to the box. Each investigator then gains 1 Unique Item.",
							"fail" : "Fail: If there are 6 Clue tokens on this card, return it to the box, draw 2 Unique Items per investigator and return them to the box."
						},
						{
							"name" : "Raining Cats and Dogs",
							"type" : "Environment (Weather)",
							"gates" : [ "Hibb's Roadhouse" ],
							"clues" : [ "Independence Square" ],
							"text" : "Mythos Ability: Speed checks in Arkham are made at a -1 penalty, and players receive one less movement point during the Movement Phase. Sneak checks in Arkham are made at a +1 bonus. Return any Fire Vampires in play to the cup. If a Fire Vampire enters play, return it to the cup and draw a different monster.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Rare Antiquities Up for Auction!",
							"type" : "Headline",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates",
							"gates" : [ "Wizard's Hill", "The Witch House" ],
							"clues" : [ "Gardners' Place", "Black Cave" ],
							"text" : "Mythos Ability: The first player draws 1 Unique Item. He may purchase it for the list price. Each time a player chooses not to purchase it, the player to his left may purchase it, but the price goes up by $1. Once each player has had a chance to buy the item, if no one has purchased it, the item is discarded.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Rash of Graffiti",
							"type" : "Environment (Urban)",
							"expansion" : "The King in Yellow",
							"gates" : [ "Woods" ],
							"clues" : [ "Independence Square" ],
							"text" : "Mythos Ability: Skill checks to close or seal gates in Arkham are made at a -2 penalty.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							},
							"pass" : "Flavor Text: Business and homeowners alike have reported an increase in graffiti around Arkham. The perpetrators seem to have a penchant for yellow paint. They believe that some ne'er-do-wells have come into a few cases of the stuff and are just having trouble figuring out what to do with it. But could it be something more sinister?"
						},
						{
							"name" : "Rash of Missing Persons!",
							"type" : "Headline",
							"expansion" : "The Black Goat of the Woods",
							"gates" : [ "Independence Square" ],
							"clues" : [ "Graveyard" ],
							"text" : "Mythos Ability: The first player chooses an investigator to be lost in time and space",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Relentless Doom",
							"type" : "Environment (Urban)",
							"expansion" : "Innsmouth Horror",
							"gates" : [ "Esoteric Order of Dagon" ],
							"clues" : [ "Devil Reef" ],
							"text" : "Mythos Ability: While this card is in play, monster surges cause 1 doom token to be added to the Ancient One's doom track.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Restful Day!",
							"type" : "Headline",
							"expansion" : "Dunwich Horror",
							"gates" : [ "Wizard's Hill" ],
							"clues" : [ "Gardner's Place" ],
							"text" : "Mythos Ability: All investigators gain 1 Stamina.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Return to the Old Ways",
							"type" : "Rumor",
							"expansion" : "Curse of the Dark Pharaoh",
							"gates" : [ "The Witch House" ],
							"clues" : [],
							"text" : "Mythos Ability: Ongoing Effect: Place 1 Clue token on this card at the end of every Mythos Phase after the first. Any time a player attempts to use a Common Item, whether by applying its bonuses to combat, exhausting it, or discarding it, roll a die. On a 1 or 2, it falls apart before it can be used and must be discarded.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							},
							"pass" : "Pass: If a player discards a Common Item while in an Other World, return this card to the box. Each player gains 2 Clue tokens.",
							"fail" : "Fail: If there are 5 Clue tokens on this card, return it to the box. All Common Items in play are discarded, and the Common Item deck is removed from the game."
						},
						{
							"name" : "Ring Around the Moon",
							"type" : "Environment (Mystic)",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates",
							"gates" : [ "Esoteric Order of Dagon",
									"Independence Square" ],
							"clues" : [ "Devil Reef", "The Unnamable" ],
							"text" : "Mythos Ability: Each time an investigator in Arkham fails a Spell check, add a doom token to the doom track.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							}
						},
						{
							"name" : "Riots",
							"type" : "Rumor",
							"expansion" : "Dunwich Horror",
							"gates" : [ "Cold Spring Glen" ],
							"clues" : [],
							"text" : "Mythos Ability: When this card enters play, place 3 Stamina tokens per player on it. Any player may pay Stamina while in the Northside streets during the Arkham Encounters Phase to remove Stamina tokens from this card on a 1-for-1 basis.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							},
							"pass" : "Ongoing Effect: Place 1 Stamina token per player on this card at the end of every Mythos Phase (beginning the turn after it entered play).",
							"fail" : "Pass: If there are no Stamina tokens on this card, return it to the box. Each player draws 1 Spell."
						},
						{
							"name" : "Rituals of Power",
							"type" : "Environment (Mystic)",
							"expansion" : "The Black Goat of the Woods",
							"gates" : [ "Black Cave" ],
							"clues" : [ "Graveyard" ],
							"text" : "Mythos Ability: An arcane ritual increases the Stamina damage of all monsters by 1.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "River Breaches the Levees",
							"type" : "Environment (Weather)",
							"expansion" : "Curse of the Dark Pharaoh",
							"gates" : [ "Silver Twilight Lodge" ],
							"clues" : [ "Graveyard" ],
							"text" : "Mythos Ability: Place 1 Exhibit Item, facedown, in each of the Merchant District and Rivertown streets. The first investigator to reach one of these neighborhood streets may end his turn to take the item.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							},
							"pass" : "The terror level increases by 1.",
							"fail" : "Flavor Text: The river floods suddenly, drowning the streets of Arkham. When it recedes, it leaves behind strange artifacts that look like they came down the Nile!"
						},
						{
							"name" : "Rivertown Residents Take Back Streets!",
							"type" : "Headline",
							"gates" : [ "The Witch House" ],
							"clues" : [ "Black Cave" ],
							"text" : "Mythos Ability: All monsters in the Rivertown streets or locations are returned to the cup.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "R'lyeh Rising",
							"type" : "Environment (Mystic)",
							"gates" : [ "Woods" ],
							"clues" : [ "Historical Society" ],
							"text" : "Mythos Ability: Star Spawn and Maniacs have their toughness increased by 1. The difficulty to seal or close gates to R'lyeh is increased by 1.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							}
						},
						{
							"name" : "Sailor Take Warning",
							"type" : "Environment (Weather)",
							"expansion" : "Innsmouth Horror",
							"gates" : [ "Devil Reef" ],
							"clues" : [ "Esoteric Order of Dagon" ],
							"text" : "Mythos Ability: While this card is in play, any investigator who enters an aquatic location must pass a Fight (-1) check or lose 2 Stamina.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Scholar Speaks of Leylines",
							"type" : "Environment (Mystic)",
							"expansion" : "The Lurker at the Threshold",
							"gates" : [ "Silver Twilight Lodge" ],
							"clues" : [ "Graveyard" ],
							"text" : "Mythos Ability: Spells cost 1 additional Sanity to cast, but any investigator who successfully casts a Spell receives +1 Fight and +1 Will until the end of his turn.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "School of Medicine Seeks Test Subjects!",
							"type" : "Headline",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates, Gate burst",
							"gates" : [ "Wizard's Hill", "Unvisited Isle" ],
							"clues" : [ "Neil's Curiosity Shop" ],
							"text" : "Mythos Ability: Each investigator may choose to lose 2 Stamina to gain a Retainer.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Scientist Warns of Dimensional Rift!",
							"type" : "Headline",
							"gates" : [ "Unvisited Isle" ],
							"clues" : [ "Science Building" ],
							"text" : "Mythos Ability: All Dimensional Shamblers and Hounds of Tindalos are returned to the cup. If one or more monster is returned to the cup, raise the terror level by 1.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Scurrilous Stranger Scandal!",
							"type" : "Headline",
							"expansion" : "The Lurker at the Threshold",
							"special" : "Gate burst",
							"gates" : [ "Black Cave" ],
							"clues" : [ "Hibb's Roadhouse" ],
							"text" : "Mythos Ability: The investigators may collectively spend 5 Clue tokens. If they do so, the first player draws a Gate marker and claims it as a trophy.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Seven for a Secret, Never to be Told",
							"type" : "Environment (Mystic)",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates",
							"gates" : [ "Wizard's Hill", "Unvisited Isle" ],
							"clues" : [ "Gardners' Place", "Science Building" ],
							"text" : "Mythos Ability: During the Upkeep Phase, the first player rolls 2 dice. If the sum of the result is 7, each investigator wih no Clue tokens gains 1 Clue token and loses 1 Sanity.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Severe Hailstorm",
							"type" : "Environment (Weather)",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates",
							"gates" : [ "Devil Reef", "Independence Square" ],
							"clues" : [ "Esoteric Order of Dagon",
									"The Unnamable" ],
							"text" : "Mythos Ability: Any investigator in a street area at the end of the Mythos Phase must choose 1 item to discard.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Sheldon Gang Turns to Police for Aid!",
							"type" : "Headline",
							"gates" : [ "Graveyard" ],
							"clues" : [ "Unvisited Isle" ],
							"text" : "Mythos Ability: The Sheldon Gang disturbs a burial mound, releasing 2 monsters into the Uptown Streets.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Shipwreck!",
							"type" : "Headline",
							"expansion" : "Innsmouth Horror",
							"gates" : [ "Devil Reef" ],
							"clues" : [ "Esoteric Order of Dagon" ],
							"text" : "Mythos Ability: The boat's hold releases 2 monsters into the Innsmouth Shore streets.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							}
						},
						{
							"name" : "Signs of Cult Activity!",
							"type" : "Headline",
							"expansion" : "Innsmouth Horror",
							"gates" : [ "Esoteric Order of Dagon" ],
							"clues" : [ "Devil Reef" ],
							"text" : "Mythos Ability: The cultists performed a ritual that released 2 monsters into the Factory District streets.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Silver Twilight Lodge on Trial!",
							"type" : "Headline",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates, Gate burst",
							"gates" : [ "Devil Reef", "The Witch House" ],
							"clues" : [ "St. Erasmus's Home" ],
							"text" : "Mythos Ability: Anyone with a Silver Twilight Lodge Membership is arrested. All other investigators who have 1 or more Spells must discard a Spell or be arrested.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Slugs",
							"type" : "Environment (Weather)",
							"expansion" : "The King in Yellow",
							"gates" : [ "Independence Square" ],
							"clues" : [ "The Unnamable" ],
							"text" : "Mythos Ability: Fight and Speed checks in Arkham are made at a -1 penalty.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							},
							"pass" : "Flavor Text: Arkham has been hit by a plague of these slimy creatures, all oozing about with some unknown purpose."
						},
						{
							"name" : "Slum Murders Continue!",
							"type" : "Headline",
							"gates" : [ "Woods" ],
							"clues" : [ "Historical Society" ],
							"text" : "",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Snow Drifts",
							"type" : "Environment (Weather)",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates",
							"gates" : [ "Devil Reef", "Woods" ],
							"clues" : [ "Esoteric Order of Dagon",
									"Historical Society" ],
							"text" : "Mythos Ability: Investigators who move into a street area must end their movement. They must still evade or combat any monsters in that area, however. Note that this only applies to street areas that an investigator moves into, not a street area in which he starts his Movement Phase.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Solar Eclipse",
							"type" : "Environment (Mystic)",
							"gates" : [ "Graveyard" ],
							"clues" : [ "Unvisited Isle" ],
							"text" : "Mythos Ability: Due to the interference of the solar eclipse, no spells may be cast",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Someone's Watching Me",
							"type" : "Environment (Urban)",
							"expansion" : "Innsmouth Horror",
							"special" : "Gate burst",
							"gates" : [ "Marsh Refinery" ],
							"clues" : [ "Y'ha-nthlei" ],
							"text" : "Mythos Ability: The first investigator to close or seal a gate is Blessed. Discard this card afterwards.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Songs from the Woods",
							"type" : "Environment (Urban)",
							"expansion" : "Dunwich Horror",
							"gates" : [ "Cold Spring Glen" ],
							"clues" : [ "Whateley Farm" ],
							"text" : "Mythos Ability: Goat Spawn, Tcho-tchos, and Dark Young have their toughness increased by 1.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Soothing Night!",
							"type" : "Headline",
							"expansion" : "Dunwich Horror",
							"gates" : [ "Wizard's Hill" ],
							"clues" : [ "Gardner's Place" ],
							"text" : "Mythos Ability: All investigators gain 1 Sanity.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Soup Kitchen Seeks Donations!",
							"type" : "Headline",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates",
							"gates" : [ "Marsh Refinery", "Black Cave" ],
							"clues" : [ "Y'ha-nthlei", "Hibb's Roadhouse" ],
							"text" : "Mythos Ability: If a single investigator spends $3, every other investigator with no money gains 1 Stamina.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Southside Strangler Suspected!",
							"type" : "Headline",
							"gates" : [ "Woods" ],
							"clues" : [ "Historical Society" ],
							"text" : "Mythos Ability: However, the press is mistaken, and the murders were caused by 2 monsters that are released into the Southside streets.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Spawn of Yog-Sothoth",
							"type" : "Environment (Mystic)",
							"expansion" : "The King in Yellow",
							"gates" : [ "The Unnamable" ],
							"clues" : [ "Woods" ],
							"text" : "Mythos Ability: Cultists have Magical Immunity.  Additionally, any investigator who is lost in time and space must pass a Will (-1) check or be devoured.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							},
							"pass" : "Flavor Text: A strange group of protestors surrounds the playhouse where \"The King in Yellow\" is being performed, chanting \"He is the spawn of Yog-Sothoth!\" and waving placards that read \"Have You Seen the Yellow Sign?\""
						},
						{
							"name" : "Spiritualism Gains in Popularity",
							"type" : "Environment (Mystic)",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates",
							"gates" : [ "Devil Reef", "The Witch House" ],
							"clues" : [ "Esoteric Order of Dagon", "Black Cave" ],
							"text" : "Mythos Ability: Investigators may not evade Undead monsters and receive -1 on Combat checks against Undead monsters.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Stalkers in the Night!",
							"type" : "Headline",
							"expansion" : "Dunwich Horror",
							"special" : "Gate burst",
							"gates" : [ "Graveyard" ],
							"clues" : [ "Unvisited Isle" ],
							"text" : "Mythos Ability: All Star Vampires, Hunting Horrors, and Spectral Hunters in Arkham are returned to the cup.  If at least one monster returns to the cup, raise the terror level by 1.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Startling Message Sent from Overseas!",
							"type" : "Headline",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates",
							"gates" : [ "Marsh Refinery", "The Unnamable" ],
							"clues" : [],
							"text" : "Mythos Ability: Place 2 Clue tokens on the Newspaper. If the Kingsport Horror expansion game board is in play, place an additional 2 Clue tokens on the Wireless Station.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							}
						},
						{
							"name" : "Stopped Clocks",
							"type" : "Environment (Mystic)",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates",
							"gates" : [ "Wizard's Hill", "Woods" ],
							"clues" : [ "Gardners' Place", "Historical Society" ],
							"text" : "Mythos Ability: During each phase of the game turn, players may choose the player order during that phase. (Note that the order of the phases remains unchanged.) If players cannot agree on an order, the first player chooses. At the end of the turn, the first player marker is passed to the left as usual.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							}
						},
						{
							"name" : "Strange Creatures Seen on the Shore!",
							"type" : "Headline",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates",
							"gates" : [ "Wizard's Hill", "Independence Square" ],
							"clues" : [ "Gardners' Place", "The Unnamable" ],
							"text" : "Mythos Ability: A monster appears in each of the following: River Docks, Unvisited Isle, and all aquatic locations and all aquatic street areas on expansion game boards.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Strange Forces Exorcised from Arkham!",
							"type" : "Headline",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates",
							"gates" : [ "Esoteric Order of Dagon",
									"Unvisited Isle" ],
							"clues" : [ "Devil Reef", "Science Building" ],
							"text" : "Mythos Ability: Until the end of next turn, any time an investigator draws 1 or more Spells for any reason, he draws 1 fewer card (to a minimum of 0). Leave this card in play to indicate this.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Strange Lights on Campus!",
							"type" : "Headline",
							"gates" : [ "Woods" ],
							"clues" : [ "Historical Society" ],
							"text" : "Mythos Ability: The Library, Administration Building and Science Building are all closed until the end of next turn.  Leave this card in play until then to indicate this.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Strange Murders",
							"type" : "Environment (Urban)",
							"expansion" : "The King in Yellow",
							"gates" : [ "Unvisited Isle" ],
							"clues" : [ "Science Building" ],
							"text" : "Mythos Ability: Flying monsters have their toughness increased by 2 and gain Overwhelming 1.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							},
							"pass" : "Flavor Text: Their heads have holes bored into the top.  Their skulls are empty.  And that is the only thing the murder victims have in common."
						},
						{
							"name" : "Strange Ornithological Sightings",
							"type" : "Headline",
							"expansion" : "Curse of the Dark Pharaoh",
							"gates" : [ "The Unnamable" ],
							"clues" : [ "Historical Society" ],
							"text" : "Mythos Ability: Draw monsters from the monster cup until you have drawn 2 flying monsters.  They are placed in the Sky. Flying monsters do not attack investigators with Exhibit Items before the end of next turn.  Leave this care in play until then to indicate this.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Strange Power Flux Plagues City!",
							"type" : "Headline",
							"gates" : [ "Independence Square" ],
							"clues" : [ "The Unnamable" ],
							"text" : "Mythos Ability: All investigators in Other World areas may immediately return to Arkham.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							}
						},
						{
							"name" : "Strange Sightings!",
							"type" : "Headline",
							"expansion" : "Kingsport Horror",
							"special" : "Monster surge",
							"gates" : [],
							"clues" : [],
							"text" : "Mythos Ability: A monster surge occurs.  However, no gates open this turn.\nThe first player gains 1 Clue token.",
							"movement" : {
								"white" : [ "Crescent", "Diamond", "Hexagon",
										"Square" ],
								"black" : [ "Circle", "Plus", "Slash", "Star",
										"Triangle" ]
							}
						},
						{
							"name" : "Strange Sightings! (2)",
							"type" : "Headline",
							"expansion" : "Kingsport Horror",
							"special" : "Monster surge",
							"gates" : [],
							"clues" : [],
							"text" : "Mythos Ability: A monster surge occurs.  However, no gates open this turn.  The first player gains 1 Clue token.",
							"movement" : {
								"white" : [ "Circle", "Plus", "Slash", "Star",
										"Triangle" ],
								"black" : [ "Crescent", "Diamond", "Hexagon",
										"Square" ]
							}
						},
						{
							"name" : "Strange Sightings! (3)",
							"type" : "Headline",
							"expansion" : "The Black Goat of the Woods",
							"special" : "Monster surge",
							"gates" : [],
							"clues" : [],
							"text" : "Mythos Ability: A monster surge occurs.  However, no gates open this turn.  The first player gains 1 Clue token.",
							"movement" : {
								"white" : [ "Crescent", "Diamond", "Hexagon",
										"Square" ],
								"black" : [ "Circle", "Plus", "Slash", "Star",
										"Triangle" ]
							}
						},
						{
							"name" : "Strange Sightings! (4) x2",
							"type" : "Headline",
							"expansion" : "The Black Goat of the Woods",
							"special" : "Monster surge",
							"gates" : [],
							"clues" : [],
							"text" : "Mythos Ability: A monster surge occurs.  However, no gates open this turn.  The first player gains 1 Clue token.",
							"movement" : {
								"white" : [ "Circle", "Plus", "Slash", "Star",
										"Triangle" ],
								"black" : [ "Crescent", "Diamond", "Hexagon",
										"Square" ]
							}
						},
						{
							"name" : "Strange Sightings! (5)",
							"type" : "Headline",
							"expansion" : "Innsmouth Horror",
							"special" : "Monster surge",
							"gates" : [ "-none- (page does not exist)" ],
							"clues" : [],
							"text" : "Mythos Ability: A monster surge occurs. However, no gates open this turn.\nThe first player gains 1 Clue token.",
							"movement" : {
								"white" : [ "Circle", "Plus", "Slash", "Star",
										"Triangle" ],
								"black" : [ "Crescent", "Diamond", "Hexagon",
										"Square" ]
							}
						},
						{
							"name" : "Strange Sightings! (6) x2",
							"type" : "Headline",
							"expansion" : "Miskatonic Horror",
							"special" : "Monster surge",
							"gates" : [],
							"clues" : [],
							"text" : "Mythos Ability: A monster surge occurs.  However, no gates open this turn.  The first player gains 1 Clue token.",
							"movement" : {
								"white" : [ "Circle", "Plus", "Slash", "Star",
										"Triangle" ],
								"black" : [ "Crescent", "Diamond", "Hexagon",
										"Square" ]
							}
						},
						{
							"name" : "Strange Sightings! (7) x2",
							"type" : "Headline",
							"expansion" : "Miskatonic Horror",
							"special" : "Monster surge",
							"gates" : [],
							"clues" : [],
							"text" : "Mythos Ability: A monster surge occurs.  However, no gates open this turn.  The first player gains 1 Clue token.",
							"movement" : {
								"white" : [ "Crescent", "Diamond", "Hexagon",
										"Square" ],
								"black" : [ "Circle", "Plus", "Slash", "Star",
										"Triangle" ]
							}
						},
						{
							"name" : "Strange Sleep Disorder Baffles Doctors!",
							"type" : "Headline",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates, Gate burst",
							"gates" : [ "Esoteric Order of Dagon", "Woods" ],
							"clues" : [ "The Rope and Anchor" ],
							"text" : "Mythos Ability: All investigators who have a Madness card (from the Dunwich Horror expansion) or whose Sanity is currently 2 or less must move immediately to the first area of the Dreamlands.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Strange Statue Destroyed!",
							"type" : "Headline",
							"expansion" : "Dunwich Horror",
							"special" : "Gate burst",
							"gates" : [ "Unvisited Isle" ],
							"clues" : [ "Science Building" ],
							"text" : "Mythos Ability: Unfortunately, the statue's destruction lets 2 monsters loose in the Village Commons streets.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Strange Surprise!",
							"type" : "Headline",
							"expansion" : "The Lurker at the Threshold",
							"special" : "Gate burst",
							"gates" : [ "The Witch House" ],
							"clues" : [ "Black Cave" ],
							"text" : "Mythos Ability: A monster appears at the first player's location. If this is a stable location or an Other World area, the monster appears in the Outskirts instead.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							}
						},
						{
							"name" : "Strange Tremors Cease!",
							"type" : "Headline",
							"gates" : [ "Independence Square" ],
							"clues" : [ "The Unnamable" ],
							"text" : "Mythos Ability: All Chthonians and Dholes in Arkham are returned to the cup.  If at least one monster returns to the cup, raise the terror level by 1.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Strange Visions Cease!",
							"type" : "Headline",
							"expansion" : "Kingsport Horror",
							"gates" : [ "Independence Square" ],
							"clues" : [ "Silver Twilight Lodge" ],
							"text" : "Mythos Ability: The first player chooses one rift token on the rift track.  If that rift is active, turn the token facedown.  Otherwise, return it to the bank.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Strange Waves Subside!",
							"type" : "Headline",
							"expansion" : "Dunwich Horror",
							"special" : "Gate burst",
							"gates" : [ "The Unnamable" ],
							"clues" : [ "Woods" ],
							"text" : "Mythos Ability: The first player chooses one open gate and closes it, returning its gate token to the gate token pile.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Strange Whispers Promise Vengeance!",
							"type" : "Headline",
							"expansion" : "The Black Goat of the Woods",
							"gates" : [ "Science Building" ],
							"clues" : [ "Silver Twilight Lodge" ],
							"text" : "Mythos Ability: A monster appears at a street location chosen by the first player.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Strange Woman Distributing Words",
							"type" : "Headline",
							"expansion" : "The Lurker at the Threshold",
							"special" : "Gate burst",
							"gates" : [ "Unvisited Isle" ],
							"clues" : [ "Science Building" ],
							"text" : "Mythos Ability: The first player draws a Spell.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Strength of the Earth",
							"type" : "Environment (Mystic)",
							"expansion" : "The King in Yellow",
							"gates" : [ "The Witch House" ],
							"clues" : [ "Black Cave" ],
							"text" : "Mythos Ability: All monsters with a moon dimensional symbol have their toughness, combat damage (if any), and horror damage (if any) increased by 1.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Students Protest Museum Exhibit",
							"type" : "Environment (Urban)",
							"expansion" : "Curse of the Dark Pharaoh",
							"gates" : [ "Black Cave" ],
							"clues" : [ "The Unnamable" ],
							"text" : "Mythos Ability: Any investigator who ends his movement in the streets must make a Fight (-1) check or be delayed by the throngs of protestors.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							},
							"pass" : "Flavor Text: The students of Miskatonic are stirred up by the \"disrespectful scavenging of a society's remains\" - by which they mean the visiting museum exhibit."
						},
						{
							"name" : "Sunny and Clear",
							"type" : "Environment (Weather)",
							"gates" : [ "Black Cave" ],
							"clues" : [ "Hibb's Roadhouse" ],
							"text" : "Mythos Ability: Sneak checks in Arkham are made at a -1 penalty.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							},
							"pass" : "Will checks in Arkham are made at a +1 bonus.",
							"fail" : "If the Hunter in Darkness is in play, return it to the cup. If the Hunter in Darkness enters play, return it to the cup and draw a different monster."
						},
						{
							"name" : "Superstitions Abound!",
							"type" : "Headline",
							"expansion" : "The Black Goat of the Woods",
							"special" : "Gate burst",
							"gates" : [ "The Unnamable" ],
							"clues" : [ "Unvisited Isle" ],
							"text" : "Mythos Ability: The first player chooses one investigator to become Blessed and another investigator to become Cursed.  (If there is only one investigator, nothing happens).",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							}
						},
						{
							"name" : "Surrounded by Mystery",
							"type" : "Headline",
							"expansion" : "The Lurker at the Threshold",
							"gates" : [ "Unvisited Isle", "Woods" ],
							"clues" : [ "Science Building" ],
							"text" : "Mythos Ability: Two Gates open this turn, but no doom tokens are added to the doom track.",
							"movement" : {
								"white" : [ "Circle", "Plus", "Slash", "Star",
										"Triangle" ],
								"black" : [ "Crescent", "Diamond", "Hexagon",
										"Square" ]
							}
						},
						{
							"name" : "Taxes Come Due!",
							"type" : "Headline",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates, Gate burst",
							"gates" : [ "Devil Reef", "Unvisited Isle" ],
							"clues" : [ "North Point Lighthouse" ],
							"text" : "Mythos Ability: All investigators discard one half of all their money (rounded down).",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Temperence Fever Sweeps City",
							"type" : "Headline",
							"gates" : [ "The Witch House" ],
							"clues" : [ "Black Cave" ],
							"text" : "Mythos Ability: Any investigator with Whiskey must pass a Sneak (-1) check or get arrested and taken to the Police Station.  If this occurs, they must discard their Whiskey.  In addition, Hibb's Roadhouse is closed until the end of next turn.  Leave this card in play until then to indicate this.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							},
							"pass" : ""
						},
						{
							"name" : "Terror at the Train Station!",
							"type" : "Headline",
							"gates" : [ "The Witch House" ],
							"clues" : [ "Black Cave" ],
							"text" : "Mythos Ability: A rusty train arrives in Arkham, disgorging 2 monsters into the Northside streets.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "The Ancient One's Servants!",
							"type" : "Headline",
							"expansion" : "Innsmouth Horror",
							"gates" : [ "Marsh Refinery" ],
							"clues" : [ "Y'ha-nthlei" ],
							"text" : "Mythos Ability: If there are any Deep Ones or Cultists in play, add 1 doom token to the Ancient One's doom track.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "The Chill of the Grave",
							"type" : "Environment (Mystic)",
							"gates" : [ "Unvisited Isle" ],
							"clues" : [ "Science Building" ],
							"text" : "Mythos Ability: All Undead monsters have their toughness increased by 1",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "The Doors of Sleep",
							"type" : "Environment (Urban)",
							"expansion" : "Kingsport Horror",
							"special" : "Gate burst",
							"gates" : [ "Woods" ],
							"clues" : [ "North Point Lighthouse" ],
							"text" : "Mythos Ability: Investigators who end their movement in the Harborside streets gain 1 Clue token, then have an encounter during the Other Worlds Encounters Phase as though they were in the Dreamlands.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "The Evil is Everywhere",
							"type" : "Headline",
							"expansion" : "The Lurker at the Threshold",
							"gates" : [ "Independence Square", "Woods" ],
							"clues" : [ "The Unnamable" ],
							"text" : "Mythos Ability: Two Gates open this turn, but no doom tokens are added to the doom track.",
							"movement" : {
								"white" : [ "Crescent", "Diamond", "Hexagon",
										"Square" ],
								"black" : [ "Circle", "Plus", "Slash", "Star",
										"Triangle" ]
							}
						},
						{
							"name" : "The Festival",
							"type" : "Environment (Urban)",
							"gates" : [ "Woods" ],
							"clues" : [ "Historical Society" ],
							"text" : "Mythos Ability: Cultists and Byakhees have their toughness increased by 1.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							},
							"pass" : "Flavor Text: The festival has begun!"
						},
						{
							"name" : "The Great Ritual",
							"type" : "Rumor",
							"gates" : [ "Graveyard" ],
							"clues" : [],
							"text" : "Mythos Ability: Ongoing Effect: Cultists, Witches, Warlocks, and High Priests have their toughness increased by 2 while this card is in play. Place 1 clue token on this card at the end of every Mythos Phase (beginning the turn after it entered play).",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							},
							"pass" : "Pass: If a single player discards 3 spells (4 if there are 5 or more players) while in the French Hill streets during the Arkham Encounters phase, return this card to the box. Each player gains 2 clue tokens.",
							"fail" : "Fail: If there are ever 5 Clue tokens on this card, return it to the box.  From now on, draw 2 Mythos cards each Mythos Phase.  Ignore everything on the first card except for the gate opening."
						},
						{
							"name" : "The Innsmouth Plague",
							"type" : "Rumor",
							"expansion" : "Innsmouth Horror",
							"special" : "Two doom tokens",
							"gates" : [],
							"clues" : [],
							"text" : "Mythos Ability: Ongoing Effect: At the end of every Mythos Phase (beginning the turn after this card enters play), the first player draws one Innsmouth Look card.",
							"movement" : {
								"white" : [ "Crescent", "Diamond", "Hexagon",
										"Square" ],
								"black" : [ "Circle", "Plus", "Slash", "Star",
										"Triangle" ]
							},
							"pass" : "Pass: If an investigator discards 2 Spells during the Arkham Encounters Phase while in the Church Green streets, return this card to the box.",
							"fail" : "Fail: If an investigator gets the Innsmouth Look and is devoured, return this card to the box."
						},
						{
							"name" : "The Key and the Gate",
							"type" : "Rumor",
							"expansion" : "The Lurker at the Threshold",
							"gates" : [ "The Unnamable" ],
							"clues" : [],
							"text" : "Mythos Ability: Ongoing Effect: Each time a Gate opens, place a Clue token on this card.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							},
							"pass" : "Pass: Investigators who end their movement in the Southside streets can discard two Gate trophies to return this card to the box and gain 2 Clue tokens.",
							"fail" : "Fail: When there are as many Clue tokens on this card as there are investigators plus one, return this card to the box and draw a new Mythos card. Treat any Gates opened by that Mythos card as Gate bursts and ignore the rest of the card."
						},
						{
							"name" : "The Man in Black",
							"type" : "Environment (Mystic)",
							"gates" : [ "The Witch House" ],
							"clues" : [ "Black Cave" ],
							"text" : "Mythos Ability: Investigators who end their movement in the French Hill streets may deal with the Man in Black to gain power.  They roll dice equal to their current Sanity and for every failed die, the lose 1 Sanity.  If this reduces them to 0 Sanity, they are devoured and the player must start a new character.  Otherwise, they gain 1 Clue token and draw 1 Spell.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "The Next Act Begins! x3",
							"type" : "Headline",
							"expansion" : "The King in Yellow",
							"special" : "Infamous play",
							"gates" : [],
							"clues" : [],
							"text" : "Mythos Ability: The terror level is increased by 1.  However, no gate is opened this turn.",
							"movement" : {
								"white" : [ "Circle", "Plus", "Slash", "Star",
										"Triangle" ],
								"black" : [ "Crescent", "Diamond", "Hexagon",
										"Square" ]
							},
							"pass" : "The next act of the charity performance of The King in Yellow has begun.",
							"fail" : "The first player must put the top card of the Act deck into play."
						},
						{
							"name" : "The Next Act Begins! (2) x3",
							"type" : "Headline",
							"expansion" : "The King in Yellow",
							"special" : "Infamous play",
							"gates" : [],
							"clues" : [],
							"text" : "Mythos Ability: The terror level is increased by 1.  However, no gate is opened this turn.",
							"movement" : {
								"white" : [ "Crescent", "Diamond", "Hexagon",
										"Square" ],
								"black" : [ "Circle", "Plus", "Slash", "Star",
										"Triangle" ]
							},
							"pass" : "The next act of the charity performance of The King in Yellow has begun.",
							"fail" : "The first player must put the top card of the Act deck into play."
						},
						{
							"name" : "The Rails are Washed Out",
							"type" : "Environment (Weather)",
							"expansion" : "Innsmouth Horror",
							"gates" : [ "Esoteric Order of Dagon" ],
							"clues" : [ "Devil Reef" ],
							"text" : "Mythos Ability: Investigators cannot travel between cities using the Train Station or other depot locations while this card remains in play.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "The Repairer of Reputations",
							"type" : "Headline",
							"expansion" : "The King in Yellow",
							"gates" : [ "Independence Square" ],
							"clues" : [ "The Unnamable" ],
							"text" : "Mythos Ability: Players who are Cursed, have an outstanding bank loan, possess a Detriment card, or are in jail may immediately discard the offending cards and/or may be immediately freed from jail.  Those who take advantage of this offer are reduced to 0 Sanity.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							},
							"pass" : "Flavor Text: Signs are place in conspicuous locations, advertising \"Mr. Wilde, Repairer of Reputations.\"",
							"fail" : ""
						},
						{
							"name" : "The Siren Call!",
							"type" : "Headline",
							"expansion" : "Innsmouth Horror",
							"gates" : [ "Devil Reef" ],
							"clues" : [ "Esoteric Order of Dagon" ],
							"text" : "Mythos Ability: A strange feeling pulls the first player towards the sea, forcing him to draw two Innsmouth Look cards.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "The Southside Strangler Strikes",
							"type" : "Rumor",
							"gates" : [ "Independence Square" ],
							"clues" : [],
							"text" : "Mythos Ability: Ongoing Effect: Return one Ally from the Ally deck to the box at random at the end of every Mythos Phase while this card is in play (beginning the turn after it entered play). The Southside Strangler has struck again!",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							},
							"pass" : "Pass: If a single player discards 5 Clue tokens while in Ma's Boarding House during the Arkham Encounters Phase, return this card to the box. Each player receives a $5 reward from the police.",
							"fail" : "Fail: If there are no more Allies to return to the box at the end of the Mythos Phase, return this card to the box.  Each player must lower either their maximum Sanity or Stamina (their choice) by 1 for the rest of the game."
						},
						{
							"name" : "The Stars Are Right",
							"type" : "Rumor",
							"gates" : [ "Science Building" ],
							"clues" : [],
							"text" : "Mythos Ability: Ongoing Effect: Roll a die at the end of every Mythos Phase while this card is in play (beginning the turn after it enters play).  On a 1 or 2, place one doom token on the ancient one's doom track.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							},
							"pass" : "Pass: If a player discards an Ally card while in the Downtown streets during the Arkham Encounter Phase, return this card to the box.  Each player draws 2 Common Items.",
							"fail" : "Fail: If the Ancient One awakens, return this card to the box."
						},
						{
							"name" : "The Story Continues…",
							"type" : ""
						},
						{
							"name" : "The Streets are Flooded",
							"type" : "Environment (Weather)",
							"expansion" : "Innsmouth Horror",
							"gates" : [ "Devil Reef" ],
							"clues" : [ "Esoteric Order of Dagon" ],
							"text" : "Mythos Ability: All street areas are also aquatic locations while this card remains in play.",
							"movement" : {
								"white" : [ "Crescent", "Diamond", "Hexagon",
										"Square" ],
								"black" : [ "Circle", "Plus", "Slash", "Star",
										"Triangle" ]
							}
						},
						{
							"name" : "The Tattered King",
							"type" : "Rumor",
							"expansion" : "The King in Yellow",
							"special" : "Two doom tokens",
							"gates" : [],
							"clues" : [],
							"text" : "Mythos Ability: Ongoing Effect: Place 1 Clue token on this card at the end of every Mythos Phase (beginning the turn after it enters play).",
							"movement" : {
								"white" : [ "Circle", "Plus", "Slash", "Star",
										"Triangle" ],
								"black" : [ "Crescent", "Diamond", "Hexagon",
										"Square" ]
							},
							"pass" : "Fail: When the 5th clue token is place on this card, return this card to the box.  Any investigator in a street area is devoured, as the Tattered King catches sight of him in the dead of night."
						},
						{
							"name" : "The Tempest",
							"type" : "Environment (Weather)",
							"expansion" : "Dunwich Horror",
							"gates" : [ "Gardner's Place" ],
							"clues" : [ "Cold Spring Glen" ],
							"text" : "Mythos Ability: Luck checks in Arkham are made at a -1 penalty. Speed checks in Arkham are made at a +1 bonus, and investigators receive 1 extra movement point. All flying monsters in the Sky when this card enters play, or that move to the Sky while it remains in play, are returned to the monster cup.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "The Terrible Experiment",
							"type" : "Rumor",
							"gates" : [ "Unvisited Isle" ],
							"clues" : [],
							"text" : "Mythos Ability: When this card enters play, place 5 monsters from the cup on it.  Any player may choose to fight one or more of these monsters while in the Miskatonic U. streets during the Arkham Encounter Phase.  If defeated, they are claimed as monster trophies. These monsters do not move, are not considered on the board, and do not count against the monster limit.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							},
							"pass" : "Ongoing Effect: Place a monster on this card at the end of every Mythos Phase (beginning the turn after it entered play).",
							"fail" : "Pass: If there are no monsters on this card, return it to the box.  Each player draws 1 Skill."
						},
						{
							"name" : "The Trembling Earth",
							"type" : "Environment (Weather)",
							"expansion" : "Innsmouth Horror",
							"gates" : [ "Esoteric Order of Dagon" ],
							"clues" : [ "Devil Reef" ],
							"text" : "Mythos Ability: At the start of each Upkeep Phase while this card is in play, roll a die. On a 1, the terror level increases by 1.\nWhile this card is in play, investigators receive 1 less movement point each turn.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							}
						},
						{
							"name" : "The Unraveling Tapestry",
							"type" : "Rumor",
							"expansion" : "The Lurker at the Threshold",
							"gates" : [ "Hibb's Roadhouse" ],
							"clues" : [],
							"text" : "Mythos Ability: Setup: Place 3 Clue tokens on this rumor.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							},
							"pass" : "Ongoing Effect: Each time a Gate opens, discard a Clue token from this rumor. Each time an Investigator casts a Spell, add a Clue token to this rumor.",
							"fail" : "Pass: When there are 6 Clue tokens on this rumor, return it to the box and each investigator gains 1 Spell."
						},
						{
							"name" : "The Veil is Strong",
							"type" : "Environment (Mystic)",
							"expansion" : "Innsmouth Horror",
							"special" : "Gate burst",
							"gates" : [ "Esoteric Order of Dagon" ],
							"clues" : [ "Devil Reef" ],
							"text" : "Mythos Ability: While this card is in play, it takes one more open gate than usual to awaken the Ancient One.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "The Veil is Weak",
							"type" : "Environment (Mystic)",
							"expansion" : "Innsmouth Horror",
							"gates" : [ "Devil Reef" ],
							"clues" : [ "Esoteric Order of Dagon" ],
							"text" : "Mythos Ability: While this card is in play, it takes one more sealed gate than usual to win the game.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Theater Experiences Renewal!",
							"type" : "Headline",
							"expansion" : "The King in Yellow",
							"gates" : [ "The Witch House" ],
							"clues" : [ "Black Cave" ],
							"text" : "Mythos Ability: Investigators in Arkham may immediately spend any amount of Sanity, up to the current terror level or the investigator's current Sanity, whichever is lower.  For each point of Sanity spent, the player gains 1 Clue token.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							},
							"pass" : "Flavor Text: The playhouse downtown has been struggling for months, and the recent run of the infamous play, \"The King in Yellow,\" may revitalize it. But at what cost to those who watch it?"
						},
						{
							"name" : "Things of Darkness",
							"type" : "Environment (Mystic)",
							"gates" : [ "Silver Twilight Lodge" ],
							"clues" : [ "Graveyard" ],
							"text" : "Mythos Ability: Ghouls, Formless Spawns, Shoggoths and Flying Polyps have their toughness increased by 1",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Tidal Wave!",
							"type" : "Headline",
							"expansion" : "Innsmouth Horror",
							"gates" : [ "Devil Reef" ],
							"clues" : [ "Esoteric Order of Dagon" ],
							"text" : "Mythos Ability: A crashing wave strikes the shore! All investigators in aquatic locations must pass a Fight (-1) check or lose 2 Stamina.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Time After Time",
							"type" : "Environment (Mystic)",
							"expansion" : "Kingsport Horror",
							"special" : "Gate burst",
							"gates" : [ "The Witch House" ],
							"clues" : [ "Artists' Colony" ],
							"text" : "Mythos Ability: Hounds of Tindalos and Yithians have their toughness increased by 1.  Gates to Another Time have their difficulty to be closed or sealed increased by 2",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "To Conquer Death",
							"type" : "Rumor",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates",
							"gates" : [ "Marsh Refinery", "Graveyard" ],
							"clues" : [],
							"text" : "Mythos Ability: When this card enters play, place 3 Clue tokens on it. Each time an investigator passes a Horror check with 2 or more successes, add 1 Clue token to this card.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							},
							"pass" : "Ongoing Effect: During the Mythos Phase, remove 1 Clue token from this card.",
							"fail" : "Pass: If the number of Clue tokens on this card is equal to the number of investigators plus 5, return this card to the box. Each investigator has his maximum Stamina increased by 1. Any player with 1 or more Injury cards (from the Dunwich Horror expansion) may choose 1 to discard."
						},
						{
							"name" : "Tongue-Tied Teacher Taunted!",
							"type" : "Headline",
							"expansion" : "The Black Goat of the Woods",
							"gates" : [ "Silver Twilight Lodge" ],
							"clues" : [ "Science Building" ],
							"text" : "Mythos Ability: Each investigator with the most Clue tokens loses 1 Clue token.  Each investigator with the fewest Clue tokens gains 1 Clue token.",
							"movement" : {
								"white" : [ "Circle", "Plus", "Slash", "Star",
										"Triangle" ],
								"black" : [ "Crescent", "Diamond", "Hexagon",
										"Square" ]
							}
						},
						{
							"name" : "Tourists Flock to Arkham",
							"type" : "Environment (Urban)",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates",
							"gates" : [ "Y'ha-nthlei", "Silver Twilight Lodge" ],
							"clues" : [],
							"text" : "Mythos Ability: While this card is in play, investigators in a street area receive -1 on all Combat checks and gain 1 Sanity each time they pass a Combat check.",
							"movement" : {
								"white" : [],
								"black" : []
							}
						},
						{
							"name" : "Town Welcomes Visitors",
							"type" : "Headline",
							"expansion" : "The Lurker at the Threshold",
							"gates" : [ "Science Building" ],
							"clues" : [ "The Witch House" ],
							"text" : "Mythos Ability: The first player chooses a dimensional symbol. Draw new monsters from the monster cup to replace each monster with that dimensional symbol in Arkham. (Ignore monsters in the Sky, but not the Outskirts.) Return monsters so replaced to the cup after all new monsters have been drawn.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Train Robbers Strike Again!",
							"type" : "Headline",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates, Gate burst",
							"gates" : [ "Esoteric Order of Dagon",
									"Independence Square" ],
							"clues" : [ "Artists' Colony" ],
							"text" : "Mythos Ability: Any investigator currently in the Train Station or a depot location an an expansion game board must discard 2 items, if able.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Traveller Lost in Fog!",
							"type" : "Headline",
							"expansion" : "Kingsport Horror",
							"gates" : [ "Black Cave" ],
							"clues" : [ "Science Building" ],
							"text" : "Mythos Ability: The first player must immediately move to the  Strange High House in the Mist.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Two Sunsets",
							"type" : "Environment (Weather)",
							"expansion" : "The King in Yellow",
							"gates" : [ "Black Cave" ],
							"clues" : [ "Hibb's Roadhouse" ],
							"text" : "Mythos Ability: Sneak and Will checks in Arkham are made at a -1 penalty",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							},
							"pass" : "Flavor Text: A blurring effect in the atmosphere, which scientists believe may be caused by foreign weapons testing, has caused there to seem to be two suns, setting in rapid succession!"
						},
						{
							"name" : "Unending Darkness",
							"type" : "Rumor",
							"expansion" : "Miskatonic Horror",
							"special" : "Two doom tokens",
							"gates" : [],
							"clues" : [],
							"text" : "Mythos Ability: Ongoing Effect: Place 10 Clue tokens on this card. When a monster moves from a street area or a location to the Sky or into a vortex (either on the Dunwich Horror or Innsmouth Horror expansion game boards), remove 1 Clue token from this card.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							},
							"pass" : "Pass: If each investigator is Blessed, return this card to the box. Each investigator has his maximum Sanity increased by 1. Any player with 1 or more Madness cards (from the Dunwich Horror expansion) may choose 1 to discard.",
							"fail" : "Fail: If the number of Clue tokens on this card is less than the terror level, return it to the box. All players discard all of their Spells and then the Spell deck is returned to the box. Investigators may not use Spells for the rest of the game."
						},
						{
							"name" : "Unpleasant Surprise!",
							"type" : "Headline",
							"expansion" : "Innsmouth Horror",
							"gates" : [ "Esoteric Order of Dagon" ],
							"clues" : [ "Devil Reef" ],
							"text" : "Mythos Ability: If the terror level is 8 or higher, or there is only one empty space left on the Ancient One's doom track, then the Ancient One immediately awakens.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Unusual Moonrises",
							"type" : "Environment (Weather)",
							"expansion" : "The King in Yellow",
							"gates" : [ "Black Cave" ],
							"clues" : [ "Hibb's Roadhouse" ],
							"text" : "Mythos Ability: Sneak and Lore checks in Arkham are made at a +1 bonus.  Will checks in Arkham are made at a -2 penalty.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							},
							"pass" : "Flavor Text: The moon seems overly large, and is close to the horizon from dusk to dawn, casting long shadows throughout the entire night.  The scientists at Miskatonic University believe it to be an optical illusion."
						},
						{
							"name" : "Unusual Phenomenon Sighted in Arkham!",
							"type" : "Headline",
							"expansion" : "Kingsport Horror",
							"gates" : [ "Unvisited Isle" ],
							"clues" : [ "Hibb's Roadhouse" ],
							"text" : "Mythos Ability: The first player must choose one inactive rift (if there are any).  That rift's track immediately fills up and the rift opens.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Uptown Hosts Famous Publisher",
							"type" : "Headline",
							"expansion" : "The King in Yellow",
							"gates" : [ "Independence Square" ],
							"clues" : [ "The Unnamable" ],
							"text" : "Mythos Ability: Investigators in Arkham may immediately make a Will (-1) check.  Any who pass may pay $3 to draw Spells as if they were receiving Magic Lessons at Ye Olde Magick Shoppe",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							},
							"pass" : "Flavor Text: The Uptown Literati are hosting F. Tennyson Neely, British publisher of \"the King in Yellow,\" at Ye Olde Magick Shoppe.  Only the most elite are invited to hear him speak."
						},
						{
							"name" : "Vigilante Guards the Night!",
							"type" : "Headline",
							"gates" : [ "The Unnamable" ],
							"clues" : [ "Woods" ],
							"text" : "Mythos Ability: All monsters in the Downtown streets or locations are returned to the cup.",
							"movement" : {
								"white" : [ "Circle" ],
								"black" : [ "Diamond", "Square" ]
							}
						},
						{
							"name" : "Virulent Disease",
							"type" : "Rumor",
							"expansion" : "The King in Yellow",
							"special" : "Two doom tokens",
							"gates" : [],
							"clues" : [],
							"text" : "Mythos Ability: Ongoing Effect: Place 1 Clue token on this card at the end of every Mythos Phase (beginning the turn after it enters play.  If a player ends his movement at St. Mary's Hospital, he may place a doom token on his investigator sheet.",
							"movement" : {
								"white" : [ "Crescent", "Diamond", "Hexagon",
										"Square" ],
								"black" : [ "Circle", "Plus", "Slash", "Star",
										"Triangle" ]
							},
							"pass" : "Fail: When the 3rd clue token is place on this card, return this card to the box and discard the doom tokens from the investigator sheets.  All investigators who discard doom tokens are unaffected by the disease.  Investigators who do not discard doom tokens are reduced to 1 Stamina and 1 Sanity due to the disease's ferocity."
						},
						{
							"name" : "Vivisection Victim!",
							"type" : "Headline",
							"expansion" : "The Black Goat of the Woods",
							"special" : "Gate burst",
							"gates" : [ "The Witch House" ],
							"clues" : [ "Historical Society" ],
							"text" : "Mythos Ability: The first player may choose a monster in Arkham and move it to the Science Building.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Weakened Forces",
							"type" : "Environment (Mystic)",
							"expansion" : "Innsmouth Horror",
							"gates" : [ "Marsh Refinery" ],
							"clues" : [ "Y'ha-nthlei" ],
							"text" : "Mythos Ability: While this card is in play, all Magical Weapons have any bonuses they provide to Combat checks reduced by 1.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Whateley Family Feud Escalates!",
							"type" : "Headline",
							"expansion" : "Dunwich Horror",
							"special" : "Gate burst",
							"gates" : [ "Independence Square" ],
							"clues" : [ "The Unnamable" ],
							"text" : "Mythos Ability: All monsters in the Backwoods Country streets or locations are returned to the cup.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Whateleys Accused of Witchcraft!",
							"type" : "Headline",
							"expansion" : "Dunwich Horror",
							"special" : "Gate burst",
							"gates" : [ "The Witch House" ],
							"clues" : [ "Black Cave" ],
							"text" : "Mythos Ability: The accusations come after someone (or something) releases 2 monsters into the Backwoods Country streets.",
							"movement" : {
								"white" : [ "Hexagon" ],
								"black" : [ "Slash", "Star", "Triangle" ]
							}
						},
						{
							"name" : "Whippoorwills of Dunwich",
							"type" : "Environment (Mystic)",
							"expansion" : "Dunwich Horror",
							"gates" : [ "Whateley Farm" ],
							"clues" : [ "Devil's Hopyard" ],
							"text" : "Mythos Ability: If an investigator is reduced to 0 Stamina or Sanity while this card is in play, roll a die.  On a 1, the investigator is devoured as the whippoorwills catch his soul, and the terror level is increased by 1.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "Wildfire",
							"type" : "Environment (Weather)",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates",
							"gates" : [ "Gardners' Place", "Black Cave" ],
							"clues" : [ "Cold Spring Glen", "Hibb's Roadhouse" ],
							"text" : "Mythos Ability: Each investigator in the Black Cave or Woods at the end of the Mythos Phase, as well as each investigator in Bishop's Brook Bridge, Cold Spring Glen, or Wizard's Hill on the Dunwich Horror expansion game board at the end of the Mythos Phase, loses 1 Stamina.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Wild Visions Plague City!",
							"type" : "Headline",
							"expansion" : "Kingsport Horror",
							"gates" : [ "The Witch House" ],
							"clues" : [ "Black Cave" ],
							"text" : "Mythos Ability: Investigators may set their skill sliders however they want when this card is drawn.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Windy",
							"type" : "Environment (Weather)",
							"expansion" : "Dunwich Horror",
							"gates" : [ "Gardner's Place" ],
							"clues" : [ "Cold Spring Glen" ],
							"text" : "Mythos Ability: Sneak checks in Arkham are made at a -1 penalty.  Speed checks in Arkham are made at a +1 bonus, and investigators receive 1 extra movement point.  The Sky is considered to be adjacent to all unstable locations as well as all street areas.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "Witch Burning Anniversary!",
							"type" : "Headline",
							"gates" : [ "Unvisited Isle" ],
							"clues" : [ "Science Building" ],
							"text" : "Mythos Ability: An ancient curse strikes Arkham, releasing 2 monsters into the Rivertown streets.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Wolfsbane in Bloom",
							"type" : "Environment (Mystic)",
							"expansion" : "Miskatonic Horror",
							"special" : "Alternate gates",
							"gates" : [ "Devil Reef", "Unvisited Isle" ],
							"clues" : [ "Esoteric Order of Dagon",
									"Science Building" ],
							"text" : "Mythos Ability: Monsters with Magical Immunity are treated as having Magical Resistance instead and have their toughness increased by 1.",
							"movement" : {
								"white" : [ "Diamond", "Square" ],
								"black" : [ "Circle" ]
							}
						},
						{
							"name" : "World Torn Asunder",
							"type" : "Rumor",
							"expansion" : "Kingsport Horror",
							"gates" : [ "Science Building" ],
							"clues" : [],
							"text" : "Mythos Ability: When this card enters play, place 1 Clue token on it.  Any player may discard a Blessing and a Skill while in the Miskatonic U. streets during the Arkham Encounter Phase to remove all Clue tokens from this card.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							},
							"pass" : "Ongoing Effect:  Each time monsters with the moon dimensional symbol move, place a Clue token on this card.",
							"fail" : "Pass: If there are no Clue tokens on this card, return it to the box.  Each investigator is restored to full Sanity and Stamina."
						},
						{
							"name" : "Worlds Drifting Apart",
							"type" : "Environment (Mystic)",
							"expansion" : "Kingsport Horror",
							"gates" : [ "The Unnamable" ],
							"clues" : [ "Ye Olde Magick Shoppe" ],
							"text" : "Mythos Ability: While this card is in play, no rift tokens may be placed on the Rift track.",
							"movement" : {
								"white" : [ "Crescent" ],
								"black" : [ "Plus" ]
							}
						},
						{
							"name" : "Yuggoth in Retrograde",
							"type" : "Environment (Mystic)",
							"expansion" : "The Lurker at the Threshold",
							"special" : "Gate burst",
							"gates" : [ "The Unnamable" ],
							"clues" : [ "Woods" ],
							"text" : "Mythos Ability: Investigators receive +1 to Fight and Lore checks to close Gates.",
							"movement" : {
								"white" : [ "Plus" ],
								"black" : [ "Crescent" ]
							}
						},
						{
							"name" : "A Sandstorm!?",
							"type" : "Environment (Weather)",
							"expansion" : "Curse of the Dark Pharaoh",
							"gates" : [ "Independence Square" ],
							"clues" : [ "Woods" ],
							"text" : "Mythos Ability: Against all reason, a sandstorm comes up out of nowhere and strikes Arkham, clogging the streets and burying whole building! Strangely, it seems to avoid certain places with dark reputations. Investigators must spend 2 additional movement points to enter any location marked with a green diamon. While this card is in play, instead of having an Arkham Encounter, any investigator in a street are may pass a Luck(-1) check to draw 1 Exhibit Item.",
							"movement" : {
								"white" : [ "Slash", "Star", "Triangle" ],
								"black" : [ "Hexagon" ]
							}
						} ]);