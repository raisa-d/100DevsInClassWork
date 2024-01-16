//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

// MY VERSION: reduce method
let product = arr => {
    let prod = arr.reduce((product, current) => product * current, 1)
    alert(prod)
}

let nums = [12, 3, 29, 9]
product(nums)

// LEON'S VERSION: forEach method
let multNums = arr => {
    let product = 1;
    // multiply each number by product, thereby updating the product each time
    arr.forEach(num => product *= num)
    alert(product)
}

multNums([10, 2, 3])

// LEON'S VERSION 2: traditional for loop
function multNumsFor(arr) {
    let product = 1;
    
    for(let i = 0; i < arr.length; i++) {
        product *= arr[i]
    }
    alert(product)
}