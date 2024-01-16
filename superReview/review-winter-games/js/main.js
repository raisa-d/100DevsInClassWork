//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function evenNums(array) {
    let newArray = [];
    array.forEach(element => {
        if (element%2 === 0) {
            newArray.push(element)
        }
    });
    return newArray
}

let nums = ['2', '3', '6', '17', '20']

let evenArray = evenNums(nums)
console.log(evenArray)