//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
const reverseList = a => console.log(a.reverse());
reverseList(['jigglypuff', 'squirtle', 'charmander']);

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
const compareArrays = (a, b) => {
    const sumOfSquares = a.reduce((sum, current) => sum + current**2, 0);

    const sumOfCubes = b.reduce((sum, current) => sum + current**3, 0);

    return sumOfSquares > sumOfCubes ? true : false;
};

// more concise way: compare them directly to each other and return a boolean of whether the sum of squares is greater than the sum of cubes
const compareArrays2 = (a, b) => a.reduce((sum, current) => sum + current**2, 0) > b.reduce((sum, current) => sum + current**3, 0);

const square = [3, 3, 3] // 27
const cube = [2, 2, 2]//24
console.log(compareArrays(square,cube)) // output: true

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
const multiplesOfIndex = a => {
    let multiples = [];
    for(let i = 0; i < a.length; i++) {
        if(a[i] % i === 0) {
            multiples.push(a[i]);
        }
    };
    return multiples;
};

// another way to do this (way more concise to use filter array method)
const multiplesPt2 = a => a.filter((e, i) => e % i === 0);

// console.log(multiplesOfIndex([68, -1, 1, -7, 10, 10]));
console.log(multiplesPt2([68, -1, 1, -7, 10, 10]));

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. Return your answer as a number.
const mixedArray = ['1', 3, '2', 9, 1];

const sumMixed = arr => arr.reduce((a, b) => a + +b, 0);

console.log(sumMixed(mixedArray));