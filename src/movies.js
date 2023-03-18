// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(!moviesArray.length) {
        return 0;
    }
    let count = 0;
    moviesArray.filter(el => {
        if(el.genre.includes('Drama') && el.director === 'Steven Spielberg') {
            count += 1;
        }
    });

    return count;
    
    }


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(!moviesArray.length) {
        return 0;
    }
    const scoredMovies = moviesArray.filter(movie => movie.score !== undefined);
    const totalScore = scoredMovies.reduce((acc, movie) => acc + (movie.score || 0), 0);
    const avgScore = totalScore / scoredMovies.length;
    return parseFloat(avgScore.toFixed(2));
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if(!moviesArray.length) {
        return 0;
    }
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    const totalScore = dramaMovies.reduce((acc, movie) => acc + (movie.score || 0), 0);
    const avgScore = totalScore / dramaMovies.length;
    return parseFloat(avgScore.toFixed(2));
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = [...moviesArray]; 
    sortedMovies.sort((movieA, movieB) => {
      if (movieA.year !== movieB.year) {
        return movieA.year - movieB.year;
      } else {
        return movieA.title.localeCompare(movieB.title);
      }
    });
    return sortedMovies;
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedMovies = [...moviesArray]; 
    sortedMovies.sort((movieA, movieB) => {
      return movieA.title.localeCompare(movieB.title);
    });
    const titlesArray = sortedMovies.map(movie => movie.title);
    return titlesArray.slice(0, 20);
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
