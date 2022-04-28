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