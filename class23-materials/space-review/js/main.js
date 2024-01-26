//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [2, 4, 6, '8']
let sumArray = arr => arr.reduce((sum, current) => sum + +current, 0)

console.log(sumArray(nums))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let squareArray = arr => arr.map(num => num**2)
console.table(squareArray(nums))

//Create a function that takes string
//Print the reverse of that string to the console
let string = 'redrum'
let reverseStr = str => str.split('').reverse().join('')

//Create a function that takes in a string
//Alert if the string is a palindrome or not
let palindrome = str => str === reverseStr(str) ? console.log('tis indeed a palindrome') : console.log('not a palindrome')

palindrome('racecar')