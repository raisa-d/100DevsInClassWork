//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [1, 2, 3, 4, '5']

// METHOD 1: using arr.reduce() and unary plus operator
let sumReduce = arr => arr.reduce((sum, current) => sum + +current, 0)

console.log(sumReduce(nums))

// METHOD 2: using for loop
let sumFor = arr => {
    let sum = 0;
    for (let num of arr) {
        sum += num
    }
    return sum
}

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let squared = arr => arr.map(n => n**2)
console.table(squared(nums))

//Create a function that takes string
//Print the reverse of that string to the console
let reversed = str => str.trim().split('').reverse().join('')
console.log(reversed('raisa'))

//Create a function that takes in a string
//Alert if the string is a palindrome or not
let palindromeChecker = str => {
    let reversedStr = reversed(str)

    if (str === reversedStr) console.log('palindrome');
    else console.log('not a palindrome');
}

palindromeChecker('racecar')