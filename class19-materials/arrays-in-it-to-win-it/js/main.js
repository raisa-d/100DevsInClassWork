//Create an array of movies with at least three movies.
let movies = ['Truman Show', 'Mr. Nobody', 'Wonka', 'The Little Mermaid']

//Using the array from above, store the first movie in a variable
let firstMovie = movies[0]

//Get the length of the original array and store it in a new variable
let moviesLength = movies.length

//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?

// get index number of last item by taking the length of the list and subracting 1 (since its zero indexing)
let lastMovie = movies[moviesLength-1]