"use strict";

const movieName = document.querySelector(`.movie-name`);
const movieInfo = document.querySelector(`.movie-info`);
const movieStory = document.querySelector(`.movie-story`);
const buttonWatchTrailer = document.querySelector(`.trailer`);
const modal = document.querySelector(`.modal-display`);
const overlay = document.querySelector(`.overlay`);
const buttonCloseModal = document.querySelector(`.close-modal`);

const movie1 = document.querySelector(`.movie-1`);
const movie2 = document.querySelector(`.movie-2`);
const movie3 = document.querySelector(`.movie-3`);
const movie4 = document.querySelector(`.movie-4`);
const movie5 = document.querySelector(`.movie-5`);
const movie6 = document.querySelector(`.movie-6`);
const movie7 = document.querySelector(`.movie-7`);
const movie8 = document.querySelector(`.movie-8`);
const movie9 = document.querySelector(`.movie-9`);
const movie10 = document.querySelector(`.movie-10`);
const movie11 = document.querySelector(`.movie-11`);
const movie12 = document.querySelector(`.movie-12`);
const movie13 = document.querySelector(`.movie-13`);
const movie14 = document.querySelector(`.movie-14`);
const movie15 = document.querySelector(`.movie-15`);
const movie16 = document.querySelector(`.movie-16`);
const movie17 = document.querySelector(`.movie-17`);
const movie18 = document.querySelector(`.movie-18`);
const movie19 = document.querySelector(`.movie-19`);
const movie20 = document.querySelector(`.movie-20`);
const movie21 = document.querySelector(`.movie-21`);
const movie22 = document.querySelector(`.movie-22`);
const movie23 = document.querySelector(`.movie-23`);
const movie24 = document.querySelector(`.movie-24`);


movieInfo.setAttribute('style', 'white-space: pre;');

buttonCloseModal.addEventListener(`click`, () =>{
    modal.classList.add(`hidden-modal`);
    overlay.classList.add(`hidden-overlay`);
});

overlay.addEventListener(`click`, () =>{
    modal.classList.add(`hidden-modal`);
    overlay.classList.add(`hidden-overlay`);
});

movie1.addEventListener(`click`, () =>{
    modal.classList.remove(`hidden-modal`);
    overlay.classList.remove(`hidden-overlay`);

    movieName.textContent = `Fifty Shades Darker`;

    movieInfo.textContent = `
    Director: James Foley
    Actors: Dakota Johnson, Jamie Dornan, Eric Johnson
    Relese Date: 10 February 2017
    IMDb Rate: 4.5/10 
    `;

    movieStory.textContent = `Christian and Ana decide to rekindle their relationship, except this time there are no more rules or punishments. As they begin to get used to their newfound relationship, Christian's past begins to haunt Ana as Christian struggles with his innermost thoughts.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=n6BVyk7hty8`;
});

movie2.addEventListener(`click`, () =>{
    modal.classList.remove(`hidden-modal`);
    overlay.classList.remove(`hidden-overlay`);

    movieName.textContent = `The Fate Of The Furious`;

    movieInfo.textContent = `
    Director: F. Gary Gray
    Actors: Vin Diesel, Jason Statham, Dwayne Johnson
    Relese Date: 14 April 2017
    IMDb Rate: 6.6/10 
    `;

    movieStory.textContent = `Now that Dominic Toretto (Vin Diesel) and Letty Ortiz (Michelle Rodriguez) are on their honeymoon, and Brian (Paul Walker) and Mia (Jordana Brewster) have retired from the game, and the rest of the crew has been exonerated, the globetrotting team has found a semblance of a normal life. But when a mysterious woman seduces Dom into the world of crime he can't seem to escape, and a betrayal of those closest to him, they will face trials that will test them as never before. From the shores of Cuba and the streets of New York City to the icy plains off the arctic Barents Sea, the elite force will crisscross the globe to stop an anarchist from unleashing chaos on the world's stage, and to bring home the man who made them a family.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=JwMKRevYa_M`;
});

movie3.addEventListener(`click`, () =>{
    modal.classList.remove(`hidden-modal`);
    overlay.classList.remove(`hidden-overlay`);

    movieName.textContent = `Avengers Endgame`;

    movieInfo.textContent = `
    Director: Anthony Russo, Joe Russo
    Actors: Robert Downey Jr., Chris Evans, Mark Ruffalo
    Relese Date: 26 Apr 2019
    IMDb Rate: 8.4/10 
    `;

    movieStory.textContent = `After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face...`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=TcMBFSGVi1c`;
});

movie4.addEventListener(`click`, () =>{
    modal.classList.remove(`hidden-modal`);
    overlay.classList.remove(`hidden-overlay`);

    movieName.textContent = `Taken`;

    movieInfo.textContent = `
    Director: Pierre Morel
    Actors: Liam Neeson, Maggie Grace, Famke Janssen
    Relese Date: 30 January 2009
    IMDb Rate: 7.8/10 
    `;

    movieStory.textContent = `Seventeen year-old Kim is the pride and joy of her father Bryan Mills. Bryan is a retired agent who left the Central Intelligence Agency to be near Kim in California. Kim lives with her mother Lenore and her wealthy stepfather Stuart. Kim manages to convince her reluctant father to allow her to travel to Paris with her friend Amanda. When the girls arrive in Paris they share a cab with a stranger named Peter, and Amanda lets it slip that they are alone in Paris. Using this information an Albanian gang of human traffickers kidnaps the girls. Kim barely has time to call her father and give him information. Her father gets to speak briefly to one of the kidnappers and he promises to kill the kidnappers if they do not let his daughter go free. The kidnapper wishes him "good luck," so Bryan Mills travels to Paris to search for his daughter and her friend.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=XK9zL0ze9O4`;
});

movie5.addEventListener(`click`, () =>{
    modal.classList.remove(`hidden-modal`);
    overlay.classList.remove(`hidden-overlay`);

    movieName.textContent = `Wrath Of Man`;

    movieInfo.textContent = `
    Director: Guy Ritchie
    Actors: Jason Statham, Holt McCallany, Josh Hartnett
    Relese Date: 07 May 2021
    IMDb Rate: 7.1/10 
    `;

    movieStory.textContent = `Mysterious and wild-eyed, a new security guard for a cash truck surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman's ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=EFYEni2gsK0`;
});

movie6.addEventListener(`click`, () =>{
    modal.classList.remove(`hidden-modal`);
    overlay.classList.remove(`hidden-overlay`);

    movieName.textContent = `Jumanji: Welcome To The Jungle`;

    movieInfo.textContent = `
    Director: Jake Kasdan
    Actors: Dwayne Johnson, Karen Gillan, Kevin Hart
    Relese Date: 20 December 2017
    IMDb Rate: 6.9/10 
    `;

    movieStory.textContent = `In a brand-new Jumanji adventure, four high-school kids discover an old video-game console and are drawn into the game's jungle setting, literally becoming the adult avatars they chose. What they discover is that you don't just play Jumanji--you must survive it. To beat the game and return to the real world, they must go on the most dangerous adventure of their lives, discover what Alan Parrish left 20 years ago, and change the way they think about themselves --or they'll be stuck in the game forever, to be played by others without break`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=2QKg5SZ_35I`;
});

movie7.addEventListener(`click`, () =>{
    modal.classList.remove(`hidden-modal`);
    overlay.classList.remove(`hidden-overlay`);

    movieName.textContent = `Crank`;

    movieInfo.textContent = `
    Director: Mark Neveldine, Brian Taylor
    Actors: Jason Statham, Amy Smart, Carlos Sanz
    Relese Date: 01 September 2006
    IMDb Rate: 6.9/10 
    `;

    movieStory.textContent = `Poisoned by the potent and deadly mix of synthetic drugs called "The Beijing Cocktail" for getting in the way of the Triads, the tough-as-nails British hitman living in Los Angeles, Chev Chelios, wakes up with a terrible headache. With less than an hour to live, Chev will have to use all the help he can get from his doctor, and use every trick in the book, to consistently keep his heart rate up so that the adrenaline in his bloodstream staves off the effects of the deadly toxin. Now, his heart is pounding faster than any other human being, and as Chelios darts across the city's streets in search of an antidote and the arrogant criminal, Ricky Verona, to exact his revenge, he finds himself compelled to pick fights with no-nonsense drug dealers, murderous assassins, and an army of thugs. But, can Chelios stay alive long enough to protect those he loves, and make it through the day?`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=8rvYrVTnSWw`;
});

movie8.addEventListener(`click`, () =>{
    modal.classList.remove(`hidden-modal`);
    overlay.classList.remove(`hidden-overlay`);

    movieName.textContent = `Die Hard`;

    movieInfo.textContent = `
    Director: John McTiernan
    Actors: Bruce Willis, Alan Rickman, Bonnie Bedelia
    Relese Date: 20 July 1988
    IMDb Rate: 6.9/10 
    `;

    movieStory.textContent = `Poisoned by the potent and deadly mix of synthetic drugs called "The Beijing Cocktail" for getting in the way of the Triads, the tough-as-nails British hitman living in Los Angeles, Chev Chelios, wakes up with a terrible headache. With less than an hour to live, Chev will have to use all the help he can get from his doctor, and use every trick in the book, to consistently keep his heart rate up so that the adrenaline in his bloodstream staves off the effects of the deadly toxin. Now, his heart is pounding faster than any other human being, and as Chelios darts across the city's streets in search of an antidote and the arrogant criminal, Ricky Verona, to exact his revenge, he finds himself compelled to pick fights with no-nonsense drug dealers, murderous assassins, and an army of thugs. But, can Chelios stay alive long enough to protect those he loves, and make it through the day?`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=8rvYrVTnSWw`;
});

movie9.addEventListener(`click`, () =>{
    modal.classList.remove(`hidden-modal`);
    overlay.classList.remove(`hidden-overlay`);

    movieName.textContent = `Taken 2`;

    movieInfo.textContent = `
    Director: Olivier Megaton
    Actors: Liam Neeson, Famke Janssen, Maggie Grace
    Relese Date: 05 October 2012
    IMDb Rate: 6.2/10 
    `;

    movieStory.textContent = `The retired CIA agent Bryan Mills invites his teenage daughter Kim and his ex-wife Lenore, who has separated from her second husband, to spend a couple of days in Istanbul where he is working. Meanwhile, the patriarch of the community of the Albanian gang of human trafficking, Murad Krasniqi, seeks revenge for the death of his son and organizes another gang to kidnap Bryan and his family. Bryan and Lenore are abducted by the Albanians, but Kim escapes and is the only hope that Bryan has to escape and save Lenore.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=u48UrWtCn5E`;
});

movie10.addEventListener(`click`, () =>{
    modal.classList.remove(`hidden-modal`);
    overlay.classList.remove(`hidden-overlay`);

    movieName.textContent = `The Transporter`;

    movieInfo.textContent = `
    Director: Louis Leterrier, Corey Yuen
    Actors: Jason Statham, Shu Qi, Matt Schulze
    Relese Date: 11 October 2002
    IMDb Rate: 6.8/10 
    `;

    movieStory.textContent = `Ex-Special Forces operator Frank Martin lives what seems to be a quiet life along the French Mediterranean, hiring himself out as a mercenary "transporter" who moves goods--human or otherwise--from one place to another. No questions asked. Carrying out mysterious and sometimes dangerous tasks in his tricked-out BMW, Frank adheres to a strict set of rules, which he never breaks. Rule One: Never change the deal. Rule Two: No names--Frank doesn't want to know whom he's working for, or what he's transporting. Rule Three: never look in the package. Frank's newest transport seems no different from the countless ones he's done in the past. He's been hired by an American known only as "Wall Street" to make a delivery; but when Frank stops along the route, he notices his package is moving. Violating Rule Three, Frank looks inside the bag, finding its contents to be a beautiful, gagged woman. Frank's steadfast adherence to his other two rules--which make up his basic code of survival--also quickly fails, hurtling him and his new companion on a road leading to shocking secrets, deadly complications, and the last thing that Frank ever expected to come to believe: that rules are made to be broken.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=7FnbLyv2oio`;
});

movie11.addEventListener(`click`, () =>{
    modal.classList.remove(`hidden-modal`);
    overlay.classList.remove(`hidden-overlay`);

    movieName.textContent = `The Godfather`;

    movieInfo.textContent = `
    Director: Francis Ford Coppola
    Actors: Marlon Brando, Al Pacino, James Caan
    Relese Date: 24 March 1972
    IMDb Rate: 9.2/10 
    `;

    movieStory.textContent = `The Godfather "Don" Vito Corleone is the head of the Corleone mafia family in New York. He is at the event of his daughter's wedding. Michael, Vito's youngest son and a decorated WW II Marine is also present at the wedding. Michael seems to be uninterested in being a part of the family business. Vito is a powerful man, and is kind to all those who give him respect but is ruthless against those who do not. But when a powerful and treacherous rival wants to sell drugs and needs the Don's influence for the same, Vito refuses to do it. What follows is a clash between Vito's fading old values and the new ways which may cause Michael to do the thing he was most reluctant in doing and wage a mob war against all the other mafia families which could tear the Corleone family apart.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=UaVTIH8mujA`;
});

movie12.addEventListener(`click`, () =>{
    modal.classList.remove(`hidden-modal`);
    overlay.classList.remove(`hidden-overlay`);

    movieName.textContent = `The Equalizer`;

    movieInfo.textContent = `
    Director: Antoine Fuqua
    Actors: Denzel Washington, Marton Csokas, Chloë Grace Moretz
    Relese Date: 26 September 2014
    IMDb Rate: 7.2/10 
    `;

    movieStory.textContent = `Robert McCall is a former special service commando who faked his own death in hopes of living out a quiet life. Instead, he comes out of his self-imposed retirement to save a young girl, and finds his desire for justice reawakened after coming face-to-face with members of a brutal Russian gang. McCall becomes the go-to man when the helpless require the kind of vengeance they would never find without his skills.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=VjctHUEmutw`;
});

movie13.addEventListener(`click`, () =>{
    modal.classList.remove(`hidden-modal`);
    overlay.classList.remove(`hidden-overlay`);

    movieName.textContent = `Crank: High Voltage`;

    movieInfo.textContent = `
    Director: Mark Neveldine, Brian Taylor
    Actors: Jason Statham, Amy Smart, Clifton Collins Jr.
    Relese Date: 17 April 2009
    IMDb Rate: 6.1/10 
    `;

    movieStory.textContent = `Chev Chelios survives a fall from the sky, sort of. He's in an unknown location, sedated, while various Chinese are harvesting his organs. His heart is gone, in an ice chest; a temporary in its place. Chev escapes, knowing only the name of the guy with the ice chest. He calls Doc Miles, an unlicensed cardiologist, who tells him there's only an hour's life in the artificial heart: keep it charged. Chev needs to find his own heart and get to Doc for a transplant. He starts his time-limited pursuit of shadowy figures, the ice chest, and his heart aided by Eve, Rei, and Venus - a stripper, a prostitute, and a pal with Tourette's - constantly needing an electric charge to keep going.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=t2koYVqwzT4`;
});

movie14.addEventListener(`click`, () =>{
    modal.classList.remove(`hidden-modal`);
    overlay.classList.remove(`hidden-overlay`);

    movieName.textContent = `Die Hard 2`;

    movieInfo.textContent = `
    Director: Renny Harlin
    Actors: Bruce Willis, William Atherton, Bonnie Bedelia
    Relese Date: 03 July 1990
    IMDb Rate: 7.1/10 
    `;

    movieStory.textContent = `After the terrifying events in LA, John McClane (Willis) is about to go through it all again. A team of terrorists, led by Col. Stuart (Sadler) is holding the entire airport hostage. The terrorists are planning to rescue a drug lord from justice. In order to do so, they have seized control of all electrical equipment affecting all planes. With no runway lights available, all aircraft have to remain in the air, with fuel running low, McClane will need to be fast`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=CvHp7xJZ4_U`;
});

movie15.addEventListener(`click`, () =>{
    modal.classList.remove(`hidden-modal`);
    overlay.classList.remove(`hidden-overlay`);

    movieName.textContent = `Taken 3`;

    movieInfo.textContent = `
    Director: Olivier Megaton
    Actors: Liam Neeson, Forest Whitaker, Maggie Grace
    Relese Date: 16 December 2014
    IMDb Rate: 6.0/10 
    `;

    movieStory.textContent = `Liam Neeson returns as ex-covert operative Bryan Mills, whose long awaited reconciliation with his ex-wife is tragically cut short when she is brutally murdered. Consumed with rage, and framed for the crime, he goes on the run to evade the relentless pursuit of the CIA, FBI and the police. For one last time, Mills must use his "particular set of skills," to track down the real killers, exact his unique brand of justice, and protect the only thing that matters to him now - his daughter.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=JuU0M2xBasc`;
});

movie16.addEventListener(`click`, () =>{
    modal.classList.remove(`hidden-modal`);
    overlay.classList.remove(`hidden-overlay`);

    movieName.textContent = `I Am Legend`;

    movieInfo.textContent = `
    Director: Francis Lawrence
    Actors: Will Smith, Alice Braga, Charlie Tahan
    Relese Date: 14 December 2007
    IMDb Rate: 7.2/10 
    `;

    movieStory.textContent = `Robert Neville (Will Smith) is a scientist who was unable to stop the spread of the terrible virus that was incurable and man-made in this post-apocalyptic action thriller. Immune, Neville is now the last human survivor in what is left of New York City and perhaps the world. For three years, Neville has faithfully sent out daily radio messages, desperate to find any other survivors who might be out there. But he is not alone. Mutant victims of the plague - the Infected - lurk in the shadows - watching Neville's every move - waiting for him to make a fatal mistake. Perhaps mankind's last, best hope, Neville is driven by only one remaining mission: to find a way to reverse the effects of the virus using his own immune blood. But he knows he is outnumbered - and quickly running out of time.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=dtKMEAXyPkg`;
});

movie17.addEventListener(`click`, () =>{
    modal.classList.remove(`hidden-modal`);
    overlay.classList.remove(`hidden-overlay`);

    movieName.textContent = `Transporter 2`;

    movieInfo.textContent = `
    Director: Louis Leterrier
    Actors: Jason Statham, Amber Valletta, Kate Nauta
    Relese Date: 02 September 2005
    IMDb Rate: 6.3/10 
    `;

    movieStory.textContent = `Frank Martin is the best in the business. The ex-Special Forces operative hires himself out as a mercenary "transporter" who moves goods--human or otherwise. Very simple, he delivers, no questions asked. Frank has relocated from the French Mediterranean to Miami, Florida, where as a favor to a friend, Frank is driving for the wealthy Billings family. There's very little that can surprise The Transporter, but young Jack Billings has done just that; Frank has unexpectedly bonded with Jack, age 6, who he drives to and from school. But when Jack is kidnapped, Frank must use his battle-tested combat skills to retrieve the boy and thwart the kidnappers' master plan to release a virus that will kill anyone with whom it comes in contact.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=rEggzzOVOyo`;
});

movie18.addEventListener(`click`, () =>{
    modal.classList.remove(`hidden-modal`);
    overlay.classList.remove(`hidden-overlay`);

    movieName.textContent = `The Equalizer 2`;

    movieInfo.textContent = `
    Director: Antoine Fuqua
    Actors: Denzel Washington, Pedro Pascal, Ashton Sanders
    Relese Date: 20 July 2018
    IMDb Rate: 6.7/10 
    `;

    movieStory.textContent = `Director Antoine Fuqua reunites with Denzel Washington in this sequel to 2014's The Equalizer. Washington resumes his role as Robert McCall: a retired CIA Black Ops operative who now works as a Lyft driver and moonlights as a vigilante. When his long-time friend is murdered he embarks on a relentless, globe-trotting quest for vengeance.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=HyNJ3UrGk_I`;
});

movie19.addEventListener(`click`, () =>{
    modal.classList.remove(`hidden-modal`);
    overlay.classList.remove(`hidden-overlay`);

    movieName.textContent = `Transporter 3`;

    movieInfo.textContent = `
    Director: Olivier Megaton
    Actors: Jason Statham, Robert Knepper, Natalya Rudakova
    Relese Date: 26 November 2008
    IMDb Rate: 6.0/10 
    `;

    movieStory.textContent = `Toxic waste bubbles in a ship waiting permission to dock in Odessa. Frank Martin turns down a job in Marseilles, referring it to a pal. A short time later, the pal, wounded by gunfire, crashes his car into Frank's living room and dies, leaving a young woman in the back seat. The employer of the dead man shows up, forces Frank to take the job, snaps a bracelet on his wrist that will explode if Frank gets more than 75 feet from his car, and sends Frank on a journey east with the young woman and a trunk full of something. She's Valentina, nearly mute. Can Frank figure out what's going on, deliver the package, and escape alive? And what does the ship have to do with it?`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=Pbh3CDBNIQA`;
});

movie20.addEventListener(`click`, () =>{
    modal.classList.remove(`hidden-modal`);
    overlay.classList.remove(`hidden-overlay`);

    movieName.textContent = `Die Hard With A Vengeance`;

    movieInfo.textContent = `
    Director: John McTiernan
    Actors: Bruce Willis, Jeremy Irons, Samuel L. Jackson
    Relese Date: 19 May 1995
    IMDb Rate: 7.6/10 
    `;

    movieStory.textContent = `John McClane is now almost a full-blown alcoholic and is suspended from the NYPD. But when a bomb goes off in the Bonwit Teller Department Store the police go insane trying to figure out what's going on. Soon, a man named Simon calls and asks for McClane. Simon tells Inspector Walter Cobb that McClane is going to play a game called "Simon Says". He says that McClane is going to do the tasks he assigns him. If not, he'll set off another bomb. With the help of a Harlem electrician, John McClane must race all over New York trying to figure out the frustrating puzzles that the crafty terrorist gives him. But when a bomb goes off in a subway station right by the Federal Reserve (the biggest gold storage in the world) things start to get heated.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=gQ0uSh2Hgcs`;
});

movie21.addEventListener(`click`, () =>{
    modal.classList.remove(`hidden-modal`);
    overlay.classList.remove(`hidden-overlay`);

    movieName.textContent = `The Commuter`;

    movieInfo.textContent = `
    Director: Jaume Collet-Serra
    Actors: Liam Neeson, Vera Farmiga, Patrick Wilson
    Relese Date: 12 January 2018
    IMDb Rate: 6.3/10 
    `;

    movieStory.textContent = `Michael MacCauley, a former police officer and now a hard-working life-insurance salesman and a caring family man, has been taking the commuter rail to New York for the past ten years. But, things will take an unexpected turn when, on one of his daily journeys, the cryptic passenger, Joanna, makes Michael a generous and tempting offer to locate a single commuter or face grave consequences. Is this a sick joke, or is this, indeed, a dangerous situation? Now, as Michael races against the clock to solve this wicked conundrum, everyone aboard is a suspect, in a deal that there is more than meets the eye. Can he decide in time who is the one?`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=aDshY43Ol2U`;
});

movie22.addEventListener(`click`, () =>{
    modal.classList.remove(`hidden-modal`);
    overlay.classList.remove(`hidden-overlay`);

    movieName.textContent = `The Revenant`;

    movieInfo.textContent = `
    Director: Alejandro G. Iñárritu
    Actors: Leonardo DiCaprio, Tom Hardy, Will Poulter
    Relese Date: 08 January 2016
    IMDb Rate: 8.0/10 
    `;

    movieStory.textContent = `While exploring uncharted wilderness in 1823, legendary frontiersman Hugh Glass sustains injuries from a brutal bear attack. When his hunting team leaves him for dead, Glass must utilize his survival skills to find a way back home while avoiding natives on their own hunt. Grief-stricken and fueled by vengeance, Glass treks through the wintry terrain to track down John Fitzgerald, the former confidant who betrayed and abandoned him.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=LoebZZ8K5N0`;
});

movie23.addEventListener(`click`, () =>{
    modal.classList.remove(`hidden-modal`);
    overlay.classList.remove(`hidden-overlay`);

    movieName.textContent = `Central Intelligence`;

    movieInfo.textContent = `
    Director: Rawson Marshall Thurber
    Actors: Dwayne Johnson, Kevin Hart, Danielle Nicolet
    Relese Date: 17 June 2016
    IMDb Rate: 6.3/10 
    `;

    movieStory.textContent = `Calvin Joyner was voted in high school the guy most likely to succeed. 20 years later he's an accountant. As his high school reunion approaches, he tries to make contact with his old schoolmates. And someone named Bob Stone contacts him. He says that he was known as Robbie Weirdicht in school. Calvin remembers that he was picked on, as a matter of fact after an extremely nasty prank he left school. They agree to meet and Calvin is surprised by how much he has changed. Bob asks Calvin to help him out. He says yes and the next thing he knows some men burst into his home. They're CIA, the one in charge is looking for Stone, she says he's a rogue agent. When they can't find Bob they leave. Later he approaches Calvin telling him, he is not a rogue agent, he's trying to find a person known as the Black Badger who is planning to sell some information that in the wrong hands can be disastrous. so he needs Calvin's help to stop him. Calvin's not sure whom he should believe.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=0FKctBraQj0`;
});

movie24.addEventListener(`click`, () =>{
    modal.classList.remove(`hidden-modal`);
    overlay.classList.remove(`hidden-overlay`);

    movieName.textContent = `The Butterfly Effect`;

    movieInfo.textContent = `
    Director: Eric Bress, J. Mackye Gruber
    Actors: Ashton Kutcher, Amy Smart, Melora Walters
    Relese Date: 23 January 2004
    IMDb Rate: 7.4/10 
    `;

    movieStory.textContent = `As a child, Evan Treborn was afflicted with blackouts where he would be in one place one minute and then another the next, remembering absolutely nothing in-between. Now all grown up and in college, he decides to read from an old journal he wrote to remember stuff that might have happened in the in-between, and suddenly finds himself back at a certain point in his life. He realizes that those blackouts he had were actually empty spaces of time he had to fill up later in life. Attempting to use this ability to undo unpleasant past events, Evan starts to find that every time he goes back and tries to fix things, he ends up making everything worse. How can he prevent more tragedies from happening and save the one girl he ever loved, Kayleigh (Amy Smart)?`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=B8_dgqfPXFg`;
});