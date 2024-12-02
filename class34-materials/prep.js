/* 
Practicing PREP: Parameters, Returns, Examples, Pseudocode

FizzBuzz
- do you mind if i take some notes about the problem you just gave me so I make sure I understand it?
    - 1 to num, div by 3 fizz, 5 buzz, 3 & 5 fizzbuzz
    - ask in interview: is that correct? make sure you're on same page and you understand the problem
- PARAMETERS: I just have some questions I'd like to ask to better understand the problem before we jump into solving. You mentioned that I am takign in a number. Will this number always be a number? It will never be a string, boolean, undefined, another function? Will this number ever be a floated value or always be a whole number? Will it ever be negative? Is there antyhing else that might be passed in that I haven't asked about?
- P: num, whole #, positive, 
- I just want to clarify what I'm returning to you. Can I print them to the console or do you want me to actually return the numbers? I'm not going to spit outo an array of all the numbers? I'm just going to conosle.log() each number as we go along? Just making sure you'd like to see a number console.log() from 1 and every number up to the number you gave me
- R: console.log all values
- Do you mind if I give you an example before we jump into solving this problem?
*/

// EXAMPLE
function fizzBuzzExample(num) {

}

// i'm goint ot set up some test cases here
fizzBuzz(5) // 1 2 fizz 4 buzz. does this look correct to you? we should see this in the console?
fizzBuzz(3) // 1 2 fizz. check that this looks correct
fizzBuzz(15) // 1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzBuzz. does this look correct in terms of what we're expecting to come out of this problem/function? does this all seem good?

/* at this point we've set up test cases for two reasons:
- buys you time, can run up the clock. they often can't give you a harder question to follow up
- shows your process
- makes sure we know we're doing the right thing, we understand we're doing what the interviewer is asking of us
- I have my receipts. if interviewer decides to change the qeustion 30 mins into me solving the question i go wait a min we ran these test cases, you said this was correct. where did bop come from you said fizzbuzz.
*/

// Pseudocode. ask does this seem like a good direction to go about solving this problem? at this point they'd probably give me a hint
function fizzBuzzPseudo(num) {
    // loop from 1 to num
    // conditions % 3 & 5, % 3, % 5
    // console.log num or fizz, buzz, fizzBuzz
}

// if you have a 45 min thing, you should spend at least 15 mins doing PREP

// Then solve problem
function fizzBuzz(num) {
    // loop from 1 to num
    for(let i = 1; i <= num; i++) {
        (i % 3 === 0 && i % 5 == 0) ? console.log('fizzBuzz') : i % 3 ===0 ? console.log('fizz') : i % 5 === 0 ? console.log('buzz') : console.log(i);
    };
};