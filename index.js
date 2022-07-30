let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели");
  }
}
start();

const personalMoviedDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Какой последний посмотренный фильмы"),
      b = prompt("на сколько его оцените");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMoviedDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("replay");
      i--;
    }
  }
}
rememberMyFilms();

function detectPersonalLevel() {
  if (personalMoviedDB.count < 10) {
    alert("просмотрено мало фильмов");
  } else if (personalMoviedDB.count >= 10 && personalMoviedDB.count <= 30) {
    alert("Вы классический зритель");
  } else if (personalMoviedDB.count > 30) {
    alert("Вы киноман");
  } else {
    alert("ERROR");
  }
}
detectPersonalLevel();

function showMyDB(obj) {
  if (!obj) {
    console.log(personalMoviedDB);
  }
}
showMyDB(personalMoviedDB.private);

function writeYourGenres(obj) {
  for (let i = 1; i <= 3; i++) {
    let answer = prompt(`You are favorite genres ${i}`);
    obj.genres.push(answer);
  }
  return obj;
}
writeYourGenres(personalMoviedDB);
