//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

let evenNums = arr => {
    let even = []
    for (let num of arr) {
        // if number is even, push it to new array
        if (num%2 === 0) {
            even.push(num)
        }
    }
    return even
}

// doing same exercise with filter
let evenFilter = arr => arr.filter(num => num % 2 === 0)

// doing same exercise with for loop & forEach loop
let evenFor = arr => {
    let evens = []
    
    // for loop
    // for(let i=0; i < arr.length; i++) {
    //     if (arr[i] % 2 === 0) {
    //         evens.push(arr[i])
    //     }
    // }

    // forEach loop
    arr.forEach(num => {
        if(num%2===0) {
            evens.push(num)
        }
    })

    return evens
}

let nums = [10, 11, 12, 13, 14]

// function calls
// console.table(evenNums(nums))
// console.table(evenFilter(nums))
console.table(evenFor(nums))