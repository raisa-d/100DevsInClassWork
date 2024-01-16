//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements
let countUp = n => {
    let list = []
    for(let i = 1; i <= n; i++) {
        list.push(i)
    }
    return list
}

console.table(countUp(7))