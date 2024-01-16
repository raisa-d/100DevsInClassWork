//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let shows = ['The 100', 'Bob\'s Burgers', 'Schitt\'s Creek', 'Gossip Girl']

// method 1: for of
let printShows = arr => {
    for (let i of arr) {
        console.log(i)
    }
}

printShows(shows)

// method 2: forEach
let printShows2 = arr => arr.forEach(i => console.log(i))

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let nums = [1, 2, 10, 15, 23, 66]
let evenNums = nums.filter(num => num % 2 === 0)
console.log(evenNums)

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
let secondMinMax = arr => {
    // sort array in asending order
    arr = arr.sort((a, b) => a - b)

    let secondLowest = arr[1]
    let secondHighest = arr[arr.length - 2]
    alert(secondLowest + secondHighest)
}

console.log(secondMinMax([2, 3, 5, 4, 1]))