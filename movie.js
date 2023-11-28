//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
// a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
class Movie{
    constructor(title,made,rating)
    {
        this.title=title;
        this.made=made;
        this.rating=rating
    }
}
    var m1=new Movie("Joker","Warner Bros","R");
    console.log(m1);

 //b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.   
    class Movie{
        constructor(title,made,rating="PG")
        {
            this.title=title;
            this.made=made;
            this.rating=rating
        }
    }
        var m2=new Movie("Dragon","Dreamworks Animation");
        console.log(m2);

//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
class Movie {
      constructor(title, studio, rating = "PG") {
    	    this.title = title;
    	    this.studio = studio;
    	    this.rating = rating;
    	  }
    	
    	}
    function getPG(movies) {
    	  let pgMovies = [];
    	  for (let movie of movies) {
    	    if (movie.rating === "PG") {
    	      pgMovies.push(movie);
    	    }
    	  }
    	  return pgMovies;
    	}

    	let movies = [
    	  new Movie("Joker","Warner Bros","R"),
         new Movie("Dragon","Dreamworks Animation","PG"),
    	  new Movie("Inception","Legendary Entertainment","PG13"),
    	  new Movie("Casino Royale","Eon Productions","PG13"),
    	  new Movie("Homealone","20th century Studios","PG"),
    	];
    	let pgMovies = getPG(movies);
    	console.log(pgMovies);

//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class movie{  
constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
var m1=new Movie("Casino Royale","Eon Productions","PG13");
console.log(m1)
