//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements
let separateNums = num => {
    numberArray = []
    for(let i = 1; i <= num; i++) {
        numberArray.push(i)
    }
    return numberArray
}

console.log(separateNums(5))
