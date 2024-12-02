// *Variables*
// Create a variable and console log the value
const num = 2;
console.log(num)

// Create a variable, add 10 to it, and alert the value
let num2 = 1;
alert(num2 += 10)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4AndAlert(n1, n2, n3, n4) {
    alert(n1-n2-n3-n4);
}

// Create a function that divides one number by another and returns the remainder
const divideReturnRemainder = (n1, n2) => n1 % n2;

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(n1, n2) {
    if((n1+n2) > 50) {
        alert('Jumanji')
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(n1, n2, n3) {
    const product = n1 * n2 * n3;
    if(product % 3 === 0) {
        alert('ZEBRA');
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function loopWordXTimes(word, n) {
    for(let i = 1; i <= n; i++) {
        console.log(word);
    }
}

loopWordXTimes('hi', 3) // hi hi hi 