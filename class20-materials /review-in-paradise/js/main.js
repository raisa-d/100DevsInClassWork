// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood;
favFood = 'potato'
console.log(favFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let string = 'lala'
console.log(string[1])
console.log(string.charAt(1))

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
let threeNums = (n1, n2, n3) => {
    let product = (n1/n2)*n3
    console.log(product)
}

threeNums(2, 6, 17)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
let cubeRootIt = n => console.log(Math.cbrt(n).toFixed(4))
cubeRootIt(9)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
let checkForSummer = month => month.toLowerCase() === 'june' || month.toLowerCase() === 'july' || month.toLowerCase() === 'august'? alert('YAY') : alert('Booo')

let checkForSummer2 = month => {
    let summerMonths = [
        'june', 
        'july', 
        'august'
    ]

    let otherMonths = [
        'september', 'october', 'november', 'december', 'january', 'february', 'march', 'april', 'may'
    ]

    summerMonths.includes(month.toLowerCase()) ? alert('YAY') : otherMonths.includes(month.toLowerCase()) ? alert('BOO') : alert('That isn\'t a valid month')
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
let skippy = n => {
    for(let i = 1; i <= n; i++) {
        // if modulo 5 equals 0, it is a multiple of 5. if it does not equal 0, we will log it
        if (i % 5 !== 0) {
            console.log(i)
        }
    }
}
