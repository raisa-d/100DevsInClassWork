//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (Bonus: do not use map or filter)

// arrow function, using filter array method
const evenNums = arr => arr.filter(e => e % 2 === 0);

// not using map or filter: use for loop, create new array, push even nums to new array
function evenNumsNoMethods(arr) {
    let result = [];
    // loop through array
    for(let i = 0; i < arr.length; i++) {
        // check if number is even by checking if divisible by 2
        if(arr[i] % 2 === 0){
        // if even, push to new array
        result.push(arr[i])
        };
    };
    // return result
    return result;
};

// same as the second function, but using forEach instead of the full loop
function evensOnly(arr) {
    let result = [];
    arr.forEach(num => {
      if(num%2===0) {
        result.push(e)
      }
    })
    return result;
  };

console.log(evenNums([1, 2, 3, 4])) // [2, 4]
console.log(evenNumsNoMethods([1, 2, 3, 4, 4, 6, 10, 17])) // [2, 4, 4, 6, 10]
console.log(evensOnly([1, 2, 3, 4, 5, 6])) // [2, 4, 6]