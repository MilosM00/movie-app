"use strict";

const inputSearch = document.querySelector(`.search`);
const buttonSearch = document.querySelector(`.button-search`);
const movieName = document.querySelector(`.movie-name`);
const movieInfo = document.querySelector(`.movie-info`);
const movieStory = document.querySelector(`.movie-story`);
const buttonWatchTrailer = document.querySelector(`.trailer`);
const modal = document.querySelector(`.modal-display`);
const overlay = document.querySelector(`.overlay`);
const buttonCloseModal = document.querySelector(`.close-modal`);

const moviesPageOne = document.querySelector(`.movies-page1`);
const moviesPageTwo = document.querySelector(`.movies-page2`);
const moviesPageThree = document.querySelector(`.movies-page3`);
const buttonPage1 = document.querySelector(`.button-page-one`);
const buttonPage2 = document.querySelector(`.button-page-two`);
const buttonPage3 = document.querySelector(`.button-page-three`);

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

const movie25 = document.querySelector(`.movie-25`);
const movie26 = document.querySelector(`.movie-26`);
const movie27 = document.querySelector(`.movie-27`);
const movie28 = document.querySelector(`.movie-28`);
const movie29 = document.querySelector(`.movie-29`);
const movie30 = document.querySelector(`.movie-30`);
const movie31 = document.querySelector(`.movie-31`);
const movie32 = document.querySelector(`.movie-32`);
const movie33 = document.querySelector(`.movie-33`);
const movie34 = document.querySelector(`.movie-34`);
const movie35 = document.querySelector(`.movie-35`);
const movie36 = document.querySelector(`.movie-36`);
const movie37 = document.querySelector(`.movie-37`);
const movie38 = document.querySelector(`.movie-38`);
const movie39 = document.querySelector(`.movie-39`);
const movie40 = document.querySelector(`.movie-40`);
const movie41 = document.querySelector(`.movie-41`);
const movie42 = document.querySelector(`.movie-42`);
const movie43 = document.querySelector(`.movie-43`);
const movie44 = document.querySelector(`.movie-44`);
const movie45 = document.querySelector(`.movie-45`);
const movie46 = document.querySelector(`.movie-46`);
const movie47 = document.querySelector(`.movie-47`);
const movie48 = document.querySelector(`.movie-48`);

const movie49 = document.querySelector(`.movie-49`);
const movie50 = document.querySelector(`.movie-50`);
const movie51 = document.querySelector(`.movie-51`);
const movie52 = document.querySelector(`.movie-52`);
const movie53 = document.querySelector(`.movie-53`);
const movie54 = document.querySelector(`.movie-54`);
const movie55 = document.querySelector(`.movie-55`);
const movie56 = document.querySelector(`.movie-56`);
const movie57 = document.querySelector(`.movie-57`);
const movie58 = document.querySelector(`.movie-58`);
const movie59 = document.querySelector(`.movie-59`);
const movie60 = document.querySelector(`.movie-60`);
const movie61 = document.querySelector(`.movie-61`);
const movie62 = document.querySelector(`.movie-62`);
const movie63 = document.querySelector(`.movie-63`);
const movie64 = document.querySelector(`.movie-64`);
const movie65 = document.querySelector(`.movie-65`);
const movie66 = document.querySelector(`.movie-66`);
const movie67 = document.querySelector(`.movie-67`);
const movie68 = document.querySelector(`.movie-68`);
const movie69 = document.querySelector(`.movie-69`);
const movie70 = document.querySelector(`.movie-70`);
const movie71 = document.querySelector(`.movie-71`);
const movie72 = document.querySelector(`.movie-72`);


movieInfo.setAttribute('style', 'white-space: pre;');
moviesPageOne.classList.remove(`hidden-page1`);
buttonPage1.style.backgroundColor = `rgb(255, 255, 255)`;
buttonPage1.style.color = `rgb(0, 0, 0)`;

buttonPage1.addEventListener(`click`, () =>{
    buttonPage1.style.backgroundColor = `rgb(255, 255, 255)`;
    buttonPage1.style.color = `rgb(0, 0, 0)`;
    buttonPage2.style.backgroundColor = `transparent`;
    buttonPage2.style.color = `rgb(255, 255, 255)`;
    buttonPage3.style.backgroundColor = `transparent`;
    buttonPage3.style.color = `rgb(255, 255, 255)`;

    moviesPageOne.classList.remove(`hidden-page1`);
    moviesPageTwo.classList.add(`hidden-page2`);
    moviesPageThree.classList.add(`hidden-page3`);

    document.body.scrollIntoView();
});

buttonPage2.addEventListener(`click`, () =>{
    buttonPage2.style.backgroundColor = `rgb(255, 255, 255)`;
    buttonPage2.style.color = `rgb(0, 0, 0)`;
    buttonPage1.style.backgroundColor = `transparent`;
    buttonPage1.style.color = `rgb(255, 255, 255)`;
    buttonPage3.style.backgroundColor = `transparent`;
    buttonPage3.style.color = `rgb(255, 255, 255)`;

    moviesPageOne.classList.add(`hidden-page1`);
    moviesPageTwo.classList.remove(`hidden-page2`);
    moviesPageThree.classList.add(`hidden-page3`);

    document.body.scrollIntoView();
});

buttonPage3.addEventListener(`click`, () =>{
    buttonPage3.style.backgroundColor = `rgb(255, 255, 255)`;
    buttonPage3.style.color = `rgb(0, 0, 0)`;
    buttonPage2.style.backgroundColor = `transparent`;
    buttonPage2.style.color = `rgb(255, 255, 255)`;
    buttonPage1.style.backgroundColor = `transparent`;
    buttonPage1.style.color = `rgb(255, 255, 255)`;

    moviesPageOne.classList.add(`hidden-page1`);
    moviesPageTwo.classList.add(`hidden-page2`);
    moviesPageThree.classList.remove(`hidden-page3`);

    document.body.scrollIntoView();
});

buttonCloseModal.addEventListener(`click`, () =>{
    closeModalFunction();
});

overlay.addEventListener(`click`, () =>{
    closeModalFunction();
});

document.addEventListener(`keydown`, function(e){
    if(e.key === `Escape` && !modal.classList.contains(`hidden-modal`) && !overlay.classList.contains(`hidden-overlay`)){
        closeModalFunction();
    }
});

movie1.addEventListener(`click`, () =>{
    movieFunction1();
});

movie2.addEventListener(`click`, () =>{
    movieFunction2();
});

movie3.addEventListener(`click`, () =>{
    movieFunction3();
});

movie4.addEventListener(`click`, () =>{
    movieFunction4();
});

movie5.addEventListener(`click`, () =>{
    movieFunction5();
});

movie6.addEventListener(`click`, () =>{
    movieFunction6();
});

movie7.addEventListener(`click`, () =>{
    movieFunction7();
});

movie8.addEventListener(`click`, () =>{
    movieFunction8();
});

movie9.addEventListener(`click`, () =>{
    movieFunction9();
});

movie10.addEventListener(`click`, () =>{
    movieFunction10();
});

movie11.addEventListener(`click`, () =>{
    movieFunction11();
});

movie12.addEventListener(`click`, () =>{
    movieFunction12();
});

movie13.addEventListener(`click`, () =>{
    movieFunction13();
});

movie14.addEventListener(`click`, () =>{
    movieFunction14();
});

movie15.addEventListener(`click`, () =>{
    movieFunction15();
});

movie16.addEventListener(`click`, () =>{
    movieFunction16();
});

movie17.addEventListener(`click`, () =>{
    movieFunction17();
});

movie18.addEventListener(`click`, () =>{
    movieFunction18();
});

movie19.addEventListener(`click`, () =>{
    movieFunction19();
});

movie20.addEventListener(`click`, () =>{
    movieFunction20();
});

movie21.addEventListener(`click`, () =>{
    movieFunction21();
});

movie22.addEventListener(`click`, () =>{
    movieFunction22();
});

movie23.addEventListener(`click`, () =>{
    movieFunction23();
});

movie24.addEventListener(`click`, () =>{
    movieFunction24();
});

movie25.addEventListener(`click`, () =>{
    movieFunction25();
});

movie26.addEventListener(`click`, () =>{
    movieFunction26();
});

movie27.addEventListener(`click`, () =>{
    movieFunction27();
});

movie28.addEventListener(`click`, () =>{
    movieFunction28();
});

movie29.addEventListener(`click`, () =>{
    movieFunction29();
});

movie30.addEventListener(`click`, () =>{
    movieFunction30();
});

movie31.addEventListener(`click`, () =>{
    movieFunction31();
});

movie32.addEventListener(`click`, () =>{
    movieFunction32();
});

movie33.addEventListener(`click`, () =>{
    movieFunction33();
});

movie34.addEventListener(`click`, () =>{
    movieFunction34();
});

movie35.addEventListener(`click`, () =>{
    movieFunction35();
});

movie36.addEventListener(`click`, () =>{
    movieFunction36();
});

movie37.addEventListener(`click`, () =>{
    movieFunction37();
});

movie38.addEventListener(`click`, () =>{
    movieFunction38();
});

movie39.addEventListener(`click`, () =>{
    movieFunction39();
});

movie40.addEventListener(`click`, () =>{
    movieFunction40();
});

movie41.addEventListener(`click`, () =>{
    movieFunction41();
});

movie42.addEventListener(`click`, () =>{
    movieFunction42();
});

movie43.addEventListener(`click`, () =>{
    movieFunction43();
});

movie44.addEventListener(`click`, () =>{
    movieFunction44();
});

movie45.addEventListener(`click`, () =>{
    movieFunction45();
});

movie46.addEventListener(`click`, () =>{
    movieFunction46();
});

movie47.addEventListener(`click`, () =>{
    movieFunction47();
});

movie48.addEventListener(`click`, () =>{
    movieFunction48();
});

movie49.addEventListener(`click`, () =>{
    movieFunction49();
});

movie50.addEventListener(`click`, () =>{
    movieFunction50();
});

movie51.addEventListener(`click`, () =>{
    movieFunction51();
});

movie52.addEventListener(`click`, () =>{
    movieFunction52();
});

movie53.addEventListener(`click`, () =>{
    movieFunction53();
});

movie54.addEventListener(`click`, () =>{
    movieFunction54();
});

movie55.addEventListener(`click`, () =>{
    movieFunction55();
});

movie56.addEventListener(`click`, () =>{
    movieFunction56();
});

movie57.addEventListener(`click`, () =>{
    movieFunction57();
});

movie58.addEventListener(`click`, () =>{
    movieFunction58();
});

movie59.addEventListener(`click`, () =>{
    movieFunction59();
});

movie60.addEventListener(`click`, () =>{
    movieFunction60();
});

movie61.addEventListener(`click`, () =>{
    movieFunction61();
});

movie62.addEventListener(`click`, () =>{
    movieFunction62();
});

movie63.addEventListener(`click`, () =>{
    movieFunction63();
});

movie64.addEventListener(`click`, () =>{
    movieFunction64();
});

movie65.addEventListener(`click`, () =>{
    movieFunction65();
});

movie66.addEventListener(`click`, () =>{
    movieFunction66();
});

movie67.addEventListener(`click`, () =>{
    movieFunction67();
});

movie68.addEventListener(`click`, () =>{
    movieFunction68();
});

movie69.addEventListener(`click`, () =>{
    movieFunction69();
});

movie70.addEventListener(`click`, () =>{
    movieFunction70();
});

movie71.addEventListener(`click`, () =>{
    movieFunction71();
});

movie72.addEventListener(`click`, () =>{
    movieFunction72();
});

buttonSearch.addEventListener(`click`, () =>{
    searchFunction();
});

inputSearch.addEventListener(`keyup`, (e) =>{
    if(e.keyCode === 13){
        e.preventDefault();
        searchFunction();
    }
});



const searchFunction = function(){
    if(inputSearch.value.toLowerCase() === `fifty shades darker`){
        movieFunction1();
    }

    if(inputSearch.value.toLowerCase() === `the fate of the forious`){
        movieFunction2();
    }

    if(inputSearch.value.toLowerCase() === `avengers endgame`){
        movieFunction3();
    }

    if(inputSearch.value.toLowerCase() === `taken`){
        movieFunction4();
    }

    if(inputSearch.value.toLowerCase() === `wrath of man`){
        movieFunction5();
    }

    if(inputSearch.value.toLowerCase() === `jumanji welcome to the jungle` || inputSearch.value.toLowerCase() === `jumanji`){
        movieFunction6();
    }

    if(inputSearch.value.toLowerCase() === `crank`){
        movieFunction7();
    }

    if(inputSearch.value.toLowerCase() === `die hard`){
        movieFunction8();
    }

    if(inputSearch.value.toLowerCase() === `taken 2`){
        movieFunction9();
    }

    if(inputSearch.value.toLowerCase() === `the transporter` || inputSearch.value.toLowerCase() === `transporter`){
        movieFunction10();
    }

    if(inputSearch.value.toLowerCase() === `the godfather` || inputSearch.value.toLowerCase() === `godfather`){
        movieFunction11();
    }

    if(inputSearch.value.toLowerCase() === `the equalizer` || inputSearch.value.toLowerCase() === `equalizer`){
        movieFunction12();
    }

    if(inputSearch.value.toLowerCase() === `crank 2` || inputSearch.value.toLowerCase() === `crank high voltage`){
        movieFunction13();
    }

    if(inputSearch.value.toLowerCase() === `die hard 2`){
        movieFunction14();
    }

    if(inputSearch.value.toLowerCase() === `taken 3`){
        movieFunction15();
    }

    if(inputSearch.value.toLowerCase() === `i am legend`){
        movieFunction16();
    }

    if(inputSearch.value.toLowerCase() === `transporter 2` || inputSearch.value.toLowerCase() === `the transporter 2`){
        movieFunction17();
    }

    if(inputSearch.value.toLowerCase() === `the equalizer 2` || inputSearch.value.toLowerCase() === `equalizer 2`){
        movieFunction18();
    }

    if(inputSearch.value.toLowerCase() === `the transporter 3` || inputSearch.value.toLowerCase() === `transporter 3`){
        movieFunction19();
    }

    if(inputSearch.value.toLowerCase() === `die hard 3` || inputSearch.value.toLowerCase() === `die hard with a vengeance`){
        movieFunction20();
    }

    if(inputSearch.value.toLowerCase() === `the commuter` || inputSearch.value.toLowerCase() === `commuter`){
        movieFunction21();
    }

    if(inputSearch.value.toLowerCase() === `the revenant` || inputSearch.value.toLowerCase() === `revenant`){
        movieFunction22();
    }

    if(inputSearch.value.toLowerCase() === `central intelligence`){
        movieFunction23();
    }

    if(inputSearch.value.toLowerCase() === `the butterfly effect` || inputSearch.value.toLowerCase() === `butterfly effect`){
        movieFunction24();
    }

    if(inputSearch.value.toLowerCase() === `the dictator` || inputSearch.value.toLowerCase() === `dictator`){
        movieFunction25();
    }

    if(inputSearch.value.toLowerCase() === `the mechanic` || inputSearch.value.toLowerCase() === `mechanic`){
        movieFunction26();
    }

    if(inputSearch.value.toLowerCase() === `rambo` || inputSearch.value.toLowerCase() === `rambo first blood`){
        movieFunction27();
    }

    if(inputSearch.value.toLowerCase() === `r.i.p.d.` || inputSearch.value.toLowerCase() === `ripd`){
        movieFunction28();
    }

    if(inputSearch.value.toLowerCase() === `rampage`){
        movieFunction29();
    }

    if(inputSearch.value.toLowerCase() === `the wolf of wall street`){
        movieFunction30();
    }

    if(inputSearch.value.toLowerCase() === `300`){
        movieFunction31();
    }

    if(inputSearch.value.toLowerCase() === `hachi` || inputSearch.value.toLowerCase() === `hachi a dog's tale`){
        movieFunction32();
    }

    if(inputSearch.value.toLowerCase() === `ip man`){
        movieFunction33();
    }

    if(inputSearch.value.toLowerCase() === `mechanic 2` || inputSearch.value.toLowerCase() === `the mechanic 2` || inputSearch.value.toLowerCase() === `mechanic resurrection`){
        movieFunction34();
    }

    if(inputSearch.value.toLowerCase() === `rambo 2` || inputSearch.value.toLowerCase() === `rambo first blood 2`){
        movieFunction35();
    }

    if(inputSearch.value.toLowerCase() === `shutter island`){
        movieFunction36();
    }

    if(inputSearch.value.toLowerCase() === `homefront`){
        movieFunction37();
    }

    if(inputSearch.value.toLowerCase() === `interstellar`){
        movieFunction38();
    }

    if(inputSearch.value.toLowerCase() === `ip man 2`){
        movieFunction39();
    }

    if(inputSearch.value.toLowerCase() === `rambo 3` || inputSearch.value.toLowerCase() === `rambo first blood 3`){
        movieFunction40();
    }

    if(inputSearch.value.toLowerCase() === `the time machine` || inputSearch.value.toLowerCase() === `time machine`){
        movieFunction41();
    }

    if(inputSearch.value.toLowerCase() === `world war z`){
        movieFunction42();
    }

    if(inputSearch.value.toLowerCase() === `ip man 3`){
        movieFunction43();
    }

    if(inputSearch.value.toLowerCase() === `looper`){
        movieFunction44();
    }

    if(inputSearch.value.toLowerCase() === `the brothers grimsby` || inputSearch.value.toLowerCase() === `brothers grimsby`){
        movieFunction45();
    }

    if(inputSearch.value.toLowerCase() === `focus`){
        movieFunction46();
    }

    if(inputSearch.value.toLowerCase() === `bloodshot`){
        movieFunction47();
    }

    if(inputSearch.value.toLowerCase() === `rambo 4` || inputSearch.value.toLowerCase() === `rambo the fight continues`){
        movieFunction48();
    }

    if(inputSearch.value.toLowerCase() === `oblivion`){
        movieFunction49();
    }

    if(inputSearch.value.toLowerCase() === `troy`){
        movieFunction50();
    }

    if(inputSearch.value.toLowerCase() === `john wick`){
        movieFunction51();
    }

    if(inputSearch.value.toLowerCase() === `the terminator` || inputSearch.value.toLowerCase() === `terminator`){
        movieFunction52();
    }

    if(inputSearch.value.toLowerCase() === `the expendables` || inputSearch.value.toLowerCase() === `expendables`){
        movieFunction53();
    }

    if(inputSearch.value.toLowerCase() === `inception`){
        movieFunction54();
    }

    if(inputSearch.value.toLowerCase() === `john wick 2`){
        movieFunction55();
    }

    if(inputSearch.value.toLowerCase() === `fight club`){
        movieFunction56();
    }

    if(inputSearch.value.toLowerCase() === `expendables 2` || inputSearch.value.toLowerCase() === `the expendables 2`){
        movieFunction57();
    }

    if(inputSearch.value.toLowerCase() === `terminator 2` || inputSearch.value.toLowerCase() === `the terminator 2` || inputSearch.value.toLowerCase() === `terminator 2 judgment day`){
        movieFunction58();
    }

    if(inputSearch.value.toLowerCase() === `safe`){
        movieFunction59();
    }

    if(inputSearch.value.toLowerCase() === `memento`){
        movieFunction60();
    }

    if(inputSearch.value.toLowerCase() === `van helsing`){
        movieFunction61();
    }

    if(inputSearch.value.toLowerCase() === `john wick 3`){
        movieFunction62();
    }

    if(inputSearch.value.toLowerCase() === `the martian` || inputSearch.value.toLowerCase() === `martian`){
        movieFunction63();
    }

    if(inputSearch.value.toLowerCase() === `the terminator 3` || inputSearch.value.toLowerCase() === `terminator 3` || inputSearch.value.toLowerCase() === `terminator 3 rise of the machines`){
        movieFunction64();
    }

    if(inputSearch.value.toLowerCase() === `the expendables 3` || inputSearch.value.toLowerCase() === `expendables 3`){
        movieFunction65();
    }

    if(inputSearch.value.toLowerCase() === `ip man 4`){
        movieFunction66();
    }

    if(inputSearch.value.toLowerCase() === `idiocracy`){
        movieFunction67();
    }

    if(inputSearch.value.toLowerCase() === `war`){
        movieFunction68();
    }

    if(inputSearch.value.toLowerCase() === `fearless`){
        movieFunction69();
    }

    if(inputSearch.value.toLowerCase() === `source code`){
        movieFunction70();
    }

    if(inputSearch.value.toLowerCase() === `arrival`){
        movieFunction71();
    }

    if(inputSearch.value.toLowerCase() === `absolutely anything`){
        movieFunction72();
    }

    inputSearch.value = ``;
};

const movieFunction1 = function(){
    removeModalOverlay();

    movieName.textContent = `Fifty Shades Darker`;

    movieInfo.textContent = `
    Director: James Foley
    Actors: Dakota Johnson, Jamie Dornan, Eric Johnson
    Relese Date: 10 February 2017
    IMDb Rate: 4.5/10 
    `;

    movieStory.textContent = `Christian and Ana decide to rekindle their relationship, except this time there are no more rules or punishments. As they begin to get used to their newfound relationship, Christian's past begins to haunt Ana as Christian struggles with his innermost thoughts.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=n6BVyk7hty8`;
};

const movieFunction2 = function(){
    removeModalOverlay();

    movieName.textContent = `The Fate Of The Furious`;

    movieInfo.textContent = `
    Director: F. Gary Gray
    Actors: Vin Diesel, Jason Statham, Dwayne Johnson
    Relese Date: 14 April 2017
    IMDb Rate: 6.6/10 
    `;

    movieStory.textContent = `Now that Dominic Toretto (Vin Diesel) and Letty Ortiz (Michelle Rodriguez) are on their honeymoon, and Brian (Paul Walker) and Mia (Jordana Brewster) have retired from the game, and the rest of the crew has been exonerated, the globetrotting team has found a semblance of a normal life. But when a mysterious woman seduces Dom into the world of crime he can't seem to escape, and a betrayal of those closest to him, they will face trials that will test them as never before. From the shores of Cuba and the streets of New York City to the icy plains off the arctic Barents Sea, the elite force will crisscross the globe to stop an anarchist from unleashing chaos on the world's stage, and to bring home the man who made them a family.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=JwMKRevYa_M`;
};

const movieFunction3 = function(){
    removeModalOverlay();

    movieName.textContent = `Avengers Endgame`;

    movieInfo.textContent = `
    Director: Anthony Russo, Joe Russo
    Actors: Robert Downey Jr., Chris Evans, Mark Ruffalo
    Relese Date: 26 Apr 2019
    IMDb Rate: 8.4/10 
    `;

    movieStory.textContent = `After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face...`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=TcMBFSGVi1c`;
};

const movieFunction4 = function(){
    removeModalOverlay();

    movieName.textContent = `Taken`;

    movieInfo.textContent = `
    Director: Pierre Morel
    Actors: Liam Neeson, Maggie Grace, Famke Janssen
    Relese Date: 30 January 2009
    IMDb Rate: 7.8/10 
    `;

    movieStory.textContent = `Seventeen year-old Kim is the pride and joy of her father Bryan Mills. Bryan is a retired agent who left the Central Intelligence Agency to be near Kim in California. Kim lives with her mother Lenore and her wealthy stepfather Stuart. Kim manages to convince her reluctant father to allow her to travel to Paris with her friend Amanda. When the girls arrive in Paris they share a cab with a stranger named Peter, and Amanda lets it slip that they are alone in Paris. Using this information an Albanian gang of human traffickers kidnaps the girls. Kim barely has time to call her father and give him information. Her father gets to speak briefly to one of the kidnappers and he promises to kill the kidnappers if they do not let his daughter go free. The kidnapper wishes him "good luck," so Bryan Mills travels to Paris to search for his daughter and her friend.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=XK9zL0ze9O4`;
};

const movieFunction5 = function(){
    removeModalOverlay();

    movieName.textContent = `Wrath Of Man`;

    movieInfo.textContent = `
    Director: Guy Ritchie
    Actors: Jason Statham, Holt McCallany, Josh Hartnett
    Relese Date: 07 May 2021
    IMDb Rate: 7.1/10 
    `;

    movieStory.textContent = `Mysterious and wild-eyed, a new security guard for a cash truck surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman's ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=EFYEni2gsK0`;
};

const movieFunction6 = function(){
    removeModalOverlay();

    movieName.textContent = `Jumanji: Welcome To The Jungle`;

    movieInfo.textContent = `
    Director: Jake Kasdan
    Actors: Dwayne Johnson, Karen Gillan, Kevin Hart
    Relese Date: 20 December 2017
    IMDb Rate: 6.9/10 
    `;

    movieStory.textContent = `In a brand-new Jumanji adventure, four high-school kids discover an old video-game console and are drawn into the game's jungle setting, literally becoming the adult avatars they chose. What they discover is that you don't just play Jumanji--you must survive it. To beat the game and return to the real world, they must go on the most dangerous adventure of their lives, discover what Alan Parrish left 20 years ago, and change the way they think about themselves --or they'll be stuck in the game forever, to be played by others without break`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=2QKg5SZ_35I`;
};

const movieFunction7 = function(){
    removeModalOverlay();

    movieName.textContent = `Crank`;

    movieInfo.textContent = `
    Director: Mark Neveldine, Brian Taylor
    Actors: Jason Statham, Amy Smart, Carlos Sanz
    Relese Date: 01 September 2006
    IMDb Rate: 6.9/10 
    `;

    movieStory.textContent = `Poisoned by the potent and deadly mix of synthetic drugs called "The Beijing Cocktail" for getting in the way of the Triads, the tough-as-nails British hitman living in Los Angeles, Chev Chelios, wakes up with a terrible headache. With less than an hour to live, Chev will have to use all the help he can get from his doctor, and use every trick in the book, to consistently keep his heart rate up so that the adrenaline in his bloodstream staves off the effects of the deadly toxin. Now, his heart is pounding faster than any other human being, and as Chelios darts across the city's streets in search of an antidote and the arrogant criminal, Ricky Verona, to exact his revenge, he finds himself compelled to pick fights with no-nonsense drug dealers, murderous assassins, and an army of thugs. But, can Chelios stay alive long enough to protect those he loves, and make it through the day?`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=8rvYrVTnSWw`;
};

const movieFunction8 = function(){
    removeModalOverlay();

    movieName.textContent = `Die Hard`;

    movieInfo.textContent = `
    Director: John McTiernan
    Actors: Bruce Willis, Alan Rickman, Bonnie Bedelia
    Relese Date: 20 July 1988
    IMDb Rate: 6.9/10 
    `;

    movieStory.textContent = `Poisoned by the potent and deadly mix of synthetic drugs called "The Beijing Cocktail" for getting in the way of the Triads, the tough-as-nails British hitman living in Los Angeles, Chev Chelios, wakes up with a terrible headache. With less than an hour to live, Chev will have to use all the help he can get from his doctor, and use every trick in the book, to consistently keep his heart rate up so that the adrenaline in his bloodstream staves off the effects of the deadly toxin. Now, his heart is pounding faster than any other human being, and as Chelios darts across the city's streets in search of an antidote and the arrogant criminal, Ricky Verona, to exact his revenge, he finds himself compelled to pick fights with no-nonsense drug dealers, murderous assassins, and an army of thugs. But, can Chelios stay alive long enough to protect those he loves, and make it through the day?`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=8rvYrVTnSWw`;
};

const movieFunction9 = function(){
    removeModalOverlay();

    movieName.textContent = `Taken 2`;

    movieInfo.textContent = `
    Director: Olivier Megaton
    Actors: Liam Neeson, Famke Janssen, Maggie Grace
    Relese Date: 05 October 2012
    IMDb Rate: 6.2/10 
    `;

    movieStory.textContent = `The retired CIA agent Bryan Mills invites his teenage daughter Kim and his ex-wife Lenore, who has separated from her second husband, to spend a couple of days in Istanbul where he is working. Meanwhile, the patriarch of the community of the Albanian gang of human trafficking, Murad Krasniqi, seeks revenge for the death of his son and organizes another gang to kidnap Bryan and his family. Bryan and Lenore are abducted by the Albanians, but Kim escapes and is the only hope that Bryan has to escape and save Lenore.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=u48UrWtCn5E`;
};

const movieFunction10 = function(){
    removeModalOverlay();

    movieName.textContent = `The Transporter`;

    movieInfo.textContent = `
    Director: Louis Leterrier, Corey Yuen
    Actors: Jason Statham, Shu Qi, Matt Schulze
    Relese Date: 11 October 2002
    IMDb Rate: 6.8/10 
    `;

    movieStory.textContent = `Ex-Special Forces operator Frank Martin lives what seems to be a quiet life along the French Mediterranean, hiring himself out as a mercenary "transporter" who moves goods--human or otherwise--from one place to another. No questions asked. Carrying out mysterious and sometimes dangerous tasks in his tricked-out BMW, Frank adheres to a strict set of rules, which he never breaks. Rule One: Never change the deal. Rule Two: No names--Frank doesn't want to know whom he's working for, or what he's transporting. Rule Three: never look in the package. Frank's newest transport seems no different from the countless ones he's done in the past. He's been hired by an American known only as "Wall Street" to make a delivery; but when Frank stops along the route, he notices his package is moving. Violating Rule Three, Frank looks inside the bag, finding its contents to be a beautiful, gagged woman. Frank's steadfast adherence to his other two rules--which make up his basic code of survival--also quickly fails, hurtling him and his new companion on a road leading to shocking secrets, deadly complications, and the last thing that Frank ever expected to come to believe: that rules are made to be broken.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=7FnbLyv2oio`;
};

const movieFunction11 = function(){
    removeModalOverlay();

    movieName.textContent = `The Godfather`;

    movieInfo.textContent = `
    Director: Francis Ford Coppola
    Actors: Marlon Brando, Al Pacino, James Caan
    Relese Date: 24 Mart 1972
    IMDb Rate: 9.2/10 
    `;

    movieStory.textContent = `The Godfather "Don" Vito Corleone is the head of the Corleone mafia family in New York. He is at the event of his daughter's wedding. Michael, Vito's youngest son and a decorated WW II Marine is also present at the wedding. Michael seems to be uninterested in being a part of the family business. Vito is a powerful man, and is kind to all those who give him respect but is ruthless against those who do not. But when a powerful and treacherous rival wants to sell drugs and needs the Don's influence for the same, Vito refuses to do it. What follows is a clash between Vito's fading old values and the new ways which may cause Michael to do the thing he was most reluctant in doing and wage a mob war against all the other mafia families which could tear the Corleone family apart.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=UaVTIH8mujA`;
};

const movieFunction12 = function(){
    removeModalOverlay();

    movieName.textContent = `The Equalizer`;

    movieInfo.textContent = `
    Director: Antoine Fuqua
    Actors: Denzel Washington, Marton Csokas, Chloë Grace Moretz
    Relese Date: 26 September 2014
    IMDb Rate: 7.2/10 
    `;

    movieStory.textContent = `Robert McCall is a former special service commando who faked his own death in hopes of living out a quiet life. Instead, he comes out of his self-imposed retirement to save a young girl, and finds his desire for justice reawakened after coming face-to-face with members of a brutal Russian gang. McCall becomes the go-to man when the helpless require the kind of vengeance they would never find without his skills.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=VjctHUEmutw`;
};

const movieFunction13 = function(){
    removeModalOverlay();

    movieName.textContent = `Crank: High Voltage`;

    movieInfo.textContent = `
    Director: Mark Neveldine, Brian Taylor
    Actors: Jason Statham, Amy Smart, Clifton Collins Jr.
    Relese Date: 17 April 2009
    IMDb Rate: 6.1/10 
    `;

    movieStory.textContent = `Chev Chelios survives a fall from the sky, sort of. He's in an unknown location, sedated, while various Chinese are harvesting his organs. His heart is gone, in an ice chest; a temporary in its place. Chev escapes, knowing only the name of the guy with the ice chest. He calls Doc Miles, an unlicensed cardiologist, who tells him there's only an hour's life in the artificial heart: keep it charged. Chev needs to find his own heart and get to Doc for a transplant. He starts his time-limited pursuit of shadowy figures, the ice chest, and his heart aided by Eve, Rei, and Venus - a stripper, a prostitute, and a pal with Tourette's - constantly needing an electric charge to keep going.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=t2koYVqwzT4`;
};

const movieFunction14 = function(){
    removeModalOverlay();

    movieName.textContent = `Die Hard 2`;

    movieInfo.textContent = `
    Director: Renny Harlin
    Actors: Bruce Willis, William Atherton, Bonnie Bedelia
    Relese Date: 03 July 1990
    IMDb Rate: 7.1/10 
    `;

    movieStory.textContent = `After the terrifying events in LA, John McClane (Willis) is about to go through it all again. A team of terrorists, led by Col. Stuart (Sadler) is holding the entire airport hostage. The terrorists are planning to rescue a drug lord from justice. In order to do so, they have seized control of all electrical equipment affecting all planes. With no runway lights available, all aircraft have to remain in the air, with fuel running low, McClane will need to be fast`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=CvHp7xJZ4_U`;
};

const movieFunction15 = function(){
    removeModalOverlay();

    movieName.textContent = `Taken 3`;

    movieInfo.textContent = `
    Director: Olivier Megaton
    Actors: Liam Neeson, Forest Whitaker, Maggie Grace
    Relese Date: 16 December 2014
    IMDb Rate: 6.0/10 
    `;

    movieStory.textContent = `Liam Neeson returns as ex-covert operative Bryan Mills, whose long awaited reconciliation with his ex-wife is tragically cut short when she is brutally murdered. Consumed with rage, and framed for the crime, he goes on the run to evade the relentless pursuit of the CIA, FBI and the police. For one last time, Mills must use his "particular set of skills," to track down the real killers, exact his unique brand of justice, and protect the only thing that matters to him now - his daughter.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=JuU0M2xBasc`;
};

const movieFunction16 = function(){
    removeModalOverlay();

    movieName.textContent = `I Am Legend`;

    movieInfo.textContent = `
    Director: Francis Lawrence
    Actors: Will Smith, Alice Braga, Charlie Tahan
    Relese Date: 14 December 2007
    IMDb Rate: 7.2/10 
    `;

    movieStory.textContent = `Robert Neville (Will Smith) is a scientist who was unable to stop the spread of the terrible virus that was incurable and man-made in this post-apocalyptic action thriller. Immune, Neville is now the last human survivor in what is left of New York City and perhaps the world. For three years, Neville has faithfully sent out daily radio messages, desperate to find any other survivors who might be out there. But he is not alone. Mutant victims of the plague - the Infected - lurk in the shadows - watching Neville's every move - waiting for him to make a fatal mistake. Perhaps mankind's last, best hope, Neville is driven by only one remaining mission: to find a way to reverse the effects of the virus using his own immune blood. But he knows he is outnumbered - and quickly running out of time.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=dtKMEAXyPkg`;
};

const movieFunction17 = function(){
    removeModalOverlay();

    movieName.textContent = `Transporter 2`;

    movieInfo.textContent = `
    Director: Louis Leterrier
    Actors: Jason Statham, Amber Valletta, Kate Nauta
    Relese Date: 02 September 2005
    IMDb Rate: 6.3/10 
    `;

    movieStory.textContent = `Frank Martin is the best in the business. The ex-Special Forces operative hires himself out as a mercenary "transporter" who moves goods--human or otherwise. Very simple, he delivers, no questions asked. Frank has relocated from the French Mediterranean to Miami, Florida, where as a favor to a friend, Frank is driving for the wealthy Billings family. There's very little that can surprise The Transporter, but young Jack Billings has done just that; Frank has unexpectedly bonded with Jack, age 6, who he drives to and from school. But when Jack is kidnapped, Frank must use his battle-tested combat skills to retrieve the boy and thwart the kidnappers' master plan to release a virus that will kill anyone with whom it comes in contact.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=rEggzzOVOyo`;
};

const movieFunction18 = function(){
    removeModalOverlay();

    movieName.textContent = `The Equalizer 2`;

    movieInfo.textContent = `
    Director: Antoine Fuqua
    Actors: Denzel Washington, Pedro Pascal, Ashton Sanders
    Relese Date: 20 July 2018
    IMDb Rate: 6.7/10 
    `;

    movieStory.textContent = `Director Antoine Fuqua reunites with Denzel Washington in this sequel to 2014's The Equalizer. Washington resumes his role as Robert McCall: a retired CIA Black Ops operative who now works as a Lyft driver and moonlights as a vigilante. When his long-time friend is murdered he embarks on a relentless, globe-trotting quest for vengeance.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=HyNJ3UrGk_I`;
};

const movieFunction19 = function(){
    removeModalOverlay();

    movieName.textContent = `Transporter 3`;

    movieInfo.textContent = `
    Director: Olivier Megaton
    Actors: Jason Statham, Robert Knepper, Natalya Rudakova
    Relese Date: 26 November 2008
    IMDb Rate: 6.0/10 
    `;

    movieStory.textContent = `Toxic waste bubbles in a ship waiting permission to dock in Odessa. Frank Martin turns down a job in Marseilles, referring it to a pal. A short time later, the pal, wounded by gunfire, crashes his car into Frank's living room and dies, leaving a young woman in the back seat. The employer of the dead man shows up, forces Frank to take the job, snaps a bracelet on his wrist that will explode if Frank gets more than 75 feet from his car, and sends Frank on a journey east with the young woman and a trunk full of something. She's Valentina, nearly mute. Can Frank figure out what's going on, deliver the package, and escape alive? And what does the ship have to do with it?`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=Pbh3CDBNIQA`;
};

const movieFunction20 = function(){
    removeModalOverlay();

    movieName.textContent = `Die Hard With A Vengeance`;

    movieInfo.textContent = `
    Director: John McTiernan
    Actors: Bruce Willis, Jeremy Irons, Samuel L. Jackson
    Relese Date: 19 May 1995
    IMDb Rate: 7.6/10 
    `;

    movieStory.textContent = `John McClane is now almost a full-blown alcoholic and is suspended from the NYPD. But when a bomb goes off in the Bonwit Teller Department Store the police go insane trying to figure out what's going on. Soon, a man named Simon calls and asks for McClane. Simon tells Inspector Walter Cobb that McClane is going to play a game called "Simon Says". He says that McClane is going to do the tasks he assigns him. If not, he'll set off another bomb. With the help of a Harlem electrician, John McClane must race all over New York trying to figure out the frustrating puzzles that the crafty terrorist gives him. But when a bomb goes off in a subway station right by the Federal Reserve (the biggest gold storage in the world) things start to get heated.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=gQ0uSh2Hgcs`;
};

const movieFunction21 = function(){
    removeModalOverlay();

    movieName.textContent = `The Commuter`;

    movieInfo.textContent = `
    Director: Jaume Collet-Serra
    Actors: Liam Neeson, Vera Farmiga, Patrick Wilson
    Relese Date: 12 January 2018
    IMDb Rate: 6.3/10 
    `;

    movieStory.textContent = `Michael MacCauley, a former police officer and now a hard-working life-insurance salesman and a caring family man, has been taking the commuter rail to New York for the past ten years. But, things will take an unexpected turn when, on one of his daily journeys, the cryptic passenger, Joanna, makes Michael a generous and tempting offer to locate a single commuter or face grave consequences. Is this a sick joke, or is this, indeed, a dangerous situation? Now, as Michael races against the clock to solve this wicked conundrum, everyone aboard is a suspect, in a deal that there is more than meets the eye. Can he decide in time who is the one?`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=aDshY43Ol2U`;
};

const movieFunction22 = function(){
    removeModalOverlay();

    movieName.textContent = `The Revenant`;

    movieInfo.textContent = `
    Director: Alejandro G. Iñárritu
    Actors: Leonardo DiCaprio, Tom Hardy, Will Poulter
    Relese Date: 08 January 2016
    IMDb Rate: 8.0/10 
    `;

    movieStory.textContent = `While exploring uncharted wilderness in 1823, legendary frontiersman Hugh Glass sustains injuries from a brutal bear attack. When his hunting team leaves him for dead, Glass must utilize his survival skills to find a way back home while avoiding natives on their own hunt. Grief-stricken and fueled by vengeance, Glass treks through the wintry terrain to track down John Fitzgerald, the former confidant who betrayed and abandoned him.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=LoebZZ8K5N0`;
};

const movieFunction23 = function(){
    removeModalOverlay();

    movieName.textContent = `Central Intelligence`;

    movieInfo.textContent = `
    Director: Rawson Marshall Thurber
    Actors: Dwayne Johnson, Kevin Hart, Danielle Nicolet
    Relese Date: 17 June 2016
    IMDb Rate: 6.3/10 
    `;

    movieStory.textContent = `Calvin Joyner was voted in high school the guy most likely to succeed. 20 years later he's an accountant. As his high school reunion approaches, he tries to make contact with his old schoolmates. And someone named Bob Stone contacts him. He says that he was known as Robbie Weirdicht in school. Calvin remembers that he was picked on, as a matter of fact after an extremely nasty prank he left school. They agree to meet and Calvin is surprised by how much he has changed. Bob asks Calvin to help him out. He says yes and the next thing he knows some men burst into his home. They're CIA, the one in charge is looking for Stone, she says he's a rogue agent. When they can't find Bob they leave. Later he approaches Calvin telling him, he is not a rogue agent, he's trying to find a person known as the Black Badger who is planning to sell some information that in the wrong hands can be disastrous. so he needs Calvin's help to stop him. Calvin's not sure whom he should believe.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=0FKctBraQj0`;
};

const movieFunction24 = function(){
    removeModalOverlay();

    movieName.textContent = `The Butterfly Effect`;

    movieInfo.textContent = `
    Director: Eric Bress, J. Mackye Gruber
    Actors: Ashton Kutcher, Amy Smart, Melora Walters
    Relese Date: 23 January 2004
    IMDb Rate: 7.4/10 
    `;

    movieStory.textContent = `As a child, Evan Treborn was afflicted with blackouts where he would be in one place one minute and then another the next, remembering absolutely nothing in-between. Now all grown up and in college, he decides to read from an old journal he wrote to remember stuff that might have happened in the in-between, and suddenly finds himself back at a certain point in his life. He realizes that those blackouts he had were actually empty spaces of time he had to fill up later in life. Attempting to use this ability to undo unpleasant past events, Evan starts to find that every time he goes back and tries to fix things, he ends up making everything worse. How can he prevent more tragedies from happening and save the one girl he ever loved, Kayleigh (Amy Smart)?`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=B8_dgqfPXFg`;
};

const movieFunction25 = function(){
    removeModalOverlay();

    movieName.textContent = `The Dictator`;

    movieInfo.textContent = `
    Director: Larry Charles
    Actors: Sacha Baron Cohen, Anna Faris, John C. Reilly
    Relese Date: 16 May 2012
    IMDb Rate: 6.4/10 
    `;

    movieStory.textContent = `The Republic of Wadiya is ruled by an eccentric and oppressive leader named Hafez Aladeen. Aladeen is summoned to New York to a UN assembly to address concerns about his country's nuclear weapons program, but the trip goes awry?`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=cYplvwBvGA4`;
};

const movieFunction26 = function(){
    removeModalOverlay();

    movieName.textContent = `The Mechanic`;

    movieInfo.textContent = `
    Director: Simon West
    Actors: Jason Statham, Ben Foster, Donald Sutherland
    Relese Date: 28 January 2011
    IMDb Rate: 6.5/10 
    `;

    movieStory.textContent = `Arthur Bishop (Jason Statham) is a 'mechanic' - an elite assassin with a strict code and unique talent for cleanly eliminating targets. It's a job that requires professional perfection and total detachment, and Bishop is the best in the business. But when his mentor and close friend Harry (Donald Sutherland) is murdered, Bishop is anything but detached. His next assignment is self-imposed - he wants those responsible dead. His mission grows complicated when Harry's son Steve (Ben Foster) approaches him with the same vengeful goal and a determination to learn Bishop's trade. Bishop has always acted alone but he can't turn his back on Harry's son. A methodical hit man takes an impulsive student deep into his world and a deadly partnership is born. But while in pursuit of their ultimate mark, deceptions threaten to surface and those hired to fix problems become problems themselves.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=CMklQNn0OH0`;
};

const movieFunction27 = function(){
    removeModalOverlay();

    movieName.textContent = `Ramo First Blood`;

    movieInfo.textContent = `
    Director: Ted Kotcheff
    Actors: Sylvester Stallone, Brian Dennehy, Richard Crenna
    Relese Date: 22 October 1982
    IMDb Rate: 7.7/10 
    `;

    movieStory.textContent = `John J. Rambo is a former United States Special Forces soldier who fought in Vietnam and won the Congressional Medal of Honor, but his time in Vietnam still haunts him. As he came to Hope, Washington to visit a friend, he was guided out of town by the Sheriff William Teasel who insults Rambo, but what Teasel does not know that his insult angered Rambo to the point where Rambo became violent and was arrested. As he was at the county jail being cleaned, he escapes and goes on a rampage through the forest to try to escape from the sheriffs who want to kill him. Then, as Rambo's commanding officer, Colonel Samuel Trautman tries to save both the Sheriff's department and Rambo before the situation gets out of hand.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=IAqLKlxY3Eo`;
};

const movieFunction28 = function(){
    removeModalOverlay();

    movieName.textContent = `R.I.P.D.`;

    movieInfo.textContent = `
    Director: Robert Schwentke
    Actors: Ryan Reynolds, Jeff Bridges, Mary-Louise Parker
    Relese Date: 19 July 2013
    IMDb Rate: 5.6/10 
    `;

    movieStory.textContent = `In Boston, the dirty cop Nick hides gold that he has stolen from drug-dealers with his partner Hayes in the backyard of his house. However, on the next morning, Nick tells Hayes that he will deliver the evidence to the police since he loves his wife Julia and he could not face her acting that way. Nick and Hayes are assigned to a raid against a dangerous gang and unexpectedly Hayes kills Nick. Nick is drawn by a tunnel and based on his previous experience in the police department, he is assigned in the afterlife by the Proctor to join the Rest in Peace Department that protects the living world from the undead and work with the old-fashioned agent Roy. Roy and Nick accidentally find that Hayes in plotting a scheme to revert the sense of the tunnel to the afterlife and bring the Apocalypse to Earth.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=nt59JjtWFSU`;
};

const movieFunction29 = function(){
    removeModalOverlay();

    movieName.textContent = `Rampage`;

    movieInfo.textContent = `
    Director: Brad Peyton
    Actors: Dwayne Johnson, Naomie Harris, Malin Akerman
    Relese Date: 13 April 2018
    IMDb Rate: 6.1/10 
    `;

    movieStory.textContent = `Athena-1, a space station owned by gene manipulation company Energyne, is destroyed after a laboratory rat mutates and wreaks havoc. Dr. Kerry Atkins, the lone surviving crew member, is ordered by CEO Claire Wyden to retrieve research canisters containing a pathogen. Atkins is able to flee in the escape pod when the station implodes, but due to damage from the rat it disintegrates upon re-entry, killing her. The falling pieces leave a trail of debris across the United States, including the Everglades in Florida, where a canister is consumed by an American crocodile, and a forest in Wyoming, where a gray wolf is exposed to the pathogen. Primatologist Davis Okoye, a former US Army Special Forces soldier and member of an anti-poaching unit, works at the San Diego Wildlife Sanctuary. He has befriended a rare albino western lowland gorilla named George, having saved him from poachers, and communicates with George using sign language and hand gestures. At night, one of the canisters crash-lands in George's habitat, and George is exposed to the pathogen...`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=coOKvrsmQiI`;
};

const movieFunction30 = function(){
    removeModalOverlay();

    movieName.textContent = `The Wolf Of Wall Street`;

    movieInfo.textContent = `
    Director: Martin Scorsese
    Actors: Leonardo DiCaprio, Jonah Hill, Margot Robbie
    Relese Date: 25 December 2013
    IMDb Rate: 8.2/10 
    `;

    movieStory.textContent = `In the early 1990s, Jordan Belfort teamed with his partner Donny Azoff and started brokerage firm Stratton Oakmont. Their company quickly grows from a staff of 20 to a staff of more than 250 and their status in the trading community and Wall Street grows exponentially. So much that companies file their initial public offerings through them. As their status grows, so do the amount of substances they abuse, and so do their lies. They draw attention like no other, throwing lavish parties for their staff when they hit the jackpot on high trades. That ultimately leads to Belfort featured on the cover of Forbes Magazine, being called "The Wolf Of Wall St.". With the FBI onto Belfort's trading schemes, he devises new ways to cover his tracks and watch his fortune grow. Belfort ultimately comes up with a scheme to stash their cash in a European bank. But with the FBI watching him like a hawk, how long will Belfort and Azoff be able to maintain their elaborate wealth and luxurious lifestyles?`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=iszwuX1AK6A`;
};

const movieFunction31 = function(){
    removeModalOverlay();

    movieName.textContent = `300`;

    movieInfo.textContent = `
    Director: Zack Snyder
    Actors: Gerard Butler, Lena Headey, David Wenham
    Relese Date: 09 March 2007
    IMDb Rate: 7.6/10 
    `;

    movieStory.textContent = `In the Battle of Thermopylae of 480 BC an alliance of Greek city-states fought the invading Persian army in the mountain pass of Thermopylae. Vastly outnumbered, the Greeks held back the enemy in one of the most famous last stands of history. Persian King Xerxes led a Army of well over 100,000 (Persian king Xerxes before war has about 170,000 army) men to Greece and was confronted by 300 Spartans, 700 Thespians, and 400 Thebans. Xerxes waited for 10 days for King Leonidas to surrender or withdraw but left with no options he pushed forward. After 3 days of battle all the Greeks were killed. The Spartan defeat was not the one expected, as a local shepherd, named Ephialtes, defected to the Persians and informed Xerxes that the separate path through Thermopylae, which the Persians could use to outflank the Greeks, was not as heavily guarded as they thought.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=UrIbxk7idYA`;
};

const movieFunction32 = function(){
    removeModalOverlay();

    movieName.textContent = `Hachi: A Dog's Tale`;

    movieInfo.textContent = `
    Director: Lasse Hallström
    Actors: Richard Gere, Joan Allen, Cary-Hiroyuki Tagawa
    Relese Date: 12 March 2010
    IMDb Rate: 8.1/10 
    `;

    movieStory.textContent = `Commuting by train, music professor Parker Wilson finds an Akita puppy, whose cage broke unnoticed during shipping, leaving his destination unknown, and since the station can't care for it and the dog catcher warns even such cute ones may not be adopted in the two weeks allowed, he kindly takes it home. His bossy, jealous wife Cate initially makes Parker swear it won't stay, but by the time its' clear nobody will claim him and an adoption candidate is found, she agrees to keep the dog, who won over their daughter Andy and her fiance Michael at first sight. Parker's Japanese college friend Ken inspires naming the pup Hachi(ko), and is pleasantly surprised when Parker successfully tackles the challenge to get it to fetch, which Akitas don't usually do. Hachi makes a habit of waiting for his equally doting master at the station every evening, but after a cardiac crisis, Parker dies. Hachi refuses to accept this, being moved to Michael's home as Cate moves out, waiting for a master who can never come home again, by now collectively adopted by sympathizing town-folk. The story is told in flashbacks as class assignment 'my hero' by Michael's teen son Robbie, who also gets an Akita puppy.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=TIl2o1hm1F4`;
};

const movieFunction33 = function(){
    removeModalOverlay();

    movieName.textContent = `Ip Man`;

    movieInfo.textContent = `
    Director: Wilson Yip
    Actors: Donnie Yen, Simon Yam, Siu-Wong Fan
    Relese Date: 12 December 2008
    IMDb Rate: 8.0/10 
    `;

    movieStory.textContent = `In 1935 in Foshan, south China, there are martial arts schools on every street corner. Ip Man is the undisputed martial arts champion, yet he has not devoted himself to teaching. Despite this, it seems that all the kung fu masters of the city are eager to fight him to improve their reputation.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=RBYbqO_FUA4`;
};

const movieFunction34 = function(){
    removeModalOverlay();

    movieName.textContent = `Mechanic: Resurrection`;

    movieInfo.textContent = `
    Director: Dennis Gansel
    Actors: Jason Statham, Jessica Alba, Tommy Lee Jones
    Relese Date: 26 August 2016
    IMDb Rate: 5.7/10 
    `;

    movieStory.textContent = `Arthur Bishop, the master assassin who faked his death in hopes of putting that part of his ;life behind him, now lives a quiet life in Rio. But someone who knows who he is shows up and tells him, that if he wants to continue living this life, he will do three jobs for someone. Bishop tries to tell them he has the wrong man but they know who he is and if he won't do the job, they will take him but he gets away. He then goes to a resort in Thailand run by a friend, Mae, where he tries to find out who is looking for him. Later a woman named Gina shows up looking for medical assistance and Mae can't help but notice bruises all over her body. Mae deduces she's a battered woman and when Mae hears her being beaten, Mae asks Bishop to help her. He goes and kills the guy she's with. He kills the man and then sets fire to the boat he's on. But he sees that Gina has a photo of him. He deduces that they one who wants him, sent her. He confronts her and she admits that she works at a children's shelter in Cambodia and that someone told her if she didn't do what he said, the children would be endanger. While waiting for the man to come, they get close. And when the man's people comes, they grab them. Bishop is brought to the man who wants him to do the jobs and he tells Bishop that if he doesn't do it, Gina will be killed. So Bishop has no choice but to do it.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=G-P3f_wDXvs`;
};

const movieFunction35 = function(){
    removeModalOverlay();

    movieName.textContent = `Rambo Frist Blood Part 2`;

    movieInfo.textContent = `
    Director: George P. Cosmatos
    Actors: Sylvester Stallone, Richard Crenna, Charles Napier
    Relese Date: 22 May 1985
    IMDb Rate: 6.5/10 
    `;

    movieStory.textContent = `Only a few years after the all-out guerrilla war in First Blood (1982), John Rambo's former commanding officer, Colonel Sam Trautman, pulls him out of jail, only to send him back to a place he swore never to return: the impenetrable jungles of Vietnam. Entrusted with the dangerous task of collecting evidence that American POWs are still being held captive, Rambo agrees to infiltrate the unknown zone, and before long, he finds himself double-crossed, marooned behind the enemy lines. Once, John fought for his country. Now, the government has left him for dead in a Soviet-infested land. Can Rambo fulfil his suicide mission? Will he deliver his lethal justice?`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=WQGJAIYtWD4`;
};

const movieFunction36 = function(){
    removeModalOverlay();

    movieName.textContent = `Shutter Island`;

    movieInfo.textContent = `
    Director: Martin Scorsese
    Actors: Leonardo DiCaprio, Emily Mortimer, Mark Ruffalo
    Relese Date: 19 February 2010
    IMDb Rate: 8.2/10 
    `;

    movieStory.textContent = `In 1954, up-and-coming U.S. marshal Teddy Daniels is assigned to investigate the disappearance of a patient from Boston's Shutter Island Ashecliffe Hospital. He's been pushing for an assignment on the island for personal reasons, but before long he thinks he's been brought there as part of a twisted plot by hospital doctors whose radical treatments range from unethical to illegal to downright sinister. Teddy's shrewd investigating skills soon provide a promising lead, but the hospital refuses him access to records he suspects would break the case wide open. As a hurricane cuts off communication with the mainland, more dangerous criminals "escape" in the confusion, and the puzzling, improbable clues multiply, Teddy begins to doubt everything - his memory, his partner, even his own sanity.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=5iaYLCiq5RM`;
};

const movieFunction37 = function(){
    removeModalOverlay();

    movieName.textContent = `Homefront`;

    movieInfo.textContent = `
    Director: Gary Fleder
    Actors: Jason Statham, James Franco, Winona Ryder
    Relese Date: 27 November 2013
    IMDb Rate: 6.5/10 
    `;

    movieStory.textContent = `Phil Broker is a former DEA agent who has gone through a crisis after his actions against a biker gang went horribly wrong ,and it cost the life of his boss's son. He is recently widowed and is left with a 9 year old daughter, Maddy. He decides to quit the turbulent and demanding life of the DEA for Maddy's sake and retires to a small town. His daughter fights off a boy who is bullying her at school, and this sets in motion a round of events that end in his direct confrontation with the local Meth drug lord. His past with the biker gang also enters the arena, making matters more complex. But he has a mission in his mind to protect his daughter, and he is ready to pay any cost that it demands.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=tjSOj8b804U`;
};

const movieFunction38 = function(){
    removeModalOverlay();

    movieName.textContent = `Interstellar`;

    movieInfo.textContent = `
    Director: Christopher Nolan
    Actors: Matthew McConaughey, Anne Hathaway, Jessica Chastain
    Relese Date: 07 November 2014
    IMDb Rate: 8.6/10 
    `;

    movieStory.textContent = `Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=zSWdZVtXT7E`;
};

const movieFunction39 = function(){
    removeModalOverlay();

    movieName.textContent = `Ip Man 2`;

    movieInfo.textContent = `
    Director: Wilson Yip
    Actors: Donnie Yen, Xiaoming Huang, Sammo Kam-Bo Hung
    Relese Date: 29 April 2010
    IMDb Rate: 7.5/10 
    `;

    movieStory.textContent = `Ip Man 2 is a 2010 Hong Kong biographical martial arts film loosely based on the life of Ip Man, a grandmaster of the martial art Wing Chun. A sequel to the 2008 film Ip Man, the film was directed by Wilson Yip, and stars Donnie Yen, who reprises the leading role. Continuing after the events of the earlier film, the sequel centers on Ip's movements in Hong Kong, which is under British colonial rule. He attempts to propagate his discipline of Wing Chun, but faces rivalry from other practitioners, including the local master of Hung Ga martial arts.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=gaBdgu00otE`;
};

const movieFunction40 = function(){
    removeModalOverlay();

    movieName.textContent = `Rambo First Blood Part 3`;

    movieInfo.textContent = `
    Director: Peter MacDonald
    Actors: Sylvester Stallone, Richard Crenna, Marc de Jonge
    Relese Date: 25 May 1988
    IMDb Rate: 5.8/10 
    `;

    movieStory.textContent = `Weary of the horrors of war, the expert in guerrilla tactics, John Rambo, has settled in exotic Thailand since the suicide rescue mission in Rambo: First Blood Part II (1985). However, John will return to action, when his grizzled mentor, Colonel Sam Trautman, gets trapped behind the enemy lines in Soviet-infested Afghanistan, after a botched attempt to aid the remaining rebel pockets. Now, there's no turning back--and as each minute counts--John must act fast before it's too late. Once more, the government will deny John's existence if the men of the ruthless Soviet Colonel, Zaysen, capture him. But, John shows no mercy, and, this time, he fights for his friend. Can Rambo save the only man who ever stood by him?`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=IQt9bDOGTgg`;
};

const movieFunction41 = function(){
    removeModalOverlay();

    movieName.textContent = `The Time Machine`;

    movieInfo.textContent = `
    Director: Simon Wells
    Actors: Guy Pearce, Yancey Arias, Mark Addy
    Relese Date: 08 March 2002
    IMDb Rate: 5.9/10 
    `;

    movieStory.textContent = `Based on the classic sci-fi novel by H.G. Wells, scientist and inventor, Alexander Hartdegen, is determined to prove that time travel is possible. His determination is turned to desperation by a personal tragedy that now drives him to want to change the past. Testing his theories with a time machine of his own invention, Hartdegen is hurtled 800,000 years into the future, where he discovers that mankind has divided into the hunter - and the hunted.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=90T7iLuzFgg`;
};

const movieFunction42 = function(){
    removeModalOverlay();

    movieName.textContent = `World War Z`;

    movieInfo.textContent = `
    Director: Marc Forster
    Actors: Brad Pitt, Mireille Enos, Daniella Kertesz
    Relese Date: 21 June 2013
    IMDb Rate: 7.0/10 
    `;

    movieStory.textContent = `Life for former United Nations investigator Gerry Lane and his family seems content. Suddenly, the world is plagued by a mysterious infection turning whole human populations into rampaging mindless zombies. After barely escaping the chaos, Lane is persuaded to go on a mission to investigate this disease. What follows is a perilous trek around the world where Lane must brave horrific dangers and long odds to find answers before human civilization falls.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=Md6Dvxdr0AQ`;
};

const movieFunction43 = function(){
    removeModalOverlay();

    movieName.textContent = `Ip Man 3`;

    movieInfo.textContent = `
    Director: Wilson Yip
    Actors: Donnie Yen, Lynn Xiong, Jin Zhang
    Relese Date: 24 December 2015
    IMDb Rate: 7.0/10 
    `;

    movieStory.textContent = `The year is 1959, where Ip Man lives in Hong Kong with his wife and his younger son. Trouble arises when a corrupt property developer and his thugs terrorize the school where Ip Man's son goes to. Ip Man and his disciples have to help the police guard the school day and night. On the other hand, Ip Man has to deal with his wife's terminal sickness, and at the same time faces a challenge from another Wing Chun fighter who ambitiously seeks to claim the Wing Chun Grandmaster title.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=yo7z8c87Egg`;
};

const movieFunction44 = function(){
    removeModalOverlay();

    movieName.textContent = `Looper`;

    movieInfo.textContent = `
    Director: Rian Johnson
    Actors: Joseph Gordon-Levitt, Bruce Willis, Emily Blunt
    Relese Date: 28 September 2012
    IMDb Rate: 7.4/10 
    `;

    movieStory.textContent = `Joe is classified as a "looper", a job in which his employers use time travel to send men from the future to be killed into the past, where Joe can properly dispose of their bodies. However, to tie up loose ends and erase the evidence of his ever being a looper, Joe knows that one day his future self will be sent back for him to kill. When this day comes, Joe's future self is prepared and escapes, and the two men struggle separately in the past trying to evade capture and attempting to fulfill their own personal agendas.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=2iQuhsmtfHw`;
};

const movieFunction45 = function(){
    removeModalOverlay();

    movieName.textContent = `The Brothers Grimsby`;

    movieInfo.textContent = `
    Director: Louis Leterrier
    Actors: Sacha Baron Cohen, Mark Strong, Rebel Wilson
    Relese Date: 11 March 2016
    IMDb Rate: 6.2/10 
    `;

    movieStory.textContent = `MI6's top assassin (Mark Strong) has a brother. Unfortunately for him, he's a football hooligan (Sacha Baron Cohen) from the town of Grimsby. Nobby has everything a man from the poor English fishing town of Grimsby could want - 9 children and the most attractive girlfriend in northern England (Rebel Wilson). There's only one thing missing in his life: his little brother, Sebastian. After they were adopted by different families as children, Nobby spent 28 years searching for him. Upon hearing of his location, Nobby sets off to reunite with his brother, unaware that not only is his brother an MI6 agent, but he's just uncovered a plot that puts the world in danger. On the run and wrongfully accused, Sebastian realizes that if he is going to save the world, he will need the help of its biggest idiot.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=_YtclB_02wA`;
};

const movieFunction46 = function(){
    removeModalOverlay();

    movieName.textContent = `Focus`;

    movieInfo.textContent = `
    Director: Glenn Ficarra, John Requa
    Actors: Will Smith, Margot Robbie, Rodrigo Santoro
    Relese Date: 27 February 2015
    IMDb Rate: 6.6/10 
    `;

    movieStory.textContent = `Nicky Spurgeon is an extremely accomplished con man who takes an amateur con artist, Jess, under his wing. Nicky and Jess become romantically involved, and with Nicky's profession of being a liar and a cheater for a living, he realizes that deception and love are things that don't go together. They split, only to see each other three years later... And things get messy.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=MxCRgtdAuBo`;
};

const movieFunction47 = function(){
    removeModalOverlay();

    movieName.textContent = `Bloodshot`;

    movieInfo.textContent = `
    Director: Dave Wilson
    Actors: Vin Diesel, Eiza González, Sam Heughan
    Relese Date: 13 March 2020
    IMDb Rate: 5.7/10 
    `;

    movieStory.textContent = `Ray Garrison, an elite soldier who was killed in battle, is brought back to life by an advanced technology that gives him the ability of super human strength and fast healing. With his new abilities, he goes after the man who killed his wife, or at least, who he believes killed his wife. He soon comes to learn that not everything he learns can be trusted. The true question is: Can he even trust himself?`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=vOUVVDWdXbo`;
};

const movieFunction48 = function(){
    removeModalOverlay();

    movieName.textContent = `Rambo The Fight Continues`;

    movieInfo.textContent = `
    Director: Sylvester Stallone
    Actors: Sylvester Stallone, Julie Benz, Matthew Marsden
    Relese Date: 25 January 2008
    IMDb Rate: 7.0/10 
    `;

    movieStory.textContent = `Vietnam veteran John Rambo has survived many harrowing ordeals in his lifetime and has since withdrawn into a simple and secluded existence in Thailand, where he spends his time capturing snakes for local entertainers, and chauffeuring locals in his old PT boat. Even though he is looking to avoid trouble, trouble has a way of finding him: a group of Christian human rights missionaries, led by Michael Burnett and Sarah Miller, approach Rambo with the desire to rent his boat to travel up the river to Burma. For over fifty years, Burma has been a war zone. The Karen people of the region, who consist of peasants and farmers, have endured brutally oppressive rule from the murderous Burmese military and have been struggling for survival every single day. After some inner contemplation, Rambo accepts the offer and takes Michael, Sarah, and the rest of the missionaries up the river. When the missionaries finally arrive at the Karen village, they find themselves part of a raid by the sadistic Major Pa Tee Tint and a slew of Burmese army men. A portion of the villagers and missionaries are tortured and viciously murdered, while Tint and his men hold the remainder captive. Concerned by their disappearance, the minister in charge of the mission gathers a group of mercenaries and pleas Rambo transport them with his boat, since he knows their last exact location. But Rambo can't stay behind: he joins the team where he belongs, to liberate the survivors from the clutches of Major Tint in what may be one of his deadliest missions ever.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=2CRjdwRYQbU`;
};

const movieFunction49 = function(){
    removeModalOverlay();

    movieName.textContent = `Oblivion`;

    movieInfo.textContent = `
    Director: Joseph Kosinski
    Actors: Tom Cruise, Morgan Freeman, Andrea Riseborough
    Relese Date: 19 April 2013
    IMDb Rate: 7.0/10 
    `;

    movieStory.textContent = `One of the few remaining drone repairmen assigned to Earth, its surface devastated after decades of war with the alien Scavs, discovers a crashed spacecraft with contents that bring into question everything he believed about the war, and may even put the fate of mankind in his hands.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=XmIIgE7eSak`;
};

const movieFunction50 = function(){
    removeModalOverlay();

    movieName.textContent = `Troy`;

    movieInfo.textContent = `
    Director: Wolfgang Petersen
    Actors: Brad Pitt, Eric Bana, Orlando Bloom
    Relese Date: 14 May 2004
    IMDb Rate: 7.3/10 
    `;

    movieStory.textContent = `It is the year 1250 B.C. during the late Bronze age. Two emerging nations begin to clash after Paris, the Trojan prince, convinces Helen, Queen of Sparta, to leave her husband, Menelaus, and sail with him back to Troy. After Menelaus finds out that his wife was taken by the Trojans, he asks his brother Agamemnon to help him get her back. Agamemnon sees this as an opportunity for power. So they set off with 1,000 ships holding 50,000 Greeks to Troy. With the help of Achilles, the Greeks are able to fight the never before defeated Trojans. But they come to a stop by Hector, Prince of Troy. The whole movie shows their battle struggles and the foreshadowing of fate in this adaptation of Homer's classic "The Iliad."`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=znTLzRJimeY`;
};

const movieFunction51 = function(){
    removeModalOverlay();

    movieName.textContent = `John Wick`;

    movieInfo.textContent = `
    Director: Chad Stahelski, David Leitch
    Actors: Keanu Reeves, Michael Nyqvist, Alfie Allen
    Relese Date: 24 October 2014
    IMDb Rate: 7.4/10 
    `;

    movieStory.textContent = `With the untimely death of his beloved wife still bitter in his mouth, John Wick, the expert former assassin, receives one final gift from her--a precious keepsake to help John find a new meaning in life now that she is gone. But when the arrogant Russian mob prince, Iosef Tarasov, and his men pay Wick a rather unwelcome visit to rob him of his prized 1969 Mustang and his wife's present, the legendary hitman will be forced to unearth his meticulously concealed identity. Blind with revenge, John will immediately unleash a carefully orchestrated maelstrom of destruction against the sophisticated kingpin, Viggo Tarasov, and his family, who are fully aware of his lethal capacity. Now, only blood can quench the boogeyman's thirst for retribution.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=2AUmvWm5ZDQ`;
};

const movieFunction52 = function(){
    removeModalOverlay();

    movieName.textContent = `The Terminator`;

    movieInfo.textContent = `
    Director: James Cameron
    Actors: Arnold Schwarzenegger, Linda Hamilton, Michael Biehn
    Relese Date: 26 October 1984
    IMDb Rate: 8.1/10 
    `;

    movieStory.textContent = `Sent back from a dystopian 2029--where the cold machines have conquered the entire world--to 1984 Los Angeles, the indestructible cyborg-assassin known as the "Terminator" commences his deadly mission to kill humankind's most important woman: the unsuspecting Sarah Connor. However, from the same war-torn post-apocalyptic future comes a battle-scarred defender--Kyle Reese, a brave soldier of the human Resistance Army--bent on stopping the cybernetic killer from eliminating the world's last hope. But, the Terminator has no feelings, he doesn't sleep, and above all, he won't stop until he carries out his grim task. Does our future lie in our past?`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=k64P4l2Wmeg`;
};

const movieFunction53 = function(){
    removeModalOverlay();

    movieName.textContent = `The Expendables`;

    movieInfo.textContent = `
    Director: Sylvester Stallone
    Actors: Sylvester Stallone, Jason Statham, Jet Li
    Relese Date: 13 August 2010
    IMDb Rate: 6.4/10 
    `;

    movieStory.textContent = `Barney Ross leads the "Expendables", a band of highly skilled mercenaries including knife enthusiast Lee Christmas, martial arts expert Yin Yang, heavy weapons specialist Hale Caesar, demolitionist Toll Road and loose-cannon sniper Gunner Jensen. When the group is commissioned by the mysterious Mr. Church to assassinate the merciless dictator of a small South American island, Barney and Lee head to the remote locale to scout out their opposition. Once there, they meet with local rebel Sandra and discover the true nature of the conflict engulfing the city. When they escape the island and Sandra stays behind, Ross must choose to either walk away and save his own life - or attempt a suicidal rescue mission that might just save his soul.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=8KtYRALe-xo`;
};

const movieFunction54 = function(){
    removeModalOverlay();

    movieName.textContent = `Inception`;

    movieInfo.textContent = `
    Director: Christopher Nolan
    Actors: Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page
    Relese Date: 16 July 2010
    IMDb Rate: 6.4/10 
    `;

    movieStory.textContent = `Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=YoHD9XEInc0`;
};

const movieFunction55 = function(){
    removeModalOverlay();

    movieName.textContent = `John Wick: Chapter 2`;

    movieInfo.textContent = `
    Director: Chad Stahelski
    Actors: Keanu Reeves, Riccardo Scamarcio, Ian McShane
    Relese Date: 10 February 2017
    IMDb Rate: 7.4/10 
    `;

    movieStory.textContent = `Bound by an inescapable blood debt to the Italian crime lord, Santino D'Antonio, and with his precious 1969 Mustang still stolen, John Wick--the taciturn and pitiless assassin who thirsts for seclusion--is forced to visit Italy to honour his promise. But, soon, the Bogeyman will find himself dragged into an impossible task in the heart of Rome's secret criminal society, as every killer in the business dreams of cornering the legendary Wick who now has an enormous price on his head. Drenched in blood and mercilessly hunted down, John Wick can surely forget a peaceful retirement as no one can make it out in one piece.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=XGk2EfbD_Ps`;
};

const movieFunction56 = function(){
    removeModalOverlay();

    movieName.textContent = `Fight Club`;

    movieInfo.textContent = `
    Director: David Fincher
    Actors: Brad Pitt, Edward Norton, Meat Loaf
    Relese Date: 15 October 1999
    IMDb Rate: 8.8/10 
    `;

    movieStory.textContent = `A nameless first person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla (Helena Bonham Carter), another fake attendee of support groups, his life seems to become a little more bearable. However when he associates himself with Tyler (Brad Pitt) he is dragged into an underground fight club and soap making scheme. Together the two men spiral out of control and engage in competitive rivalry for love and power.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=O1nDozs-LxI`;
};

const movieFunction57 = function(){
    removeModalOverlay();

    movieName.textContent = `The Expendables 2`;

    movieInfo.textContent = `
    Director: Simon West
    Actors: Sylvester Stallone, Liam Hemsworth, Randy Couture
    Relese Date: 17 August 2012
    IMDb Rate: 6.6/10 
    `;

    movieStory.textContent = `Barney Ross is approached by CIA man Church, who wants him and his guns for hire to go to the former Soviet Union to retrieve something that was on a plane that crashed. Church doesn't tell him what he is getting. And Church sends a woman, Maggie with him to make sure he gets it. They find the plane and get the thing but some men take one of Barney's people hostage and the leader tells him to give him what they got or he'll kill his hostage. They give it to him but he kills his hostage anyway. Barney asks Maggie what was so important about that thing. She says that it showed the location of a Russian plutonium storage mine. Barney decides to track the man down and deal with him. They track them down and discover that the man they seek is Vilain who leads a group known as The Sangs and that they have taken all the men from the surrounding villages to work the mine.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=ip_CYHdyUBs`;
};

const movieFunction58 = function(){
    removeModalOverlay();

    movieName.textContent = `Terminator 2: Judgment Day`;

    movieInfo.textContent = `
    Director: James Cameron
    Actors: Arnold Schwarzenegger, Linda Hamilton, Edward Furlong
    Relese Date: 03 July 1991
    IMDb Rate: 8.6/10 
    `;

    movieStory.textContent = `Over 10 years have passed since the first machine called The Terminator tried to kill Sarah Connor and her unborn son, John. The man who will become the future leader of the human resistance against the Machines is now a healthy young boy. However, another Terminator, called the T-1000, is sent back through time by the supercomputer Skynet. This new Terminator is more advanced and more powerful than its predecessor and its mission is to kill John Connor when he's still a child. However, Sarah and John do not have to face the threat of the T-1000 alone. Another Terminator (identical to the same model that tried and failed to kill Sarah Connor in 1984) is also sent back through time to protect them. Now, the battle for tomorrow has begun.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=CRRlbK5w8AE`;
};

const movieFunction59 = function(){
    removeModalOverlay();

    movieName.textContent = `Safe`;

    movieInfo.textContent = `
    Director: Boaz Yakin
    Actors: Jason Statham, Catherine Chan, Chris Sarandon
    Relese Date: 27 April 2012
    IMDb Rate: 6.5/10 
    `;

    movieStory.textContent = `In China, the girl Mei is a genius that looks like a computer in numbers. She is abducted by the Chinese Triads and the boss Han Jiao takes Mei to New York's Chinatown in order to help him in his criminal activities. Meanwhile, the fighter Luke Wright has his life destroyed when he wins a fight against the will of the Russian Mafia and accidentally kills his opponent. The Russian mobsters kill his wife and the alcoholic Luke wanders aimlessly on the streets and homeless shelters. One day, Han Jiao asks Mei to memorize a long number and soon the Russian Mafia abducts the girl from the Chinese mobs. She escapes from the mobsters and is chased by the Russians; by the corrupt detectives from the NYPD; and by the Triads. When Luke sees the girl fleeing from the Russian mobs in the subway, he protects the girl and discovers that the number she had memorized is the combination of a safe where the Triads keep 30 million dollars. Luke is an elite agent and uses his skills to protect the girl.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=gU-wjVD_58c`;
};

const movieFunction60 = function(){
    removeModalOverlay();

    movieName.textContent = `Memento`;

    movieInfo.textContent = `
    Director: Christopher Nolan
    Actors: Guy Pearce, Carrie-Anne Moss, Joe Pantoliano
    Relese Date: 25 May 2001
    IMDb Rate: 8.4/10 
    `;

    movieStory.textContent = `Memento chronicles two separate stories of Leonard, an ex-insurance investigator who can no longer build new memories, as he attempts to find the murderer of his wife, which is the last thing he remembers. One story line moves forward in time while the other tells the story backwards revealing more each time.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=HDWylEQSwFo`;
};

const movieFunction61 = function(){
    removeModalOverlay();

    movieName.textContent = `Van Helsing`;

    movieInfo.textContent = `
    Director: Stephen Sommers
    Actors: Hugh Jackman, Kate Beckinsale, Richard Roxburgh
    Relese Date: 03 May 2004
    IMDb Rate: 6.0/10 
    `;

    movieStory.textContent = `Van Helsing is in the world to rid all evil, even if not everyone agrees with him. The Vatican sends the monster hunter and his ally, Carl, to Transylvania. They have been sent to this land to stop the powerful Count Dracula. Whilst there they join forces with a Gypsy Princess called Anna Valerious, who is determined to end an ancient curse on her family by destroying the vampire. They just don't know how!`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=3fdRKme00uI`;
};

const movieFunction62 = function(){
    removeModalOverlay();
    movieName.textContent = `John Wick: Chapter 3`;

    movieInfo.textContent = `
    Director: Chad Stahelski
    Actors: Keanu Reeves, Halle Berry, Ian McShane
    Relese Date: 17 May 2019
    IMDb Rate: 7.4/10 
    `;

    movieStory.textContent = `In this third installment of the adrenaline-fueled action franchise, skilled assassin John Wick (Keanu Reeves) returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin's guild, the High Table, John Wick is excommunicado, but the world's most ruthless hit men and women await his every turn.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=M7XM597XO94`;
};

const movieFunction63 = function(){
    removeModalOverlay();

    movieName.textContent = `The Martian`;

    movieInfo.textContent = `
    Director: Ridley Scott
    Actors: Matt Damon, Jessica Chastain, Kristen Wiig
    Relese Date: 02 October 2015
    IMDb Rate: 8.0/10 
    `;

    movieStory.textContent = `During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and spirit to subsist and find a way to signal to Earth that he is alive. Millions of miles away, NASA and a team of international scientists work tirelessly to bring "the Martian" home, while his crewmates concurrently plot a daring, if not impossible, rescue mission. As these stories of incredible bravery unfold, the world comes together to root for Watney's safe return.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=ej3ioOneTy8`;
};

const movieFunction64 = function(){
    removeModalOverlay();

    movieName.textContent = `Terminator 3: Rise of the Machines`;

    movieInfo.textContent = `
    Director: Jonathan Mostow
    Actors: Arnold Schwarzenegger, Nick Stahl, Kristanna Loken
    Relese Date: 02 July 2003
    IMDb Rate: 6.3/10 
    `;

    movieStory.textContent = `More than 10 years after 'Terminator 2', John Connor now exists only as a drifter - living 'off the grid', so no more Terminators from the future can hunt him down. Unfortunately, SkyNet does send another one back - and this one is called the T-X, even more powerful & advanced than the dreaded T-1000. However, another CSM-101 Terminator is also sent back to protect John against the T-X. Now, Skynet is patiently assuming control of civilian computer systems, under the guise of a computer virus. John has also met his future wife, Kate Brewster, whose father - a U.S. Air Force General - is in charge of the military computer systems & is leery of up linking SkyNet. However, when the SkyNet virus infects the U.S military computers & leaves the country open to attack, the machines begin their horrific takeover. Soon a nuclear war will result - and the war against the machines will begin. Can the outdated CSM-101 Terminator eliminate the highly advanced T-X - or will a darker future await man following the nuclear attack?`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=5UgPJhyJmlM`;
};

const movieFunction65 = function(){
    removeModalOverlay();

    movieName.textContent = `The Expendables 3`;

    movieInfo.textContent = `
    Director: Patrick Hughes
    Actors: Sylvester Stallone, Jason Statham, Jet Li
    Relese Date: 15 August 2014
    IMDb Rate: 6.1/10 
    `;

    movieStory.textContent = `Barney (Stallone), Christmas (Statham) and the rest of the team comes face-to-face with Conrad Stonebanks (Gibson), who years ago co-founded The Expendables with Barney. Stonebanks subsequently became a ruthless arms trader and someone who Barney was forced to kill - or so he thought. Stonebanks, who eluded death once before, now is making it his mission to end The Expendables -- but Barney has other plans. Barney decides that he has to fight old blood with new blood, and brings in a new era of Expendables team members, recruiting individuals who are younger, faster and more tech-savvy. The latest mission becomes a clash of classic old-school style versus high-tech expertise in the Expendables' most personal battle yet.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=4xD0junWlFc`;
};

const movieFunction66 = function(){
    removeModalOverlay();

    movieName.textContent = `Ip Man 4: The Finale`;

    movieInfo.textContent = `
    Director: Wilson Yip
    Actors: Donnie Yen, Scott Adkins, Danny Kwok-Kwan Chan
    Relese Date: 20 December 2019
    IMDb Rate: 7.0/10 
    `;

    movieStory.textContent = `Ip Man has to travel to San Francisco to find a new school for his son who just gets expelled. When he attempts to get a recommendation letter from the Chinese Benevolent Association, he finds that the martial arts masters are furious with one of Ip Man's students who teaches Kung Fu to Americans. Meanwhile, discrimination against Chinese is making things even more tense as Ip Man has to stand up for his fellow countrymen as well.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=oCBGTCNJW2g`;
};

const movieFunction67 = function(){
    removeModalOverlay();

    movieName.textContent = `Idiocracy`;

    movieInfo.textContent = `
    Director: Mike Judge
    Actors: Luke Wilson, Maya Rudolph, Dax Shepard
    Relese Date: 25 January 2007
    IMDb Rate: 6.5/10 
    `;

    movieStory.textContent = `Officer Collins has been spearheading one of the US Army's most secretive experiments to date: the Human Hibernation Project. If successful, the project would store its subjects indefinitely until they are needed most. Their first test subject - Joe Bauers - was not chosen for his superiority. Instead, he's chosen because he's the most average guy in the armed services. But scandal erupts after the experiment takes place - the base is closed, and the president denies any knowledge of the project - Unfortunately, Joe doesn't wake up in a year, he wakes up in 500 years. But during that time human evolution has taken a dramatic downturn. After waking up, Joe takes a prison-assigned IQ test and finds that he's the smartest guy alive. Awaiting a full presidential pardon if he can solve one of the country's biggest problems - the dwindling plant population, Joe races against time to solve this problem. But he alienates half the country in the process. Can he make things right and escape a rather bizarre execution?`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=clYwX8Z43zg`;
};

const movieFunction68 = function(){
    removeModalOverlay();

    movieName.textContent = `War`;

    movieInfo.textContent = `
    Director: Philip G. Atwell
    Actors: Jet Li, Jason Statham, Nadine Velazquez
    Relese Date: 24 August 2007
    IMDb Rate: 6.2/10 
    `;

    movieStory.textContent = `After his partner Tom Lone and family are killed apparently by the infamous and elusive assassin Rogue, FBI agent John Crawford becomes obsessed with revenge as his world unravels into a vortex of guilt and betrayal. Rogue eventually resurfaces to settle a score of his own, setting off a bloody crime war between Asian mob rivals Chang of the Triad's and Yakuza boss Shiro. When Jack and Rogue finally come face to face, the ultimate truth of their pasts will be revealed.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=3kItMaElnJQ`;
};

const movieFunction69 = function(){
    removeModalOverlay();

    movieName.textContent = `Fearless`;

    movieInfo.textContent = `
    Director: Ronny Yu
    Actors: Jet Li, Li Sun, Yong Dong
    Relese Date: 22 September 2006
    IMDb Rate: 7.6/10 
    `;

    movieStory.textContent = `Fearless (2006) by guest contributor Volcan Kacar This brilliant martial arts film not only loosely tells the story of Huo Yuanjia, the marital artist who not only saved China from Western foreign imperialism and the Empire of Japan but protected the nation’s honour.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=23LxENZE8zo`;
};

const movieFunction70 = function(){
    removeModalOverlay();

    movieName.textContent = `Source Code`;

    movieInfo.textContent = `
    Director: Duncan Jones
    Actors: Jake Gyllenhaal, Michelle Monaghan, Vera Farmiga
    Relese Date: 01 April 2011
    IMDb Rate: 7.5/10 
    `;

    movieStory.textContent = `Army Captain Colter Stevens finds himself working on a special program where his consciousness can be inserted into another human being. The only catch is can only be there for 8 minutes at any given time. That morning, a bomb exploded on a commuter train just outside Chicago. He occupies the body of teacher going to work on that train and is confused as to what he is doing or why he is there as his last memory is of flying his helicopter on a combat mission in Afghanistan. Those in charge of the program explain to him that there is a bomb on the train, and that he must locate it. More importantly, he must identify the bomber as another bombing is expected later that day. He is also told however that he cannot change the past and can only gather information. As he develops a liking for his traveling companion Christina, he sets out to test that theory.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=mnJegNyAb1w`;
};

const movieFunction71 = function(){
    removeModalOverlay();

    movieName.textContent = `Arrival`;

    movieInfo.textContent = `
    Director: Denis Villeneuve
    Actors: Amy Adams, Jeremy Renner, Forest Whitaker
    Relese Date: 11 November 2016
    IMDb Rate: 7.9/10 
    `;

    movieStory.textContent = `Linguistics professor Louise Banks leads an elite team of investigators when gigantic spaceships touchdown in 12 locations around the world. As nations teeter on the verge of global war, Banks and her crew must race against time to find a way to communicate with the extraterrestrial visitors. Hoping to unravel the mystery, she takes a chance that could threaten her life and quite possibly all of mankind.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=tFMo3UJ4B4g`;
};

const movieFunction72 = function(){
    removeModalOverlay();

    movieName.textContent = `Absolutely Anything`;

    movieInfo.textContent = `
    Director: Terry Jones
    Actors: Simon Pegg, Kate Beckinsale, Sanjeev Bhaskar
    Relese Date: 12 May 2017
    IMDb Rate: 5.9/10 
    `;

    movieStory.textContent = `Some aliens, who travel from planet to planet to see what kind of species inhabit them, come to Earth. And if humans are, according to their standards, decent, they are welcomed to be their friend. And if not, the planet is destroyed. To find out, they choose one inhabitant and give that person the power to do whatever he or she wants. And they choose Neil Clarke (Simon Pegg), a teacher who teaches the special kids. He is constantly being berated by the headmaster and is attracted to his neighbor, Catherine (Kate Beckinsale), but doesn't have the guts to approach her. But now he can do anything he wants, but has to be careful.`;

    buttonWatchTrailer.href = `https://www.youtube.com/watch?v=GvzkU6xF4s8`;
};

const removeModalOverlay = function(){
    modal.classList.remove(`hidden-modal`);
    overlay.classList.remove(`hidden-overlay`);
}

const closeModalFunction = function(){
    modal.classList.add(`hidden-modal`);
    overlay.classList.add(`hidden-overlay`);
};