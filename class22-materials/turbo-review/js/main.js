// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
const favDrink = 'peppermint tea'.trim()
console.log(favDrink)

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
const multipleWords = 'I am a mermaid, you are an apple'

// Leons method: use search. if it returns -1, the word isn't in the string. if it returns a number that's the index of the beginning of the word
if (multipleWords.search('apple') !== -1) {
    console.log('yes apple')
} else {
    console.log('no apple')
}

// my method
let isAppleAWord = str => {
    // split string into array
    str = str.split(' ')
    for (let word of str) {
        if (word === 'apple') {
            return console.log('yes, apple is a word in the string')
        }
    }
    return console.log('no apple')
}
isAppleAWord(multipleWords)

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
let rps = _ => {
    // create probability between 0 and 1
    let probability = Math.random()
    if (probability < 0.33) return 'rock';
    else if (probability < 0.66) return 'paper';
    else return 'scissors';
}

// rewriting all on one line
let rpsShortened = _ => Math.random() < 0.33 ? 'rock' : Math.random() < 0.66 ? 'paper' : 'scissors'

// console.log(rps())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
let checkWin = userChoice => {
    // computer's choice
    let botChoice = rps()
    
    // if user wins (paper beats rock, rock beats scissors, scissors beat paper)
    if ((userChoice === 'rock' && botChoice === 'scissors') || (userChoice === 'paper' && botChoice === 'rock') || (userChoice = 'scissors' && botChoice == 'paper')) console.log(`You won!`);
    else if (userChoice === botChoice) console.log('You tied');
    else console.log(`You lost`)
}

// console.log(checkWin('scissors'))


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
let choices = ['rock', 'paper', 'scissors']

let playGameXTimes = arr => {
    // will run amount of times as # of items because its forEach
    arr.forEach(choice => checkWin(choice))
}

playGameXTimes(choices)