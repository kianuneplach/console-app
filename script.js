const numberOfFilms = +prompt("How much movies have you already seen?", "");


const a = prompt("One of the last movies you watched?", ""),
      b = prompt("How will you rate it?"),
      c = prompt("One of the last movies you watched?", ""),
      d = prompt("How will you rate it?");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        a: b,
        c: d
    },
    actors: {},
    genres: [],
    private: false
};
