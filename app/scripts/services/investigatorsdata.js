'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.investigatorsData
 * @description keep a list of the original card information from investigators
 * # investigatorsData
 * Value in the arkhamHelperApp.
 */
angular
    .module('arkhamHelperApp')
    .value(
        'investigatorsData',
        [
           
            {
              image : 'AmandaSharpeCard.png',
              name : 'Amanda Sharpe',
              profession : 'Student',
              money : 1,
              curSanity : 5,
              maxSanity : 5,
              curStamina : 5,
              maxStamina : 5,
              clues: 1,
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
              clues: 3,
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
            },
            {
              image : 'BobJenkinsCard.png',
              name : 'Bob Jenkins',
              profession : 'the Salesman',
              money : 9,
              curSanity : 4,
              maxSanity : 4,
              curStamina : 6,
              maxStamina : 6,
              home : 'General Store',
              focus : 1,
              clues: 0,
              specialAbilityTitle : 'Shrewd Dealer',
              specialAbilityDescription : 'Any Phase: Whenever Bob draws one or more cards from the Common item deck, he draws one extra card and then discards one of the cards.',
              minSpeed : 2,
              minSneak : 0,
              minFight : 1,
              minWill : 3,
              minLore : 0,
              minLuck : 1,
              curSpeed : 2,
              curFight : 1,
              curLore : 0,
              storySoFar: "As a traveling salesman, Bob is always on the go. But yesterday, he saw something that made him decide to stay in Arkham and miss his train. While he was in the General Store selling his wares, a robed man came in and bought several items, paying with old gold coins. Astounded, Bob turned to the shopkeeper for an explanation, but the man just ignored his questions, simply saying, \"That happens, sometimes.\" Now, Bob isn't leaving until he figues out where those gold coins came from. If he plays his cards right, maybe this will be the big score. Maybe he'll finally be able to retire and buy that boat he's had his eye on and spend the rest of his days fishing in a tropical paradise. Then again, moybe Bob will finally come to see that all that glitters is not gold.",
            },
            {
              image : 'CarolynFernCard.png',
              name : 'Carolyn Fern',
              profession : 'the Psychologist',
              money : 7,
              clues: 1,
              curSanity : 6,
              maxSanity : 6,
              curStamina : 4,
              maxStamina : 4,
              home : 'Arkham Asylum',
              focus : 2,
              specialAbilityTitle : 'Psychology',
              specialAbilityDescription : "Any Phase: Dr. Fern may restore 1 Sanity to herself or another character in her location. She cannot raise a character's Sanity higher than that character's maximum Sanity.",
              minSpeed : 0,
              minSneak : 0,
              minFight : 1,
              minWill : 1,
              minLore : 2,
              minLuck : 2,
              curSpeed : 0,
              curFight : 1,
              curLore : 2,
              storySoFar: "Carolyn is a first year resident at a sanitarium in Providence. Over the past six months, she has been studying the dreams of her patients using hypnosis. One patient in particular gave her vivid and disturbing descriptions of his dreams, right up until he was murdered with a strange knife that closely resembled something from one of his nightmares. Disturbed and frightened by his murder, Carolyn dug back through her notes, poring over them late into the night. Finally, she found some subtle clues that led her here, to Arkham, where he was previously an inmate in Arkham Asylum. Someone here has to know why a harmless man was murdered for talking about his dreams to his psychologist.",
            },
            {
              image : 'DarrellSimonsCard.png',
              name : 'Darrell Simons',
              profession : 'the Photographer',
              money : 4,
              clues: 1,
              curSanity : 4,
              maxSanity : 4,
              curStamina : 6,
              maxStamina : 6,
              home : 'Newspaper',
              focus : 2,
              specialAbilityTitle : 'Hometown Advantage',
              specialAbilityDescription : "Any Phase: Town Encounter: When drawing location encounters in Arkham, Darrell draws two cards and may choose whichever one of the two he wants. This ability does not work when drawing gate encounters in Other Worlds.",
              minSpeed : 2,
              minSneak : 0,
              minFight : 2,
              minWill : 1,
              minLore : 0,
              minLuck : 1,
              curSpeed : 2,
              curFight : 2,
              curLore : 0,
              storySoFar: "Even while growing up in Arkham, Darrell always knew that there was something not quite right about the strange little town. After graduating from high school, he went to work for the Arkham Advertiser as a photographer, and in the years since, he's crawled over every square inch of the city. Last night, however, Darrell saw something horrible-- something that has shaken his world to its core and torn away the safe illusions we all foster to protect our minds and our souls. His editor says he was just seeing things, but as he leaves the newspaper building, he knows just what he saw and he intends to show the world! This time he'll be more careful. This time he'll take pictures and prove that things are not normal in Arkham."
            },
            {
              image : 'DexterDrakeCard.png',
              name : 'Dexter Drake',
              profession : 'the Magician',
              money : 5,
              clues: 0,
              curSanity : 5,
              maxSanity : 5,
              curStamina : 5,
              maxStamina : 5,
              home : 'Ye Olde Magick Shoppe',
              focus : 2,
              specialAbilityTitle : 'Magical Gift',
              specialAbilityDescription : "Any Phase: Whenever \"The Great\" Drake draws one or more cards from the Spell deck, he draws one extra card and then discards one of the cards.",
              minSpeed : 2,
              minSneak : 1,
              minFight : 1,
              minWill : 0,
              minLore : 2,
              minLuck : 0,
              curSpeed : 2,
              curFight : 1,
              curLore : 2,
              storySoFar: " After returning from his stint in the army during WWI, Dexter became a stage magician, and proved to be very successful at his trade, but he always longed to find real magic. As they say, be careful what you wish for. Years later, in a rundown store, Dexter came across a burnt and torn fragment of the Necronomicon itself. Intrigued by this ancient piece of occult knowledge, Dexter began to use his wealth in search of the truth about the ancient lore, and what he found horrified him. Now, the more he learns, the less he wants to know, but his studies have led him to believe that a great evil will soon arise in Arkham. He knows that he may well be the only person with the ability to stop this evil from swallowing the world, so he has come to that sleepy town to speak with the proprietor of Ye Olde Magick Shoppe, one of the few magic shops that contain true lore, and not merely the stage tricks he once studied."
            },
            
            
            
            
            
            {
              image : 'GloriaGoldbergCard.png',
              name : 'Gloria Goldberg',
              profession : 'the Author',
              money : 7,
              clues: 2,
              curSanity : 6,
              maxSanity : 6,
              curStamina : 4,
              maxStamina : 4,
              home : 'Velma\'s Diner',
              focus : 2,
              specialAbilityTitle : 'Psychic Sensitivity',
              specialAbilityDescription : "Other World Encounter: When drawing gate encounters in Other Worlds, Gloria draws two cards that match the color of one of the Other World's encounter symbols, then chooses whichever one of the two she wants. This ability does not work when drawing location encounters in Arkham.",
              minSpeed : 1,
              minSneak : 3,
              minFight : 0,
              minWill : 2,
              minLore : 1,
              minLuck : 2,
              curSpeed : 1,
              curFight : 0,
              curLore : 1,
              storySoFar: "As a young girl, Gloria was haunted by terrible visions. After years of visiting doctors and some therapy, she learned to control her visions somewhat by writing stories. Her weird and disturbing fiction somehow spoke to the public in these troubled times, and has made her a bestselling writer. This evening, while leaving a book signing she's attending in Arkham, she was knocked to the ground by the most powerful vision she\'s ever experienced. Gloria saw the sky tear open, and a huge and montrous form pour out of the very air itself, wreaking untold havoc and killing thousands. As she sat on the ground with her arms wrapped around herself, Gloria knew, somehow, that this vision was real, and that it would come to pass unless she did something about it. Now, she finds herself in a run-down diner, sipping coffee and trying to decide what to do."
            },
            {
              image : 'HarveyWaltersCard.png',
              name : 'Harvey Walters',
              profession : 'the Professor',
              money : 5,
              clues: 1,
              curSanity : 7,
              maxSanity : 7,
              curStamina : 3,
              maxStamina : 3,
              home : 'Administration Building',
              focus : 2,
              specialAbilityTitle : 'Strong Mind',
              specialAbilityDescription : "Any Phase: Harvey reduces all Sanity losses he suffers by 1, to a minimum of 0.",
              minSpeed : 0,
              minSneak : 2,
              minFight : 0,
              minWill : 0,
              minLore : 3,
              minLuck : 1,
              curSpeed : 0,
              curFight : 0,
              curLore : 3,
              storySoFar: "Harvey is a visiting Professor at Miskatonic University. With Doctorates in History and Archaeology, he has uncovered several interesting artifacts over the years and learned a little of the arcane arts. Recently, by carefully studying the papers and talking to people in the streets, he has begun to detect a disturbance in the city-- something that could potentially herald the arrival of something unthinkable from beyond time and space. Checking his notes, Professor Walters prepares himself for one last trip into the streets of Arkham to confirm his theory. If he's right, it could spell the end of everything."
            },
            
            {
              image : 'JennyBarnesCard.jpg',
              name : 'Jenny Barnes',
              profession : 'the Dilettante',
              money : 10,
              curSanity : 6,
              maxSanity : 6,
              curStamina : 4,
              maxStamina : 4,
              clues: 0,
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
              curLore : 1,
              storySoFar: "Several months ago, Jenny was visiting Paris when she received a letter from her sister, Isabelle. In it, Isabelle rambled incoherantly, writing about men in dark cloaks following her wherever she went, and of hoofprints in the woods, left by an enormous goat. The outside of the envelope was partailly stained with blood, and it was mailed from Arkham. That was the last letter from Isabelle she received. Jenny has since returned to the States, coming to Arkham to find her missing sister. Stepping off the train from Boston into the dark autumn night, she believes that her sister was abducted by a strange cult, and is determined to find her and thwart the plans of those that took her... even if she has to save all of Arkham in the process."
            },
            
            
            
            {
              image : 'JoeDiamondCard.png',
              name : 'Joe Diamond',
              profession : ' the Private Eye',
              money : 8,
              clues: 3,
              curSanity : 4,
              maxSanity : 4,
              curStamina : 6,
              maxStamina : 6,
              home : 'Police Station',
              focus : 3,
              specialAbilityTitle : 'Hunches',
              specialAbilityDescription : "Any Phase: Joe rolls one extra bonus die when he spends a Clue token to add to a roll.",
              minSpeed : 3,
              minSneak : 1,
              minFight : 2,
              minWill : 0,
              minLore : 0,
              minLuck : 0,
              curSpeed : 3,
              curFight : 2,
              curLore : 0,
              storySoFar: "The job sounded simple enough-- pick up a statue at the Providence Museum and deliver it to a guy at the Silver Twilight Lodge. The money was good, and the dame who gave him the job seemed sincere. Sadly, things never seem to work out that easily for Joe. Now the statue is missing, two people are dead, strange cultists are on his tail, and all clues lead to Arkham. Lady Luck can be funny that way. He's already tried talking to the Sheriff, but that flatfoot proved to be worse than useless. Looks like it's once again going to be up to Joe Diamond to solve the case."
            },
            
            
            
            
            {
              image : 'KateWinthropCard.png',
              name : 'Kate Winthrop',
              profession : 'the Scientist',
              money : 7,
              clues: 2,
              curSanity : 6,
              maxSanity : 6,
              curStamina : 4,
              maxStamina : 4,
              home : 'Science Building',
              focus : 1,
              specialAbilityTitle : 'Science!',
              specialAbilityDescription : "Any Phase: Gates and monsters cannot appear in Kate's location due to her flux stabilizer. Monsters and gates do not disappear if she enters their location, however, and monsters can move into her location as usual.",
              minSpeed : 1,
              minSneak : 2,
              minFight : 1,
              minWill : 4,
              minLore : 2,
              minLuck : 1,
              curSpeed : 1,
              curFight : 1,
              curLore : 2,
              storySoFar: "A brilliant researcher, but a shy, lonely person, Kate Winthrop has been working at the Miskatonic Science Labs for 4 years now and her supervisor still doesn't know her name. That doesn't matter to her though, as she has been working to complete a private quest for most of that time. Almost 3 years ago, she watched as a device malfunctioned, and Professor Young, her long-time mentor and friend, was torn apart by an indistinct creature that shrieked and gibbered before vanishing into the night. Since then, she has delved into darker scientific studies, always hoping to find something that would allow her to find and defeat that creature along with others of its kind. Tonight, her research has finally paid off, allowing her to create a device that can defeat the alien beings she has detected in Arkham!"
            },
            
            
            
            
            
            
            {
              image : 'MandyThompsonCard.png',
              name : 'Mandy Thompson',
              profession : 'the Researcher',
              money : 7,
              clues: 4,
              curSanity : 5,
              maxSanity : 5,
              curStamina : 5,
              maxStamina : 5,
              home : 'Library',
              focus : 2,
              specialAbilityTitle : 'Research',
              specialAbilityDescription : "Any Phase: Once per turn, Mandy can activate this ability after any investigator (including herself) makes a skill check. That investigator then re-rolls all of the dice rolled for that check that did not result in successes.",
              minSpeed : 1,
              minSneak : 2,
              minFight : 0,
              minWill : 2,
              minLore : 1,
              minLuck : 0,
              curSpeed : 1,
              curFight : 0,
              curLore : 1,
              storySoFar: "Mandy came to Arkham several years ago looking for work as a researcher for Miskatonic University. Since then, she has worked with many of the University professors, delving into esoteric tomes filled with scientific information, historical reports, and sometimes even occult ramblings. It was while reading an old book of prophecies last week that she first felt that she had stumbled onto something big. Mandy came to believe that certain signs and portents described in the book were taking place in Arkham right now-- omens that indicated the return of a terrible being reffered to as an Ancient One, which would grind the cities of Man beneath its loathsome tread. Tonight, the full moon has turned blood red, which is the final omen of the return of the Ancient One. Slipping into the night, and armed with her knowledge of the prophecy, Mandy has decided to see if she can defy fate and stop these events from taking place."
            },
            
            
            
            
            
            
            
            
            
            {
              image : 'MichaelMcGlenCard.png',
              name : 'Michael McGlen',
              profession : 'the Gangster',
              money : 8,
              clues: 0,
              curSanity : 3,
              maxSanity : 3,
              curStamina : 7,
              maxStamina : 7,
              home : 'Ma\'s Boarding House',
              focus : 1,
              specialAbilityTitle : 'Strong Body',
              specialAbilityDescription : "Any Phase: Michael reduces all Stamina losses he suffers by 1, to a minimum of 0.",
              minSpeed : 2,
              minSneak : 1,
              minFight : 3,
              minWill : 1,
              minLore : 0,
              minLuck : 0,
              curSpeed : 2,
              curFight : 3,
              curLore : 0,
              storySoFar: "As a soldier in the O'Bannion gang, Michael didn't really believe in all this voodoo mumbo jumbo around town. Or at least, he didn't until the night of the Foreman job, when he saw Fast Louie Farrell pulled screaming into the river by a scaly green creature. As they say, seeing is believing and Michael is starting to believe. Now, he has gathered his belongings together in the room that he rents at Ma's Boarding House. Louie was a friend of his, and he won't rest until he finds out what's happening in this town and avenges his buddy ..."
            },
            
            
            
            {
              image : 'MontereyJackCard.png',
              name : 'Monterey Jack',
              profession : 'the Archaeologist',
              money : 7,
              clues: 1,
              curSanity : 3,
              maxSanity : 3,
              curStamina : 7,
              maxStamina : 7,
              home : 'Curiositie Shoppe',
              focus : 2,
              specialAbilityTitle : 'Archaeology',
              specialAbilityDescription : "Any Phase: Whenever Monterey draws one or more cards from the Unique item deck, he draws one extra card and then discards one of the cards.",
              minSpeed : 1,
              minSneak : 0,
              minFight : 2,
              minWill : 0,
              minLore : 1,
              minLuck : 2,
              curSpeed : 1,
              curFight : 2,
              curLore : 2,
              storySoFar: "Monterey has been a globe-trotting treasure hunter and adventurer for many years. Following in his father's footsteps, he's always tried to ensure that the specific value of his finds is preserved. Recently, he followed a lead on an odd prehistoric statue to Arkham. However, when he arrived, the man he came to buy the statue from was locked up in the asylum. Monterey was just about to give up and go home in disgust when a robed figure pushed past him. For just an instant, there was a flash of a silver pendant with a symbol on it Monterey would never forget. That symbol had been carved into his murdered father's forehead, and had haunted his dreams for years. Chasing after the mysterious figure, he turned a corner only to discover that he had lost his quarry. However, Monterey knows that somewhere in Arkham may lie the answer to the mystery of his father's murder, and he's not leaving until he finds it."
            },
            
            
            
            
            {
              image : 'VincentLeeCard.png',
              name : 'Vincent Lee',
              profession : 'the Doctor',
              money : 9,
              clues: 1,
              curSanity : 5,
              maxSanity : 5,
              curStamina : 5,
              maxStamina : 5,
              home : 'St. Mary\'s Hospital',
              focus : 2,
              specialAbilityTitle : 'Physician',
              specialAbilityDescription : "Upkeep: Dr. Lee may restore 1 Stamina to himself or another character in his location. He cannot raise a character's Stamina higher than that character's maximum Stamina.",
              minSpeed : 0,
              minSneak : 2,
              minFight : 0,
              minWill : 1,
              minLore : 2,
              minLuck : 1,
              curSpeed : 0,
              curFight : 0,
              curLore : 2,
              storySoFar: "A Yale graduate of Medicine, Vincent has recently moved to Arkham from Boston to practice at St. Mary's Hospital. Since his coming to Arkham, he has seen far too many horrible and unexplained deaths - an elderly victim torn apart by unknown wild animals, a healthy young man whose heart exploded, and so many others. Their faces haunt his dreams, especially the young man's terrified expression. After all this, small wonder that Vincent has begun to wonder if there's something sinister going on in this quiet Massachusetts town. Tonight Dr. Lee made the decision to investigate the mysteries of Arkham and stop the strange deaths. He is determined to see this through, even if in so doing he becomes another puzzle for the next doctor who comes to Arkham."
            },
            
            {
              image : 'SisterMaryCard.png',
              name : 'Sister Mary',
              profession : 'the Nun',
              money : 0,
              clues: 0,
              curSanity : 7,
              maxSanity : 7,
              curStamina : 3,
              maxStamina : 3,
              home : 'South Church',
              focus : 1,
              specialAbilityTitle : 'Guardian Angel',
              specialAbilityDescription : "Any Phase: Sister Mary is never Lost in Time and Space. Instead, if her Sanity is 0, she returns to Arkham Asylum. If her Stamina is 0, she returns to St. Mary's Hospital. If neither her Sanity or her Stamina are 0, she returns to South Church.",
              minSpeed : 1,
              minSneak : 1,
              minFight : 0,
              minWill : 1,
              minLore : 1,
              minLuck : 3,
              curSpeed : 1,
              curFight : 0,
              curLore : 1,
              storySoFar: "Sister Mary has served the Church faithfully for many years, so when she was sent to Arkham to work with Father Michael, a man whose writings she had admired for many years, she felt that she was truly blessed. Now, after witnessing Father Michael's strange mood swings and seeing some of the bizarre practices that go on in this town, she's beginning to feel that she may have been a bit too hasty ... For instance, last night, there was a knock on the door of the church, and when she answered it, there was nothing but a handwritten journal laying on the steps outside. Reading it, she learned of strange cults and terrible creatures that lurk in the darkness. Worse, when she laughingly showed it to Father Michael, he turned pale and threw it into the fire, yelling at her to forget what she'd seen. Now, gathering her things and quietly leaving South Church, Sister Mary has decided to investigate this town, and in so doing, reaffirm her faith."
            }
            
            
            
]);
