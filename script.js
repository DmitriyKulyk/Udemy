"use strict"

let numberOfFilms

function start () {
    numberOfFilms = +prompt('Сколько фильмов ви уже посмотрелі?', '')
     while ( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)  ) {
         numberOfFilms = +prompt('Сколько фильмов ви уже посмотрелі?', '')
     }
}
start();

let personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false,
}

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотрених фильмов?', ''),
              b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a !== '' && b !== '' && a.length  < 50) {
            personalMoviesDB.movies[a] = b;
        } else {
            console.log("Done")
            i--;
        }
    }
}
rememberMyFilms();


function detectPersonalLevel () {
    if (personalMoviesDB.count < 10) {
        console.log('Просмотрено доволі мало фільмов')
    } else if  (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30 ) {
        console.log('Ви класический зритель')
    } else if ( personalMoviesDB.count >= 30) {
        console.log('Ви киноман')
    } else {
        console.log('Error')
    }
}
detectPersonalLevel();


function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMoviesDB)
    } else {
        console.log("Error")
    }
}
showMyDB(personalMoviesDB.privat);


function writeYourGenres () {
       for (let i = 1; i <= 3; i++) {
        personalMoviesDB.genres[i-1] = prompt(`Ваш любимий жанр под номером? ${i}`,'')
       }
}
 console.log(writeYourGenres());



