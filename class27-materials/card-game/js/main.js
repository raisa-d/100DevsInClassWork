let deckID = '';

// on page load, we get a deck of cards. we store the id for that deck in a global variable deckID (if we don't already have a deckID in local storage)
fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);

        // if there is not already a deckID stored, set it
        if (!localStorage.getItem('deck_id')) {
          localStorage.setItem('deck_id', data.deck_id)
        }
      })
      .catch(err => {
        console.log(`error ${err}`)
      });

// set deckID variable to the same ID stored in local storage
deckID += localStorage.getItem('deck_id')

// event listener for button click
document.querySelector('button').addEventListener('click', drawTwo)

// when click button, draw 2 cards
function drawTwo(){
  const url = `https://www.deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      
      // insert player imgs into dom
      document.querySelector('#player1').src = data.cards[0].image
      document.querySelector('#player2').src = data.cards[1].image

      // get value from each card, pass into convertToNum function so all of our data can be handled as numbers
      let player1Val = convertToNum(data.cards[0].value)
      let player2Val = convertToNum(data.cards[1].value)

      // variable for where we place result
      let result = document.querySelector('h3')

      if (player1Val > player2Val) {
        result.innerText = 'Player 1 Wins'
      } else if (player1Val < player2Val) {
        result.innerText = 'Player 2 Wins'
      } else {
        result.innerText = 'WARTIME'
      }
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

// helper function to convert royal cards to numbers (or for other cards, just return the string value to a number)
let convertToNum = val => val === 'ACE' ? 14 : val === 'KING' ? 13 : val === 'QUEEN' ? 12 : val === 'JACK' ? 11 : Number(val)

/*
CHANGES TO MAKE
- make it so that we don't actually fetch a new deck at all on page load unless we need to
- handle the case where you have no cards left but try to draw
- ask user how many decks they want to draw from (how long the game will be essentially)
- if there was a previous game, ask user if they want to continue that game or start a new one. if they want to start a new one, we need to get a new deckID
- announce who won the game
- incorporate what happens when you actually have war, drawing 3 cards each then the 4th
- we need to store how many cards each player is holding. the person who has the most when there are no more cards to pick from wins.
- style game
*/