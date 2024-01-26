// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentence is a question
const sentence = 'What is the best TV show?'
const isAQuestion = str => {
    if (str[str.length - 1] === '?') {
        alert(sentence)
    } else console.log('not a question');
}

// in class version: if this ends with a question mark, alert it
const question = str => str.endsWith('?') ? alert(str) : console.log('not a question')


//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let notJunior = 'I\'m looking for jr. dev positions and you\'re a jr. dev'
let replaceJunior = str => str.replaceAll('jr. dev', 'software engineer')

console.log(replaceJunior(notJunior))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
let rps = _ => Math.random() < 0.33 ? 'rock' : Math.random() < 0.66 ? 'paper' : 'scissors'

// console.log(rps())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
let checkWin = userChoice => {
    let computer = rps()
    
    // if user wins
    if ((userChoice === 'paper' && computer === 'rock') || (userChoice === 'rock' && computer === 'scissors') || (userChoice === 'scissors' && computer === 'paper')) {
        console.log('You won!')
    // if they tie
    } else if (userChoice === computer) {
        console.log('You tied...BORING')
    // if user loses
    } else console.log('You lost :(')
}

// checkWin('scissors')

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
let choices = ['rock', 'paper', 'scissors']
let playXTimes = arr => arr.forEach(choice => checkWin(choice))

playXTimes(choices)