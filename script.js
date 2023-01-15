"use strict"

let numberOfFilms = +prompt('Сколько фильмов ви уже посмотрелі?', '');

let personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
}

const a = prompt('Один из последних просмотрених фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотрених фильмов?', ''),
      d = prompt('На сколько оцените его?', '')

personalMoviesDB.movies[a] = b
personalMoviesDB.movies[c] = d
console.log(personalMoviesDB)


